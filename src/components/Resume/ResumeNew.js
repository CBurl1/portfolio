import React, { useEffect, useRef, useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";
import { FiExternalLink, FiFileText } from "react-icons/fi";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import PageHeader from "../PageHeader";
import pdf from "../../Assets/Collin_Burleigh_Software_Engineer_Resume.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const frameRef = useRef(null);
  const [pageWidth, setPageWidth] = useState(612);

  useEffect(() => {
    const frame = frameRef.current;
    if (!frame) return undefined;

    const updateWidth = () => {
      const style = window.getComputedStyle(frame);
      const available = frame.clientWidth - parseFloat(style.paddingLeft) - parseFloat(style.paddingRight);
      setPageWidth(Math.max(1, available));
    };

    updateWidth();
    if (typeof ResizeObserver !== "undefined") {
      const observer = new ResizeObserver(updateWidth);
      observer.observe(frame);
      return () => observer.disconnect();
    }
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const pageScale = Math.min(1.55, pageWidth / 612);

  return (
    <Container fluid className="resume-section">
      <Container>
        <PageHeader
          title="Résumé"
          subtitle="A one-page overview of my software work and experience."
        />

        <div className="resume-toolbar">
          <div className="resume-toolbar__file">
            <FiFileText aria-hidden="true" />
            <div><strong>Software engineer résumé</strong><span>One-page PDF</span></div>
          </div>
          <div className="resume-actions">
            <Button variant="primary" href={pdf} download="Collin_Burleigh_Software_Engineer_Resume.pdf">
              <AiOutlineDownload aria-hidden="true" /> Download PDF
            </Button>
            <Button variant="outline-primary" className="btn-ghost" href={pdf} target="_blank" rel="noreferrer">
              <FiExternalLink aria-hidden="true" /> Open in new tab
            </Button>
          </div>
        </div>

        <div className="resume-preview-head"><h2>Preview</h2><span>US Letter · One page</span></div>
        <div className="resume-frame" ref={frameRef}>
          <Document
            file={pdf}
            className="d-flex justify-content-center"
            loading={<p className="resume-frame__message">Loading preview…</p>}
            error={<p className="resume-frame__message">Preview unavailable. Use the download button above.</p>}
          >
            <Page pageNumber={1} scale={pageScale} />
          </Document>
        </div>
      </Container>
    </Container>
  );
}

export default ResumeNew;
