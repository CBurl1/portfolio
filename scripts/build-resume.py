#!/usr/bin/env python3
"""Generate the one-page software engineering resume used by the site."""

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
BODY = style("body", 9.2, 12.4)
SMALL = style("small", 8.85, 11.7)
SECTION = style("section", 10.2, 13, bold=True, color=ACCENT)
ITEM = style("item", 9.6, 12, bold=True)
DETAIL = style("detail", 8.7, 11.2, color=MUTED)


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
    return [Spacer(1, 12), line, Spacer(1, 6)]


def entry(title, detail, bullets):
    rows = [Paragraph(title, ITEM), Paragraph(detail, DETAIL)]
    rows += [Paragraph("&#8226; " + bullet, SMALL) for bullet in bullets]
    rows.append(Spacer(1, 7))
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


def main():
    doc = BaseDocTemplate(
        str(OUTPUT),
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
        Paragraph("SOFTWARE ENGINEER  |  PYTHON &amp; FULL-STACK APPLICATIONS", HEADLINE),
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
            "Software developer who has built and supported full-stack applications for SaaS and "
            "ecommerce workflows. Shipped AutoSortPro and M2 InstaCount using Python, "
            "Flask/FastAPI, React, and PostgreSQL. Work with users after launch to investigate issues "
            "and improve the product.",
            BODY,
        )
    )
    story += section("Technical skills")
    skills = [
        ("Languages &amp; frameworks", "Python, JavaScript, SQL, React, Flask, FastAPI, Electron"),
        ("Data &amp; integrations", "PostgreSQL, SQLite, Magento 2 API, Auth0, Stripe API, OpenAI API, AWS (IAM, S3, SES, Rekognition)"),
        ("Tools", "Git, Postman, Jira, PyTest, Jest, Tailwind"),
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
    story += section("Selected engineering work")
    story.append(
        entry(
            "AutoSortPro",
            "Python, FastAPI, Electron, React, PostgreSQL, Auth0, Stripe, OpenAI, AWS",
            [
                "Built an AI-powered file organization application that organizes, tags, and summarizes files.",
                "Reached 132 active users and organized 12.5K+ files; implemented authentication, payments, AI features, and file processing.",
            ],
        )
    )
    story.append(
        entry(
            "M2 InstaCount",
            "Python, Flask, React, PostgreSQL, Magento 2 API",
            [
                "Built scanner-based Magento product lookup, receiving with CSV export, and Veeqo batch picking.",
                "In one operation, a roughly 4,500-SKU year-end count took 22 hours versus 42 before; four timed picks averaged 22% less time.",
            ],
        )
    )
    story.append(
        entry(
            "OpenHome",
            "Python | Grant-funded prototype, Jan 2024 - Apr 2024",
            [
                "Developed a Python application for an AI-powered smart-home OS prototype presented to 100+ potential investors.",
            ],
        )
    )
    story += section("Professional experience")
    story.append(
        entry(
            "Freelance Software Developer  |  Remote  |  Jun 2023 - Present",
            "",
            [
                "Built and supported full-stack applications; shipped fixes based on reported user issues.",
                "Investigated authentication, payments, file-processing, and API issues using logs, API responses, and database checks.",
            ],
        )
    )
    story.append(
        entry(
            "Technical Systems Engineer, Ecommerce Operations  |  2022 - Present",
            "",
            [
                "Built M2 InstaCount around inventory and receiving workflows in a business processing 75+ daily orders.",
                "Troubleshot SKU mismatches and inventory discrepancies; maintained Magento admin and storefront updates.",
            ],
        )
    )
    story.append(
        entry(
            "Application Developer, Contract  |  OpenHome  |  Jan 2024 - Apr 2024",
            "",
            ["Built the Python application used in the AI smart-home OS prototype."],
        )
    )
    story += section("Education")
    story.append(Paragraph("<b>Flatiron School</b>  |  Software Engineering", BODY))
    doc.build(story)
    print(OUTPUT)


if __name__ == "__main__":
    main()
