import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import PageHeader from "../PageHeader";
import pdf from "../../Assets/Collin_Burleigh_Software_Engineer_Resume.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    const update = () => setWidth(window.innerWidth);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const pageScale = width > 1100 ? 1.6 : width > 786 ? 1.3 : Math.min(1, (width - 72) / 612);

  return (
    <Container fluid className="resume-section">
      <Container>
        <PageHeader
          title="Résumé"
          subtitle="A one-page overview of my software work and experience."
        />

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

        <p className="resume-preview-label">One-page preview</p>
        <Row className="resume">
          <div className="resume-frame">
            <Document file={pdf} className="d-flex justify-content-center">
              <Page pageNumber={1} scale={pageScale} />
            </Document>
          </div>
        </Row>

      </Container>
    </Container>
  );
}

export default ResumeNew;
