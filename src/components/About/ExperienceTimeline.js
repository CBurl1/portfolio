import React from "react";

const experiences = [
  {
    role: "Independent Software Developer",
    org: "Client and product work",
    period: "Jun 2023 – Present",
    stack: ["Python", "FastAPI", "Flask", "Next.js", "React", "PostgreSQL"],
    bullets: [
      "Built AutoSortPro with FastAPI, Electron, React, and PostgreSQL. During its operation, 132 active users organized 12.5K+ files.",
      "Built Sentinel Insulation's quote tool and expanded it into a field operations app with scheduling, job tickets, materials, supplier comparisons, and financial tracking. Used Supabase Row Level Security and server checks to protect job and financial data.",
      "Rebuilt Sentinel's WordPress site and manage its SEO. Redesigned and maintained Spencer Burleigh's Jekyll site and built an S3-backed image feed.",
      "Continue to maintain and extend M2 InstaCount for Historia Emporium and manage its SEO and Google Search Console.",
    ],
  },
  {
    role: "Order Selector",
    org: "US Foods",
    period: "Aug 2026 – Present",
  },
  {
    role: "Software Developer · Ecommerce Operations",
    org: "Historia Emporium",
    period: "2023 – Aug 2026",
    stack: ["Python", "Flask", "React", "Magento 2 API", "Veeqo API"],
    bullets: [
      "Joined in order fulfillment in 2022, then moved into software development after completing Flatiron School in 2023.",
      "Built M2 InstaCount for barcode counts, receiving, and discrepancy review. One roughly 4,500-SKU year-end count took 22 hours, down from 42.",
      "Built browser-based picking for an Android scanner phone using Magento and Veeqo APIs; four timed picks averaged 22% less time than the earlier workflow.",
      "Traced thousands of missing Veeqo images to stale Magento cache links and removed broken references through the Veeqo API.",
      "Built Python and Beautiful Soup image scrapers and an eBay sold-listing price script; contributed OpenCV and OpenAI API steps to a listing pipeline.",
      "Guided a teammate on project scope, system design, Cursor, and secure API key handling.",
    ],
  },
  {
    role: "Application Developer · Contract",
    org: "OpenHome",
    period: "Jan 2024 – Apr 2024",
    stack: ["Python", "OpenAI API"],
    bullets: [
      "Built a small therapist-style voice app for OpenHome's evolving OS. It summarized stored JSON conversations to provide context for longer chats.",
    ],
  },
];

function ExperienceTimeline() {
  return (
    <div className="timeline">
      {experiences.map((exp) => (
        <div className="timeline__item" key={`${exp.org}-${exp.period}`}>
          <span className="timeline__dot" />
          <div className="timeline__card">
            <div className="timeline__head">
              <span className="timeline__period">{exp.period}</span>
              <h3 className="timeline__role">{exp.role}</h3>
              <span className="timeline__org">{exp.org}</span>
            </div>

            {exp.stack && (
              <div className="timeline__stack">
                {exp.stack.map((t) => (
                  <span className="timeline__tag" key={t}>
                    {t}
                  </span>
                ))}
              </div>
            )}

            {exp.bullets && (
              <ul className="timeline__bullets">
                {exp.bullets.map((b) => <li key={b}>{b}</li>)}
              </ul>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ExperienceTimeline;
