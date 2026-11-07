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
          eyebrow="About · Collin Burleigh"
          title="Software engineer"
          accent="building across the stack"
          subtitle="I turn operational problems into working applications, then improve them through direct feedback from the people who use them."
        />

        <section className="about-block">
          <div style={{ textAlign: "center" }}>
            <span className="section-eyebrow">01 · Bio</span>
          </div>
          <Row style={{ justifyContent: "center" }}>
            <Col lg={9} md={11} sm={12}>
              <Aboutcard />
            </Col>
          </Row>
        </section>

        <section className="about-block">
          <div style={{ textAlign: "center" }}>
            <span className="section-eyebrow">02 · Experience</span>
          </div>
          <h2 className="project-heading" style={{ textAlign: "center" }}>
            Where I've <strong className="purple">worked</strong>
          </h2>
          <Row style={{ justifyContent: "center" }}>
            <Col lg={10} md={11} sm={12}>
              <ExperienceTimeline />
            </Col>
          </Row>
        </section>

        <section className="about-block">
          <div style={{ textAlign: "center" }}>
            <span className="section-eyebrow">03 · Skillset</span>
          </div>
          <Row style={{ justifyContent: "center" }}>
            <Col
              lg={6}
              md={12}
              style={{ paddingTop: "20px", paddingBottom: "30px" }}
            >
              <h2
                className="project-heading"
                style={{ textAlign: "center", marginBottom: "30px" }}
              >
                Professional <strong className="purple">Skillset</strong>
              </h2>
              <Techstack />
            </Col>

            <Col
              lg={6}
              md={12}
              style={{ paddingTop: "20px", paddingBottom: "30px" }}
            >
              <h2
                className="project-heading"
                style={{ textAlign: "center", marginBottom: "30px" }}
              >
                <strong className="purple">Tools</strong> I use
              </h2>
              <Toolstack />
            </Col>
          </Row>
        </section>

        <section className="about-block">
          <div style={{ textAlign: "center" }}>
            <span className="section-eyebrow">04 · Outside of work</span>
          </div>
          <h2 className="project-heading" style={{ textAlign: "center" }}>
            A few things I <strong className="purple">enjoy</strong>
          </h2>
          <Row style={{ justifyContent: "center" }}>
            <Col lg={10} md={11} sm={12}>
              <OutsideWork />
            </Col>
          </Row>
        </section>

        <section className="about-block">
          <div style={{ textAlign: "center" }}>
            <span className="section-eyebrow">05 · Activity</span>
          </div>
          <h2 className="project-heading" style={{ textAlign: "center" }}>
            My <strong className="purple">commits</strong>
          </h2>
          <div className="github-frame">
            <Github />
          </div>
        </section>
      </Container>
    </Container>
  );
}

export default About;
