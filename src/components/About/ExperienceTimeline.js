import React from "react";

const experiences = [
  {
    role: "Independent Software Developer",
    org: "Remote",
    period: "Jun 2023 – Present",
    stack: ["Python", "Flask", "FastAPI", "React", "PostgreSQL"],
    bullets: [
      "Built AutoSortPro, an AI-powered file organization application using Electron, FastAPI, React, and PostgreSQL.",
      "Integrated Auth0, Stripe, OpenAI, and AWS into product workflows for authentication, payments, file processing, and AI features.",
      "AutoSortPro reached 132 active users who organized 12.5K+ files; shipped fixes based on reported issues.",
      "Investigated bugs using API responses, logs, and database checks; documented solutions and workflows.",
      "Continue to maintain and add features to M2 InstaCount for Historia Emporium, alongside SEO and Google Search Console work.",
    ],
  },
  {
    role: "Software Developer · Ecommerce Operations",
    org: "Historia Emporium",
    period: "2023 – Aug 2026",
    stack: ["Magento 2", "Python", "Flask", "React", "PostgreSQL"],
    bullets: [
      "Joined Historia Emporium in 2022 to pick, ship, and receive orders; moved into software development after completing Flatiron School in 2023.",
      "Built M2 InstaCount, a Python, Flask, React, and PostgreSQL tool for barcode lookup, receiving, and Veeqo batch picking.",
      "Designed around barcode workflows, inventory accuracy, and the needs of a business processing 75+ daily orders.",
      "Investigated SKU mismatches and inventory discrepancies in day-to-day operations.",
      "Maintained Magento admin and storefront updates alongside Amazon and eBay marketplace work.",
    ],
  },
  {
    role: "Application Developer · Grant",
    org: "OpenHome",
    period: "Jan 2024 – Apr 2024",
    stack: ["Python", "AI / OpenAI"],
    bullets: [
      "Built a Python application for an AI-powered smart home OS, delivered as part of a prototype presented to 100+ potential investors.",
    ],
  },
];

function ExperienceTimeline() {
  return (
    <div className="timeline">
      {experiences.map((exp, i) => (
        <div className="timeline__item" key={i}>
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

            <ul className="timeline__bullets">
              {exp.bullets.map((b, j) => (
                <li key={j}>{b}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ExperienceTimeline;
