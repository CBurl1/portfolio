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
            <span className="metric-strip__value">2</span>
            <span className="metric-strip__label">Applications built</span>
          </div>
          <div className="metric-strip__divider" aria-hidden="true" />
          <div className="metric-strip__item">
            <span className="metric-strip__value">~140</span>
            <span className="metric-strip__label">Users across my apps</span>
          </div>
          <div className="metric-strip__divider" aria-hidden="true" />
          <div className="metric-strip__item">
            <span className="metric-strip__value">3</span>
            <span className="metric-strip__label">Featured builds</span>
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
              imageAlt="AutoSortPro file organization app preview"
              category="Desktop and web application"
              title="AutoSortPro"
              description="Built an AI-powered file organizer for tagging, summarizing, and organizing files. Implemented product workflows and integrations across Electron, FastAPI, React, PostgreSQL, Auth0, Stripe, OpenAI, and AWS."
              tags={["Electron", "FastAPI", "React", "PostgreSQL", "Auth0", "Stripe", "OpenAI", "AWS"]}
              demoLink="https://autosortpro.com"
              buttonText="Visit product"
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
              description="Built an inventory and receiving tool for Magento 2 operations, connecting barcode workflows and inventory checks to a Python, Flask, React, and PostgreSQL application."
              tags={["Python", "Flask", "React", "PostgreSQL", "Magento 2 API"]}
              demoLink="https://m2instacount.com"
              buttonText="Visit product"
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
