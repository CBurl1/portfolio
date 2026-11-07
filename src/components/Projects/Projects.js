import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import PageHeader from "../PageHeader";
import m2 from "../../Assets/Projects/m2-instacount.png";
import autosort from "../../Assets/Projects/AutoSortPro.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <PageHeader
          eyebrow="01 · Selected Work"
          title="Applications I've"
          accent="built in the real world"
          subtitle="Full-stack applications, ecommerce tooling, and a Python prototype. Each project began with a concrete workflow to solve."
        />

        <div className="metric-strip">
          <div className="metric-strip__item">
            <span className="metric-strip__value">12.5K+</span>
            <span className="metric-strip__label">Files organized with AutoSortPro</span>
          </div>
          <div className="metric-strip__divider" aria-hidden="true" />
          <div className="metric-strip__item">
            <span className="metric-strip__value">132</span>
            <span className="metric-strip__label">Active AutoSortPro user libraries</span>
          </div>
          <div className="metric-strip__divider" aria-hidden="true" />
          <div className="metric-strip__item">
            <span className="metric-strip__value">42 → 22h</span>
            <span className="metric-strip__label">One Magento year-end count</span>
          </div>
        </div>

        <p className="project-evidence-note">
          AutoSortPro usage comes from its <a href="https://autosortpro.com/#impact" target="_blank" rel="noopener noreferrer">product case study</a>. The count comparison comes from <a href="https://m2instacount.com/magento-inventory-case-study/" target="_blank" rel="noopener noreferrer">one Magento operation</a>; it is not a guaranteed outcome.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col
            md={4}
            className="project-card"
            style={{ display: "flex", alignItems: "stretch" }}
          >
            <ProjectCard
              imgPath={autosort}
              imageAlt="AutoSortPro file organization app preview"
              category="Desktop and web application"
              title="AutoSortPro"
              description="Built an AI-powered file organizer with searchable, editable titles, summaries, and tags; OCR, batch processing, and portable exports. Its public case study reports 12.5K+ files organized by 132 active users. The service has since shut down."
              tags={["Electron", "FastAPI", "React", "PostgreSQL", "Auth0", "Stripe", "OpenAI", "AWS"]}
              demoLink="https://autosortpro.com/#impact"
              buttonText="View case study"
              videoDemo="https://www.youtube.com/watch?v=VLEiTljMmFk"
            />
          </Col>

          <Col
            md={4}
            className="project-card"
            style={{ display: "flex", alignItems: "stretch" }}
          >
            <ProjectCard
              imgPath={m2}
              imageAlt="M2 InstaCount inventory tool preview"
              category="Full-stack ecommerce tool"
              title="M2 InstaCount"
              description="Built a Magento 2 tool for scanner-based product lookup, discrepancy flags, receiving with CSV export, and Veeqo batch picking. In one operation, a roughly 4,500-SKU year-end count took 22 hours, down from 42; four timed picks averaged 22% less time."
              tags={["Python", "Flask", "React", "PostgreSQL", "Magento 2 API", "Veeqo API"]}
              demoLink="https://m2instacount.com"
              buttonText="Visit product"
              evidenceLink="https://m2instacount.com/magento-inventory-case-study/"
              evidenceText="Results and methodology"
              videoDemo="https://www.youtube.com/watch?v=m02yoiAsPDY"
            />
          </Col>

          <Col
            md={4}
            className="project-card"
            style={{ display: "flex", alignItems: "stretch" }}
          >
            <ProjectCard
              visualLabel="OpenHome"
              category="Python prototype"
              title="OpenHome"
              description="Developed a Python application for an AI-powered smart-home OS prototype. The grant-funded work was presented to more than 100 potential investors in 2024."
              tags={["Python", "AI", "Voice", "Prototype"]}
              videoDemo="https://www.loom.com/share/a29cbce183324c6fa0dc31b8ea0389e8"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
