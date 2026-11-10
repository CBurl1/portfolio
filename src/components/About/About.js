import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PageHeader from "../PageHeader";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import Toolstack from "./Toolstack";
import ExperienceTimeline from "./ExperienceTimeline";
import OutsideWork from "./OutsideWork";

function About() {
  return (
    <Container fluid className="about-section">
      <Container>
        <PageHeader
          title="Software engineer"
          accent="with a Python focus"
          subtitle="I turn operational problems into working applications, then improve them through direct feedback from the people who use them."
        />

        <section className="about-block about-block--intro">
          <h2 className="project-heading">About me</h2>
          <Aboutcard />
        </section>

        <section className="about-block">
          <h2 className="project-heading">Experience</h2>
          <Row style={{ justifyContent: "center" }}>
            <Col lg={10} md={11} sm={12}>
              <ExperienceTimeline />
            </Col>
          </Row>
        </section>

        <section className="about-block skillset-section">
          <h2 className="project-heading">Skills</h2>
          <div className="skillset-grid">
            <div className="skill-panel">
              <h2 className="project-heading">Core <strong className="purple">technologies</strong></h2>
              <p>Languages, frameworks, and data tools I use to build applications.</p>
              <Techstack />
            </div>
            <div className="skill-panel">
              <h2 className="project-heading">Tools &amp; <strong className="purple">platforms</strong></h2>
              <p>Tools and services I've used in product and operational work.</p>
              <Toolstack />
            </div>
          </div>
        </section>

        <section className="about-block">
          <h2 className="project-heading">Outside of work</h2>
          <OutsideWork />
        </section>

        <section className="about-block">
          <h2 className="project-heading">GitHub activity</h2>
          <div className="github-frame">
            <Github />
          </div>
        </section>
      </Container>
    </Container>
  );
}

export default About;
