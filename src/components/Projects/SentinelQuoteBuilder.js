import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import PageHeader from "../PageHeader";
import SentinelGallery from "./SentinelGallery";

function SentinelQuoteBuilder() {
  return (
    <Container fluid className="project-section sentinel-detail-section">
      <Container>
        <Link className="sentinel-detail-back" to="/project">← All projects</Link>
        <PageHeader
          title="Sentinel"
          accent="quote builder"
          subtitle="An early look at the custom quote tool I built for Sentinel Insulation."
        />
        <div className="sentinel-detail-copy">
          <div>
            <h2>The quoting workflow</h2>
            <p>Staff could build a quote by work area, select materials, and see the estimate update as they worked. Saved quotes, product search, and reusable templates helped them return to a job without starting over.</p>
          </div>
          <div>
            <h2>What it became</h2>
            <p>The same job details could produce a customer proposal and installer paperwork. I later expanded the tool into a larger app for scheduling, field work, materials, supplier comparisons, and job finances.</p>
          </div>
        </div>
        <SentinelGallery />
      </Container>
    </Container>
  );
}

export default SentinelQuoteBuilder;
