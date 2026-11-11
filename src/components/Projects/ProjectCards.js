import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsPlayCircle } from "react-icons/bs";
import { FiCamera, FiFolder, FiHome, FiPackage, FiTool } from "react-icons/fi";

const visualIcons = {
  files: FiFolder,
  inventory: FiPackage,
  home: FiHome,
  field: FiTool,
  photography: FiCamera,
};

function ProjectArt({ kind }) {
  const drawings = {
    field: <><rect x="28" y="14" width="124" height="86" rx="7" /><path d="M28 39h124M52 14v25M128 14v25M45 58h35M45 74h54M111 57h24M111 73h24" /></>,
    inventory: <><path d="M29 22v61M38 22v61M50 22v61M56 22v61M70 22v61M82 22v61M91 22v61M105 22v61M113 22v61M126 22v61M136 22v61M149 22v61" /><path d="M19 17v-8h22M139 9h22v8M19 88v8h22M139 96h22v-8" /></>,
    files: <><rect x="25" y="24" width="80" height="68" rx="5" /><path d="M43 43h45M43 57h34M43 71h40M82 16h52l21 21v55H119M134 16v22h21" /></>,
    photography: <><rect x="23" y="17" width="125" height="78" rx="5" /><circle cx="112" cy="41" r="9" /><path d="m31 82 31-31 22 22 17-15 37 24" /><path d="M42 9h123v78" /></>,
    home: <><path d="M27 54h18l10-24 18 49 17-63 16 78 15-42h32" /><circle cx="90" cy="54" r="47" /></>,
  };

  return (
    <svg className="project-card-visual__art" viewBox="0 0 180 110" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      {drawings[kind] || drawings.home}
    </svg>
  );
}

function ProjectCards(props) {
  const VisualIcon = visualIcons[props.visualKind] || FiHome;
  return (
    <Card className="project-card-view">
      <div className={`project-card-visual project-card-visual--${props.visualKind || "home"}`}>
        <div className="project-card-visual__icon" aria-hidden="true"><VisualIcon /></div>
        <ProjectArt kind={props.visualKind} />
        <div>
          <h2 className="project-card-visual__title">{props.visualLabel || props.title}</h2>
          <small>{props.visualSubtitle}</small>
        </div>
      </div>

      <Card.Body className="project-card-body">
        <div className="project-card-category">{props.category}</div>
        <Card.Text>
          {props.description}
        </Card.Text>

        {Array.isArray(props.tags) && props.tags.length > 0 && (
          <p className="project-stack">{props.tags.join(" · ")}</p>
        )}

        <div className="project-actions">
          {props.demoLink && (
            <Button variant="primary" href={props.demoLink} target="_blank" rel="noopener noreferrer">
              <CgWebsite /> &nbsp;{props.buttonText || "Demo"}
            </Button>
          )}

          {props.videoDemo && (
            <Button variant="outline-primary" className="btn-ghost" href={props.videoDemo} target="_blank" rel="noopener noreferrer">
              <BsPlayCircle /> &nbsp;Demo Video
            </Button>
          )}
        </div>
        {props.evidenceLink && (
          <a className="project-evidence-link" href={props.evidenceLink} target="_blank" rel="noopener noreferrer">
            {props.evidenceText || "Read the case study"}
          </a>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
