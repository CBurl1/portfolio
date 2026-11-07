import React, { useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";

const views = [
  { id: "python", label: "Python", lines: [
    { name: "AutoSortPro", detail: "FastAPI · file processing · AI metadata" },
    { name: "M2 InstaCount", detail: "Flask · Magento 2 and Veeqo APIs" },
    { name: "OpenHome", detail: "Python · smart-home prototype" },
  ] },
  { id: "react", label: "React", lines: [
    { name: "AutoSortPro", detail: "Electron desktop interface" },
    { name: "M2 InstaCount", detail: "Browser-based stockroom workflows" },
  ] },
  { id: "integrations", label: "Integrations", lines: [
    { name: "AutoSortPro", detail: "Auth0 · Stripe · OpenAI · AWS" },
    { name: "M2 InstaCount", detail: "Magento 2 API · Veeqo API" },
  ] },
];

function HeroVisual() {
  const [activeId, setActiveId] = useState("python");
  const activeView = views.find((view) => view.id === activeId);

  return (
    <div className="hero-visual">
      <div className="hero-visual__header">
        <div><span className="section-eyebrow">SELECTED BUILDS / 01–03</span><h2>Built &amp; shipped<span className="hero-visual__period">.</span></h2></div>
        <span className="hero-visual__status"><span /> Three projects</span>
      </div>
      <div className="hero-visual__tabs" role="group" aria-label="Explore my work by technology">
        {views.map((view) => <button type="button" className={`hv-chip${view.id === activeId ? " hv-chip--active" : ""}`} aria-pressed={view.id === activeId} onClick={() => setActiveId(view.id)} key={view.id}>{view.label}</button>)}
      </div>
      <div className="hero-visual__body" aria-live="polite" aria-atomic="true" key={activeId}>
        {activeView.lines.map((line, i) => <div className="hv-entry" key={line.name}><span className="hv-entry__number">0{i + 1}</span><div className="hv-entry__copy"><strong>{line.name}</strong><span>{line.detail}</span></div><FiArrowUpRight aria-hidden="true" /></div>)}
      </div>
      <p className="hero-visual__footnote">Select a technology to see where I used it.</p>
    </div>
  );
}

export default HeroVisual;
