import React, { useState } from "react";

const screens = [
  { file: "01-estimate-builder.jpg", title: "Estimate builder", detail: "Work areas, materials, and a live estimate summary" },
  { file: "02-quote-history.jpg", title: "Saved quotes", detail: "Searchable quotes with status and duplication" },
  { file: "03-job-paperwork.jpg", title: "Job paperwork", detail: "Scheduling, billing, and installer notes" },
  { file: "04-proposal-preview.jpg", title: "Proposal PDF", detail: "A customer-facing proposal generated from the quote" },
];

function SentinelGallery() {
  const [active, setActive] = useState(0);
  const screen = screens[active];
  const image = `/sentinel-quote-demo/${screen.file}`;

  return (
    <div className="sentinel-gallery" aria-label="Sentinel quote builder screenshots">
      <div className="sentinel-gallery__intro">
        <strong>Inside the quote builder</strong>
        <span>Early demo screens with fictional data. The tool later grew into the field operations app described above.</span>
      </div>
      <a className="sentinel-gallery__preview" href={image} target="_blank" rel="noopener noreferrer" aria-label={`Open full ${screen.title} screenshot`}>
        <img src={image} alt={`${screen.title}: ${screen.detail}`} loading="lazy" />
        <span>Open full image ↗</span>
      </a>
      <div className="sentinel-gallery__controls" aria-label="Choose a screenshot">
        {screens.map((item, index) => (
          <button
            type="button"
            key={item.file}
            className={index === active ? "is-active" : ""}
            onClick={() => setActive(index)}
            aria-pressed={index === active}
          >
            {item.title}
          </button>
        ))}
      </div>
      <p className="sentinel-gallery__caption">{screen.detail}</p>
    </div>
  );
}

export default SentinelGallery;
