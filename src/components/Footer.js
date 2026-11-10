import React from "react";
import { Container } from "react-bootstrap";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <Container>
        <div className="footer-main">
          <div className="footer-identity">
            <strong>Collin Burleigh</strong>
            <span>Software engineer · Python and full-stack applications</span>
          </div>
          <ul className="footer-icons" aria-label="Social links">
            <li><a href="https://github.com/cburl1" target="_blank" rel="noreferrer" className="footer-icon" aria-label="GitHub"><AiFillGithub /></a></li>
            <li><a href="https://www.linkedin.com/in/burleighcollin/" target="_blank" rel="noreferrer" className="footer-icon" aria-label="LinkedIn"><FaLinkedinIn /></a></li>
            <li><a href="mailto:me@collinburleigh.com" className="footer-icon" aria-label="Email"><AiOutlineMail /></a></li>
          </ul>
        </div>
        <div className="footer-bottom">
          <span>© {year} Collin Burleigh</span>
          <a href="mailto:me@collinburleigh.com">me@collinburleigh.com</a>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
