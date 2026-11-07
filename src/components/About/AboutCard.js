import React from "react";

function AboutCard() {
  return (
    <div className="about-card">
      <p>
        I'm <span className="purple">Collin Burleigh</span>, a software
        developer focused on <span className="purple">full-stack applications</span>{" "}
        for SaaS and ecommerce workflows.
      </p>
      <p>
        Since June 2023 I've built <span className="purple">AutoSortPro</span>{" "}
        and <span className="purple">M2 InstaCount</span>. Across those products,
        I've worked with React, Electron, Python, Flask, FastAPI, and PostgreSQL,
        connecting authentication, payments, file processing, and API-driven
        workflows with <span className="purple">Auth0, Stripe, OpenAI, Magento 2,
        and AWS</span>.
      </p>
      <p>
        Alongside my freelance work, I'm a{" "}
        <span className="purple">Technical Systems Engineer</span> for a family Magento ecommerce
        business processing <span className="purple">75+ daily orders</span>.
        I built M2 InstaCount around its inventory and receiving workflows,
        and I continue to work with the operational problems the software is
        meant to solve.
      </p>
      <p>
        My applications have reached roughly <span className="purple">140 users</span>.
        Supporting them has made me a more practical developer: I investigate
        issues with API responses, logs, and database checks, ship fixes, and
        document the resulting workflows.
      </p>
    </div>
  );
}

export default AboutCard;
