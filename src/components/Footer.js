import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <Container fluid className="footer">
      <Container>
        <Row className="align-items-center">
          <Col md={4} className="footer-copywright">
            <h3>Designed &amp; built by Collin Burleigh</h3>
          </Col>
          <Col md={4} className="footer-copywright">
            <h3>© {year} · All rights reserved</h3>
          </Col>
          <Col md={4} className="footer-body">
            <ul className="footer-icons">
              <li className="social-icons">
                <a
                  href="https://github.com/cburl1"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour footer-icon"
                  aria-label="GitHub"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/burleighcollin/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour footer-icon"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:me@collinburleigh.com"
                  className="icon-colour footer-icon"
                  aria-label="Email"
                >
                  <AiOutlineMail />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Footer;
