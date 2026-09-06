import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import PageHeader from "../PageHeader";
import openhome from "../../Assets/Projects/wellness-journal.png";
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
          accent="shipped & supported"
          subtitle="SaaS products, ecommerce tooling, and AI prototypes — built and supported end-to-end."
        />

        <div className="metric-strip">
          <div className="metric-strip__item">
            <span className="metric-strip__value">~140</span>
            <span className="metric-strip__label">Users supported</span>
          </div>
          <div className="metric-strip__divider" aria-hidden="true" />
          <div className="metric-strip__item">
            <span className="metric-strip__value">2</span>
            <span className="metric-strip__label">SaaS products shipped</span>
          </div>
          <div className="metric-strip__divider" aria-hidden="true" />
          <div className="metric-strip__item">
            <span className="metric-strip__value">Jun '23</span>
            <span className="metric-strip__label">Freelancing since</span>
          </div>
        </div>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col
            md={4}
            className="project-card"
            style={{ display: "flex", alignItems: "stretch" }}
          >
            <ProjectCard
              imgPath={autosort}
              isBlog={false}
              title="AutoSortPro – AI-Based File Organization"
              description="AI-based file organization app that organizes, tags, and summarizes files. I supported users directly while improving product workflows and shipping fixes for reported issues."
              tags={["Electron", "FastAPI", "React", "PostgreSQL", "Auth0", "Stripe", "OpenAI", "AWS"]}
              showGitHub={false}
              demoLink="https://autosortpro.com"
              buttonText="Case Study"
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
              isBlog={false}
              title="M2 InstaCount – Magento 2 Inventory Tool"
              description="Inventory and receiving tool for Magento 2 operations — barcode workflows and inventory accuracy. Combines product development with hands-on operational support inside a live ecommerce business."
              tags={["Python", "Flask", "React", "PostgreSQL", "Magento 2 API"]}
              showGitHub={false}
              demoLink="https://m2instacount.com"
              buttonText="Live"
              videoDemo="https://www.youtube.com/watch?v=m02yoiAsPDY"
            />
          </Col>

          <Col
            md={4}
            className="project-card"
            style={{ display: "flex", alignItems: "stretch" }}
          >
            <ProjectCard
              imgPath={openhome}
              isBlog={false}
              title="OpenHome – AI Smart Home OS Prototype"
              description="Python application built for OpenHome's AI-powered smart home OS, delivered as part of a prototype presented to 100+ potential investors. Grant-funded work, January – April 2024."
              tags={["Python", "AI", "Voice", "Prototype"]}
              showGitHub={false}
              videoDemo="https://www.loom.com/share/a29cbce183324c6fa0dc31b8ea0389e8"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
