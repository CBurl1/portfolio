#!/usr/bin/env python3
"""Generate the one-page software engineering resume used by the site."""

import argparse
from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import inch
from reportlab.platypus import (
    BaseDocTemplate,
    Frame,
    KeepTogether,
    PageTemplate,
    Paragraph,
    Spacer,
    Table,
    TableStyle,
)


OUTPUT = (
    Path(__file__).resolve().parent.parent
    / "src/Assets/Collin_Burleigh_Software_Engineer_Resume.pdf"
)
INK = colors.HexColor("#142331")
MUTED = colors.HexColor("#526372")
ACCENT = colors.HexColor("#2458b8")
LINE = colors.HexColor("#dce4e4")


def style(name, size, leading=None, bold=False, color=INK, space_after=0):
    return ParagraphStyle(
        name,
        fontName="Helvetica-Bold" if bold else "Helvetica",
        fontSize=size,
        leading=leading or size * 1.3,
        textColor=color,
        spaceAfter=space_after,
        alignment=TA_LEFT,
    )


NAME = ParagraphStyle(
    "name",
    fontName="Helvetica-Bold",
    fontSize=25,
    leading=28,
    textColor=INK,
    alignment=TA_LEFT,
)
HEADLINE = ParagraphStyle(
    "headline",
    fontName="Helvetica-Bold",
    fontSize=10,
    leading=13,
    textColor=ACCENT,
    alignment=TA_LEFT,
)
CONTACT = ParagraphStyle(
    "contact",
    fontName="Helvetica",
    fontSize=8,
    leading=11,
    textColor=MUTED,
    alignment=TA_LEFT,
)
BODY = style("body", 10, 13.7)
SMALL = style("small", 9.65, 13)
SECTION = style("section", 10.5, 13.6, bold=True, color=ACCENT)
ITEM = style("item", 10.1, 13.2, bold=True)
DETAIL = style("detail", 9.2, 12.1, color=MUTED)


def section(title):
    line = Table([[Paragraph(title.upper(), SECTION)]], colWidths=[7.35 * inch])
    line.setStyle(
        TableStyle(
            [
                ("LINEBELOW", (0, 0), (-1, -1), 0.6, LINE),
                ("LEFTPADDING", (0, 0), (-1, -1), 0),
                ("RIGHTPADDING", (0, 0), (-1, -1), 0),
                ("TOPPADDING", (0, 0), (-1, -1), 0),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 3),
            ]
        )
    )
    return [Spacer(1, 6), line, Spacer(1, 4)]


def entry(title, detail, bullets):
    rows = [Paragraph(title, ITEM), Paragraph(detail, DETAIL)]
    rows += [Paragraph("- " + bullet, SMALL) for bullet in bullets]
    rows.append(Spacer(1, 7))
    return KeepTogether(rows)


def freelance_project(name, detail, bullets):
    rows = [Paragraph(f"<b>{name}</b> | {detail}", DETAIL)]
    rows += [Paragraph("- " + bullet, SMALL) for bullet in bullets]
    rows.append(Spacer(1, 4))
    return KeepTogether(rows)


def draw_page(canvas, doc):
    canvas.saveState()
    canvas.setTitle("Collin Burleigh - Software Engineer Resume")
    canvas.setAuthor("Collin Burleigh")
    canvas.setStrokeColor(LINE)
    canvas.setLineWidth(0.6)
    canvas.line(38, letter[1] - 23, letter[0] - 38, letter[1] - 23)
    canvas.setStrokeColor(ACCENT)
    canvas.setLineWidth(2.2)
    canvas.line(38, letter[1] - 23, 92, letter[1] - 23)
    canvas.setStrokeColor(LINE)
    canvas.setLineWidth(0.5)
    canvas.line(38, 35, letter[0] - 38, 35)
    canvas.restoreState()


