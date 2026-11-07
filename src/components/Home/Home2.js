import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import AboutVisual from "./AboutVisual";
import "./Home.css";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <div className="horizontal-line"></div>
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h2 className="home-about-heading">
              Engineering <span className="purple">in practice</span>
            </h2>
            <p className="home-about-body">
              I build software for real workflows, from an{" "}
              <span className="purple">AI-powered file organizer</span> to a{" "}
              <span className="purple">Magento 2 inventory tool</span>. My work
              spans product design, application code, integrations, and the
              fixes needed after launch.
              <br />
              <br />
              I work across <span className="purple">React, JavaScript, Python,
              Flask, FastAPI, PostgreSQL, and Electron</span>, with integrations
              including Auth0, Stripe, OpenAI, Magento 2, and AWS.
              <br />
              <br />
              Building for users has kept me close to the product after release:
              I've supported roughly <span className="purple">140 users</span>{" "}
              across my applications, investigated issues, and shipped fixes
              informed by their feedback.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <AboutVisual />
          </Col>
        </Row>

        <Row>
          <Col md={12}>
            <div className="stats-row">
              <div className="stat-card">
                <div className="stat-value">2</div>
                <div className="stat-label">Applications built and supported</div>
              </div>
              <div className="stat-card">
                <div className="stat-value">~140</div>
                <div className="stat-label">Users across those applications</div>
              </div>
            </div>
          </Col>
        </Row>

        <Row>
          <Col md={12} className="home-about-social">
            <h2>
              Let's <span className="purple">Connect:</span>
            </h2>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="mailto:me@collinburleigh.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="Email"
                >
                  <AiOutlineMail />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/burleighcollin/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://github.com/cburl1"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="GitHub"
                >
                  <AiFillGithub />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
