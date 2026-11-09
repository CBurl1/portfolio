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
    return [Spacer(1, 15), line, Spacer(1, 8)]


def entry(title, detail, bullets):
    rows = [Paragraph(title, ITEM), Paragraph(detail, DETAIL)]
    rows += [Paragraph("- " + bullet, SMALL) for bullet in bullets]
    rows.append(Spacer(1, 11))
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
        Paragraph("SOFTWARE ENGINEER  |  PYTHON BACKEND &amp; FULL-STACK", HEADLINE),
        Spacer(1, 3),
        Paragraph(
            "New Hampshire, USA  |  603-617-9989  |  "
            "<link href='mailto:collin.s.burleigh@gmail.com'>collin.s.burleigh@gmail.com</link>"
            "<br/><link href='https://collinburleigh.com'>collinburleigh.com</link>  |  "
            "<link href='https://www.linkedin.com/in/burleighcollin'>linkedin.com/in/burleighcollin</link>  |  "
            "<link href='https://github.com/CBurl1'>github.com/CBurl1</link>",
            CONTACT,
        ),
    ]
    story += section("Profile")
    story.append(
        Paragraph(
            "Software engineer focused on Python backend development for file-management and "
            "ecommerce applications. Built AutoSortPro with FastAPI and M2 InstaCount with "
            "Flask, using PostgreSQL and React across both. Improves products after release "
            "through debugging and user feedback.",
            BODY,
        )
    )
    story += section("Technical skills")
    skills = [
        ("Languages", "Python, JavaScript, SQL"),
        ("Backend &amp; data", "FastAPI, Flask, PostgreSQL, SQLite, REST APIs, pytest"),
        ("Frontend &amp; desktop", "React, Electron, HTML/CSS, Tailwind, Jest"),
        ("Integrations &amp; tools", "Magento 2 API, Veeqo API, Auth0, Stripe, OpenAI, AWS, Git, Postman, Jira"),
    ]
    table = Table(
        [[Paragraph(label, SMALL), Paragraph(value, SMALL)] for label, value in skills],
        colWidths=[1.55 * inch, 5.8 * inch],
    )
    table.setStyle(
        TableStyle(
            [
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("LEFTPADDING", (0, 0), (-1, -1), 0),
                ("RIGHTPADDING", (0, 0), (-1, -1), 5),
                ("TOPPADDING", (0, 0), (-1, -1), 2),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 2),
            ]
        )
    )
    story.append(table)
    story += section("Engineering experience")
    story.append(
        entry(
            "Freelance Software Developer  |  Jun 2023 - Present",
            "AutoSortPro | Python, FastAPI, Electron, React, PostgreSQL",
            [
                "Built FastAPI and PostgreSQL-backed workflows that process images and documents into editable titles, summaries, tags, and searchable metadata.",
                "Implemented file validation, batch processing, OCR, and export of original files with metadata.",
                "Integrated Auth0, Stripe, OpenAI, and AWS into account, billing, and file-processing workflows.",
                "Investigated user-reported issues using logs, API responses, and database checks; shipped fixes. AutoSortPro reached 132 active users and organized 12.5K+ files.",
            ],
        )
    )
    story.append(
        entry(
            "Technical Systems Engineer, Ecommerce Operations  |  2022 - Present",
            "M2 InstaCount | Python, Flask, React, PostgreSQL, Magento 2 and Veeqo APIs",
            [
                "Built Flask and PostgreSQL-backed barcode lookup, discrepancy review, receiving with CSV export, and Veeqo-linked mobile batch picking.",
                "A roughly 4,500-SKU year-end count at one store took 22 hours with the new workflow, down from 42 hours with the prior process.",
                "Supported Magento inventory and catalog workflows for a business processing 75+ daily orders; investigated SKU and quantity discrepancies.",
            ],
        )
    )
    story.append(
        entry(
            "Application Developer, Contract  |  OpenHome  |  Jan 2024 - Apr 2024",
            "Python | Grant-funded prototype",
            [
                "Developed a Python application for an AI-powered smart-home OS prototype presented to 100+ potential investors.",
            ],
        )
    )
    story += section("Education")
    story.append(Paragraph("<b>Flatiron School</b>  |  Software Engineering, 2023", BODY))
    doc.build(story)
    print(output)


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--output", type=Path, default=OUTPUT)
    main(parser.parse_args().output)
