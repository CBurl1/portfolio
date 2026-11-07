import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  AiOutlineFundProjectionScreen,
  AiOutlineArrowRight,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import Particle from "../Particle";
import HeroVisual from "./HeroVisual";
import Home2 from "./Home2";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row className="align-items-center">
            <Col md={7} className="home-header">
              <p className="hero-kicker">
                Collin Burleigh · Software Engineer
              </p>

              <h1 className="heading-name">
                I build <strong className="main-name">useful software</strong> from idea to production.
              </h1>

              <p className="hero-summary">
                Full-stack applications in React, Python, and PostgreSQL. I built
                AutoSortPro and M2 InstaCount, connecting product workflows with
                APIs, data, and the people who use them.
              </p>

              <div className="home-cta-row">
                <Link to="/project" className="btn-gradient">
                  <AiOutlineFundProjectionScreen />
                  Explore Projects
                  <AiOutlineArrowRight />
                </Link>
                <Link to="/resume" className="btn-ghost">
                  <CgFileDocument />
                  View Resume
                </Link>
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <HeroVisual />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
