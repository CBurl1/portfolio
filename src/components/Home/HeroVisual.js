import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiArrowRight, FiBarChart2, FiCalendar, FiCheckCircle, FiClipboard,
  FiFileText, FiFolder, FiPackage, FiSearch, FiSmartphone, FiTool,
} from "react-icons/fi";

const projects = [
  {
    id: "inventory",
    label: "M2 InstaCount",
    shortLabel: "M2",
    icon: FiPackage,
    title: "Inventory, from scan to review",
    description: "Barcode counts, receiving, and picking built for the stockroom workflow.",
    stack: "Python · Flask · Magento 2 and Veeqo APIs",
    steps: [
      { label: "Scan items", icon: FiPackage },
      { label: "Reconcile", icon: FiBarChart2 },
      { label: "Review counts", icon: FiCheckCircle },
    ],
    result: "42 → 22 hours",
    resultContext: "One roughly 4,500-SKU year-end count",
  },
  {
    id: "files",
    label: "AutoSortPro",
    shortLabel: "AutoSortPro",
    icon: FiFolder,
    title: "Files, made easier to find",
    description: "A file organizer with OCR, editable metadata, search, and export.",
    stack: "Python · FastAPI · Electron · PostgreSQL",
    steps: [
      { label: "Add files", icon: FiFileText },
      { label: "Process", icon: FiTool },
      { label: "Find & export", icon: FiSearch },
    ],
    result: "12.5K+ files",
    resultContext: "Organized by 132 active users during operation",
  },
  {
    id: "field",
    label: "Sentinel ERP",
    shortLabel: "Sentinel",
    icon: FiClipboard,
    title: "From quote to the job site",
    description: "Connected scheduling, installer work, materials, and office tracking.",
    stack: "Next.js · React · Supabase PostgreSQL",
    steps: [
      { label: "Build quote", icon: FiFileText },
      { label: "Schedule", icon: FiCalendar },
      { label: "Run the job", icon: FiSmartphone },
    ],
    result: "Field to office",
    resultContext: "Assigned jobs on mobile with office-only financial access",
  },
];

function HeroVisual() {
  const [activeId, setActiveId] = useState("inventory");
  const activeProject = projects.find((project) => project.id === activeId);
  const ProjectIcon = activeProject.icon;

  return (
    <div className={`hero-visual hero-visual--${activeId}`}>
      <div className="hero-visual__header">
        <div>
          <h2>Built and shipped</h2>
          <p>Explore how the software supports real work.</p>
        </div>
        <span className="hero-visual__header-icon" aria-hidden="true"><ProjectIcon /></span>
      </div>

      <div className="hero-visual__tabs" role="group" aria-label="Explore a project workflow">
        {projects.map((project) => (
          <button
            key={project.id}
            type="button"
            className={`hv-chip${project.id === activeId ? " hv-chip--active" : ""}`}
            aria-label={project.label}
            aria-pressed={project.id === activeId}
            onClick={() => setActiveId(project.id)}
          >
            <span className="hv-chip__full">{project.label}</span>
            <span className="hv-chip__short" aria-hidden="true">{project.shortLabel}</span>
          </button>
        ))}
      </div>

      <div className="hero-visual__content" aria-live="polite" key={activeId}>
        <div className="hero-visual__intro">
          <h3>{activeProject.title}</h3>
          <p>{activeProject.description}</p>
        </div>
        <div className="hero-visual__flow" aria-label={`${activeProject.label} workflow`}>
          {activeProject.steps.map((step, index) => {
            const StepIcon = step.icon;
            return (
              <React.Fragment key={step.label}>
                {index > 0 && <span className="hero-visual__connector" aria-hidden="true"><FiArrowRight /></span>}
                <div className="hero-visual__step">
                  <StepIcon aria-hidden="true" />
                  <span>{step.label}</span>
                </div>
              </React.Fragment>
            );
          })}
        </div>
        <div className="hero-visual__result">
          <strong>{activeProject.result}</strong>
          <span>{activeProject.resultContext}</span>
        </div>
        <div className="hero-visual__footer">
          <span>{activeProject.stack}</span>
          <Link to="/project" aria-label="Explore all projects">All projects <FiArrowRight aria-hidden="true" /></Link>
        </div>
      </div>
    </div>
  );
}

export default HeroVisual;
