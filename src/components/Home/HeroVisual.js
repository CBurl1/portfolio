import React, { useState } from "react";

const views = [
  {
    id: "python",
    label: "Python",
    lines: [
      { name: "AutoSortPro", detail: "FastAPI · file processing · AI metadata" },
      { name: "M2 InstaCount", detail: "Flask · Magento 2 and Veeqo APIs" },
      { name: "OpenHome", detail: "Python · smart-home prototype" },
    ],
  },
  {
    id: "react",
    label: "React",
    lines: [
      { name: "AutoSortPro", detail: "Electron desktop interface" },
      { name: "M2 InstaCount", detail: "Browser-based stockroom workflows" },
    ],
  },
  {
    id: "integrations",
    label: "Integrations",
    lines: [
      { name: "AutoSortPro", detail: "Auth0 · Stripe · OpenAI · AWS" },
      { name: "M2 InstaCount", detail: "Magento 2 API · Veeqo API" },
    ],
  },
];

function HeroVisual() {
  const [activeId, setActiveId] = useState("python");
  const activeView = views.find((view) => view.id === activeId);

  return (
    <div className="hero-visual">
      <div className="hero-visual__glow" aria-hidden="true" />

      <div className="hero-visual__card">
        <div className="hero-visual__chrome" aria-hidden="true">
          <span className="chrome-dot chrome-dot--red" />
          <span className="chrome-dot chrome-dot--yellow" />
          <span className="chrome-dot chrome-dot--green" />
          <span className="hero-visual__title">collin / selected builds</span>
        </div>

        <div className="hero-visual__tabs" role="group" aria-label="Explore my work by technology">
          {views.map((view) => (
            <button
              type="button"
              className={`hv-chip${view.id === activeId ? " hv-chip--active" : ""}`}
              aria-pressed={view.id === activeId}
              onClick={() => setActiveId(view.id)}
              key={view.id}
            >
              {view.label}
            </button>
          ))}
        </div>

        <div className="hero-visual__body" aria-live="polite" aria-atomic="true" key={activeId}>
          {activeView.lines.map((line, i) => (
            <div className="hv-entry" key={line.name}>
              <div className="hv-line" style={{ animationDelay: `${i * 90}ms` }}>
                <span className="hv-prompt" aria-hidden="true">›</span>
                <span className="hv-cmd">{line.name}</span>
              </div>
              <div className="hv-line hv-line--detail" style={{ animationDelay: `${i * 90 + 45}ms` }}>
                <span className="hv-arrow" aria-hidden="true">↳</span>
                <span className="hv-out hv-out--good">{line.detail}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="hero-visual__badge hero-visual__badge--top" aria-hidden="true">
        <span className="hv-badge-dot" />
        <span>built &amp; shipped</span>
      </div>
      <div className="hero-visual__badge hero-visual__badge--bottom" aria-hidden="true">
        <span className="hv-badge-tag hv-badge-tag--primary">Python</span>
        <span className="hv-badge-tag">FastAPI / Flask</span>
        <span className="hv-badge-tag">React</span>
      </div>
    </div>
  );
}

export default HeroVisual;