def main(output=OUTPUT):
    output = Path(output)
    output.parent.mkdir(parents=True, exist_ok=True)
    doc = BaseDocTemplate(
        str(output),
        pagesize=letter,
        leftMargin=38,
        rightMargin=38,
        topMargin=35,
        bottomMargin=40,
        title="Collin Burleigh - Software Engineer Resume",
        author="Collin Burleigh",
    )
    frame = Frame(38, 40, letter[0] - 76, letter[1] - 75, leftPadding=0, rightPadding=0, topPadding=0, bottomPadding=0)
    doc.addPageTemplates(PageTemplate(id="resume", frames=[frame], onPage=draw_page))

    story = [
        Paragraph("Collin Burleigh", NAME),
        Paragraph("SOFTWARE ENGINEER  |  PYTHON BACKEND", HEADLINE),
        Spacer(1, 3),
        Paragraph(
            "New Hampshire, USA  |  603-617-9989  |  "
            "<link href='mailto:me@collinburleigh.com'>me@collinburleigh.com</link>"
            "<br/><link href='https://collinburleigh.com'>collinburleigh.com</link>  |  "
            "<link href='https://www.linkedin.com/in/burleighcollin'>linkedin.com/in/burleighcollin</link>  |  "
            "<link href='https://github.com/CBurl1'>github.com/CBurl1</link>",
            CONTACT,
        ),
    ]
    story += section("Technical skills")
    skills = [
        ("Languages", "Python, TypeScript, JavaScript, SQL"),
        ("Backend &amp; data", "FastAPI, Flask, PostgreSQL, Supabase, REST APIs, pytest"),
        ("Frontend &amp; desktop", "Next.js, React, Electron, Tailwind CSS, HTML/CSS"),
        ("Cloud &amp; integrations", "AWS, Vercel, Magento 2 API, Veeqo API, Auth0, Stripe, OpenAI API, Git"),
    ]
    story.extend(Paragraph(f"<b>{label}:</b> {value}", SMALL) for label, value in skills)
    story += section("Engineering experience")
    story.append(Paragraph("Independent Software Developer  |  Jun 2023 - Present", ITEM))
    story.append(Spacer(1, 3))
    story.append(
        freelance_project(
            "<link href='https://autosortpro.com/#impact'>AutoSortPro (2024 - 2026)</link>",
            "Python, FastAPI, Electron, React, PostgreSQL",
            [
                "Built FastAPI and PostgreSQL-backed file workflows with validation, OCR, searchable metadata, and export; integrated Auth0, Stripe, OpenAI, and AWS.",
                "Investigated user issues through logs, API responses, and database checks. During its operation, AutoSortPro served 132 active users who organized 12.5K+ files.",
            ],
        )
    )
    story.append(
        freelance_project(
            "<link href='https://m2instacount.com/'>M2 InstaCount</link>",
            "Python, Flask, React, PostgreSQL | Product development and SEO",
            [
                "Maintain and extend M2 InstaCount for Historia Emporium; manage Google Search Console.",
            ],
        )
    )
    story.append(
        freelance_project(
            "<link href='https://sentinelinsulation.com'>Sentinel Insulation</link>",
            "Next.js, React, TypeScript, Tailwind, Supabase | WordPress",
            [
                "Built a custom quote tool and expanded it into a mobile-friendly ERP on Vercel with Supabase PostgreSQL, Auth, and Storage.",
                "Enforced assigned-job and office-only financial access with Supabase Row Level Security (RLS) and server-side checks; direct links cannot bypass document permissions.",
                "Added shared scheduling, installer job updates/photos and material usage/returns, three-supplier price comparison and PDF orders, plus invoices, payments, commissions, and estimated-vs-actual profit calculations.",
                "Rebuilt the WordPress site and continue to manage its SEO.",
            ],
        )
    )
    story.append(
        freelance_project(
            "<link href='https://spencerburleigh.com'>Spencer Burleigh</link>",
            "Jekyll, JavaScript | One-year engagement",
            [
                "Redesigned the Jekyll frontend, fixed image and path bugs, and built an S3-backed photo feed with a bucket policy.",
            ],
        )
    )
    story.append(
        entry(
            "Software Developer &amp; Ecommerce Operations  |  Historia Emporium  |  2023 - Aug 2026",
            "Python, Flask, React, PostgreSQL | Earlier order fulfillment, 2022 - 2023",
            [
                "Moved from order fulfillment into software development after Flatiron School in 2023; built M2 InstaCount for barcode counts, receiving, and discrepancy review. One 4,500-SKU year-end count took 22 hours, down from 42.",
                "Built browser-based picking for an Android scanner phone with Magento and Veeqo APIs; four timed picks averaged 22% less time than the prior Veeqo workflow.",
                "Diagnosed thousands of missing Veeqo images as stale Magento cache links and removed broken references with the Veeqo API.",
                "Built Python and Beautiful Soup scrapers for brand and consignment images, plus an eBay sold-listing price script matching name, brand, GTIN, and MPN.",
                "Contributed to a listing pipeline using OpenCV for cropping and color correction and OpenAI API to prefill item data.",
                "Trained a teammate in Cursor and secure API key handling; advised on project scope and system design.",
            ],
        )
    )
    story.append(
        entry(
            "Application Developer, Contract  |  OpenHome  |  Jan 2024 - Apr 2024",
            "Python, OpenAI API | Voice OS prototype",
            [
                "Built a therapist-style conversational app that summarized stored JSON chats for longer-term context.",
            ],
        )
    )
    story += section("Education")
    story.append(Paragraph("<b>Flatiron School</b>  |  Software Engineering Bootcamp, 2023", BODY))
    story += section("Additional experience")
    story.append(Paragraph("<b>US Foods</b>  |  Order Selector  |  Aug 2026 - Present", SMALL))
    doc.build(story)
    print(output)


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--output", type=Path, default=OUTPUT)
    main(parser.parse_args().output)
