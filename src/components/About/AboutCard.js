import React from "react";

function AboutCard() {
  return (
    <div className="about-card">
      <p>
        I'm <span className="purple">Collin Burleigh</span>, a software
        engineer focused on <span className="purple">Python backend and full-stack applications</span>{" "}
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
        I joined <span className="purple">Historia Emporium</span> in order
        fulfillment in 2022, then moved into software development there after
        completing Flatiron School in 2023. I built M2 InstaCount for its
        inventory and receiving workflows and continue to maintain and extend
        it for the business.
      </p>
      <p>
        Supporting users has made me a more practical developer: I investigate
        issues with API responses, logs, and database checks, ship fixes, and
        document the resulting workflows.
      </p>
    </div>
  );
}

export default AboutCard;
