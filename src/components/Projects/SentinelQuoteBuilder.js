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
        <SentinelGallery />
      </Container>
    </Container>
  );
}

export default SentinelQuoteBuilder;
