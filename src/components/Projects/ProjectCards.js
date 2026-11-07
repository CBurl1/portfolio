import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsPlayCircle } from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";

function ProjectCards(props) {
  return (
    <Card className="project-card-view" style={{ width: "100%" }}>
      <div className="project-card-imagewrap">
        {props.imgPath ? (
          <Card.Img
            variant="top"
            src={props.imgPath}
            alt={props.imageAlt || props.title}
            style={{
              height: "210px",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        ) : (
          <div className="project-card-visual" aria-hidden="true">
            <AiOutlineHome />
            <span>{props.visualLabel}</span>
            <small>Python · AI prototype</small>
          </div>
        )}
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
            <Button variant="primary" href={props.videoDemo} target="_blank" rel="noopener noreferrer">
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
