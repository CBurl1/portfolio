import React from "react";

function HeroVisual() {
  const lines = [
    { prompt: "›", cmd: "AutoSortPro" },
    { out: "Electron · React · FastAPI", tone: "good" },
    { out: "Auth0 · Stripe · OpenAI · AWS", tone: "good" },
    { prompt: "›", cmd: "M2 InstaCount" },
    { out: "React · Flask · PostgreSQL", tone: "good" },
    { out: "Magento 2 API · barcode workflows", tone: "warn" },
  ];

  return (
    <div className="hero-visual" aria-hidden="true">
      <div className="hero-visual__glow" />

      <div className="hero-visual__card">
        <div className="hero-visual__chrome">
          <span className="chrome-dot chrome-dot--red" />
          <span className="chrome-dot chrome-dot--yellow" />
          <span className="chrome-dot chrome-dot--green" />
          <span className="hero-visual__title">collin / selected builds</span>
        </div>

        <div className="hero-visual__tabs">
          <span className="hv-chip hv-chip--active">frontend</span>
          <span className="hv-chip">backend</span>
          <span className="hv-chip">integrations</span>
        </div>

        <div className="hero-visual__body">
          {lines.map((line, i) =>
            line.prompt ? (
              <div className="hv-line" style={{ animationDelay: `${i * 160}ms` }} key={i}>
                <span className="hv-prompt">{line.prompt}</span>
                <span className="hv-cmd">{line.cmd}</span>
              </div>
            ) : (
              <div className="hv-line" style={{ animationDelay: `${i * 160}ms` }} key={i}>
                <span className="hv-arrow">↳</span>
                <span className={`hv-out hv-out--${line.tone}`}>{line.out}</span>
              </div>
            )
          )}
        </div>
      </div>

      <div className="hero-visual__badge hero-visual__badge--top">
        <span className="hv-badge-dot" />
        <span>built &amp; shipped</span>
      </div>
      <div className="hero-visual__badge hero-visual__badge--bottom">
        <span className="hv-badge-tag">React</span>
        <span className="hv-badge-tag">Python</span>
        <span className="hv-badge-tag">PostgreSQL</span>
      </div>
    </div>
  );
}

export default HeroVisual;
