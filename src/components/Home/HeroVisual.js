import React, { useState } from "react";
import { FiCheck, FiCode } from "react-icons/fi";

const views = [
  { id: "python", label: "Python", lines: [
    { name: "AutoSortPro", detail: "FastAPI · file processing · AI metadata" },
    { name: "M2 InstaCount", detail: "Flask · Magento 2 and Veeqo APIs" },
    { name: "OpenHome", detail: "Python · OpenAI API voice app" },
  ] },
  { id: "react", label: "React", lines: [
    { name: "Sentinel Insulation", detail: "Next.js · installer and office workflows" },
    { name: "AutoSortPro", detail: "Electron desktop interface" },
    { name: "M2 InstaCount", detail: "Browser-based stockroom workflows" },
  ] },
  { id: "integrations", label: "Integrations", lines: [
    { name: "M2 InstaCount", detail: "Magento 2 API · Veeqo API" },
    { name: "Sentinel Insulation", detail: "Supabase · Vercel" },
    { name: "Spencer Burleigh", detail: "AWS S3 · Jekyll" },
    { name: "AutoSortPro", detail: "Auth0 · Stripe · OpenAI · AWS" },
  ] },
];

function HeroVisual() {
  const [activeId, setActiveId] = useState("python");
  const activeView = views.find((view) => view.id === activeId);

  return (
    <div className="hero-visual">
      <div className="hero-visual__header">
        <div className="hero-visual__mark" aria-hidden="true"><FiCode /></div>
        <div>
          <h2>Built and shipped</h2>
          <p>Explore the work behind five projects</p>
        </div>
      </div>
      <div className="hero-visual__tabs" role="group" aria-label="Explore my work by technology">
        {views.map((view) => <button type="button" className={`hv-chip${view.id === activeId ? " hv-chip--active" : ""}`} aria-pressed={view.id === activeId} onClick={() => setActiveId(view.id)} key={view.id}>{view.label}</button>)}
      </div>
      <div className="hero-visual__body" aria-live="polite" aria-atomic="true" key={activeId}>
        {activeView.lines.map((line) => <div className="hv-entry" key={line.name}><div className="hv-entry__copy"><strong>{line.name}</strong><span>{line.detail}</span></div><FiCheck aria-hidden="true" /></div>)}
      </div>
    </div>
  );
}

export default HeroVisual;
