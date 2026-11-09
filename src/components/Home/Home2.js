import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import "./Home.css";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <div className="horizontal-line"></div>
      <Container>
        <Row>
          <Col lg={9} className="home-about-description">
            <h2 className="home-about-heading">
              Engineering <span className="purple">in practice</span>
            </h2>
            <div className="home-about-body">
              <p>
                I moved from ecommerce operations into software development in
                2023. Since then I've built M2 InstaCount for inventory and
                picking, AutoSortPro for file organization, and a field
                operations app for Sentinel Insulation.
              </p>
              <p>
                I work mainly with Python, Flask, FastAPI, React, Next.js,
                TypeScript, and PostgreSQL. I still maintain M2 InstaCount and
                improve software through feedback from the people using it.
              </p>
            </div>
          </Col>
        </Row>

        <Row>
          <Col md={12}>
            <div className="stats-row">
              <div className="stat-card">
                <div className="stat-value">132</div>
                <div className="stat-label">AutoSortPro users during operation</div>
              </div>
              <div className="stat-card">
                <div className="stat-value">42 → 22h</div>
                <div className="stat-label">One Magento year-end count using M2 InstaCount</div>
              </div>
            </div>
          </Col>
        </Row>

        <Row>
          <Col md={12} className="home-about-social">
            <h2>
              Let's <span className="purple">connect</span>
            </h2>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="mailto:collin.s.burleigh@gmail.com"
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
