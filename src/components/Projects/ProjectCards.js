import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsPlayCircle } from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";
import { FiFolder, FiPackage } from "react-icons/fi";

const visualIcons = {
  files: FiFolder,
  inventory: FiPackage,
  home: AiOutlineHome,
};

function ProjectCards(props) {
  const VisualIcon = visualIcons[props.visualKind] || AiOutlineHome;

  return (
    <Card className="project-card-view" style={{ width: "100%" }}>
      <div className="project-card-imagewrap">
        <div className={`project-card-visual project-card-visual--${props.visualKind || "home"}`} aria-hidden="true">
          <VisualIcon />
          <span>{props.visualLabel || props.title}</span>
          <small>{props.visualSubtitle}</small>
        </div>
        <span className="project-card-image-shade" aria-hidden="true" />
      </div>

      <Card.Body
        style={{
          padding: "1.4rem",
          display: "flex",
          flexDirection: "column",
          flex: "1",
        }}
      >
        <div className="project-card-category">{props.category}</div>
        <Card.Title
          style={{
            marginBottom: "0.75rem",
            fontSize: "1.15rem",
            lineHeight: "1.3",
            minHeight: "2.6rem",
            display: "flex",
            alignItems: "center",
          }}
        >
          {props.title}
        </Card.Title>

        <Card.Text
          style={{
            textAlign: "left",
            fontSize: "0.92rem",
            lineHeight: "1.55",
            marginBottom: "1rem",
            flex: "1",
          }}
        >
          {props.description}
        </Card.Text>

        {Array.isArray(props.tags) && props.tags.length > 0 && (
          <div className="project-tags">
            {props.tags.map((t) => (
              <span className="project-tag" key={t}>
                {t}
              </span>
            ))}
          </div>
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
