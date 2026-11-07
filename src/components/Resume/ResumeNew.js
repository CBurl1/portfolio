import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import Particle from "../Particle";
import PageHeader from "../PageHeader";
import pdf from "../../Assets/Collin_Burleigh_Software_Engineer_Resume.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const highlights = [
  "Software Engineer",
  "React · Python · FastAPI",
  "PostgreSQL · Electron",
  "Auth0 · Stripe · OpenAI · AWS",
  "Magento 2 API",
];

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    const update = () => setWidth(window.innerWidth);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const pageScale = width > 1100 ? 1.6 : width > 786 ? 1.3 : 0.55;

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <PageHeader
          eyebrow="Résumé"
          title="My"
          accent="résumé"
          subtitle="A one-page overview of the applications I've built, the technologies I've used, and the roles I've held."
        />

        <div className="resume-highlights">
          {highlights.map((h) => (
            <span className="resume-highlight" key={h}>
              {h}
            </span>
          ))}
        </div>

        <Row
          className="resume-actions"
          style={{ justifyContent: "center", marginBottom: "28px" }}
        >
          <Button
            variant="primary"
            href={pdf}
            download="Collin_Burleigh_Software_Engineer_Resume.pdf"
            style={{ maxWidth: "220px", marginRight: "10px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download PDF
          </Button>
          <Button
            variant="outline-primary"
            className="btn-ghost"
            href={pdf}
            target="_blank"
            rel="noreferrer"
            style={{ maxWidth: "220px" }}
          >
            <FiExternalLink />
            &nbsp;Open in new tab
          </Button>
        </Row>

        <Row className="resume">
          <div className="resume-frame">
            <Document file={pdf} className="d-flex justify-content-center">
              <Page pageNumber={1} scale={pageScale} />
            </Document>
          </div>
        </Row>

        <Row style={{ justifyContent: "center" }}>
          <Button
            variant="primary"
            href={pdf}
            download="Collin_Burleigh_Software_Engineer_Resume.pdf"
            style={{ maxWidth: "220px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download PDF
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default ResumeNew;
