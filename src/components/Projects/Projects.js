import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import PageHeader from "../PageHeader";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <PageHeader
          eyebrow="01 · Selected Work"
          title="Selected software"
          accent="projects"
          subtitle="Selected applications and client work, from Python inventory systems to a field operations platform."
        />

        <div className="metric-strip">
          <div className="metric-strip__item">
            <span className="metric-strip__value">12.5K+</span>
            <span className="metric-strip__label">Files organized with AutoSortPro</span>
          </div>
          <div className="metric-strip__divider" aria-hidden="true" />
          <div className="metric-strip__item">
            <span className="metric-strip__value">132</span>
            <span className="metric-strip__label">AutoSortPro users during operation</span>
          </div>
          <div className="metric-strip__divider" aria-hidden="true" />
          <div className="metric-strip__item">
            <span className="metric-strip__value">42 → 22h</span>
            <span className="metric-strip__label">One Magento year-end count</span>
          </div>
        </div>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card" style={{ display: "flex", alignItems: "stretch" }}>
            <ProjectCard
              visualKind="field"
              visualLabel="Sentinel Insulation"
              visualSubtitle="Quotes · scheduling · field operations"
              category="Client platform and website"
              title="Sentinel Insulation"
              description="Built a custom quote tool and expanded it into a mobile-friendly ERP for scheduling, installer work tickets, material tracking, supplier comparison, PDF orders, invoices, payments, and job costs. Supabase Row Level Security and server checks restrict installers to assigned jobs and keep financials with office staff. Also rebuilt the WordPress site and manage its SEO."
              tags={["Next.js", "React", "TypeScript", "Supabase", "PostgreSQL", "Vercel", "WordPress"]}
              demoLink="https://sentinelinsulation.com/"
              buttonText="Visit website"
            />
          </Col>

          <Col md={4} className="project-card" style={{ display: "flex", alignItems: "stretch" }}>
            <ProjectCard
              visualKind="inventory"
              visualLabel="M2 InstaCount"
              visualSubtitle="Python · barcode workflows"
              category="Full-stack ecommerce tool"
              title="M2 InstaCount"
              description="Built a Magento 2 tool for barcode counts, receiving, discrepancy review, and scanner-based Veeqo picking. One roughly 4,500-SKU year-end count took 22 hours, down from 42; four timed picks averaged 22% less time than the previous workflow. I continue to maintain and extend the app and manage its search performance."
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
              visualKind="files"
              visualLabel="AutoSortPro"
              visualSubtitle="Python · file intelligence"
              category="Desktop and web application"
              title="AutoSortPro"
              description="Built an AI-powered file organizer with searchable, editable titles, summaries, and tags, plus OCR, batch processing, and portable exports. During its operation, 132 active users organized 12.5K+ files. The service has since shut down."
              tags={["Python", "FastAPI", "Electron", "React", "PostgreSQL", "Auth0", "Stripe", "OpenAI", "AWS"]}
              demoLink="https://autosortpro.com/#impact"
              buttonText="View case study"
              videoDemo="https://www.youtube.com/watch?v=VLEiTljMmFk"
            />
          </Col>

          <Col md={4} className="project-card" style={{ display: "flex", alignItems: "stretch" }}>
            <ProjectCard
              visualKind="photography"
              visualLabel="Spencer Burleigh"
              visualSubtitle="Jekyll · S3 photo feed"
              category="Client website"
              title="Spencer Burleigh"
              description="Redesigned and maintained a Jekyll site for a year, fixed image and path bugs, and built a VSCO-style photo feed backed by an AWS S3 bucket with a bucket access policy."
              tags={["Jekyll", "JavaScript", "AWS S3", "Frontend"]}
              demoLink="https://spencerburleigh.com/"
              buttonText="Visit website"
            />
          </Col>

          <Col
            md={4}
            className="project-card"
            style={{ display: "flex", alignItems: "stretch" }}
          >
            <ProjectCard
              visualLabel="OpenHome"
              visualKind="home"
              visualSubtitle="Python · voice OS prototype"
              category="Python prototype"
              title="OpenHome"
              description="Built a small therapist-style voice app on OpenHome's evolving OS. It used the OpenAI API and summarized stored JSON conversations to provide context for longer chats."
              tags={["Python", "OpenAI API", "Voice", "Prototype"]}
              videoDemo="https://www.loom.com/share/a29cbce183324c6fa0dc31b8ea0389e8"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
