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
        My independent work includes <span className="purple">AutoSortPro</span>,
        the <span className="purple">Sentinel Insulation</span> quote tool and
        field operations app, and a redesign and photo feed for{" "}
        <span className="purple">Spencer Burleigh</span>. Those projects have
        taken me from Python services and API integrations to mobile-friendly
        interfaces and access controls.
      </p>
      <p>
        I joined <span className="purple">Historia Emporium</span> in order
        fulfillment in 2022, then moved into software development there after
        completing Flatiron School in 2023. I built M2 InstaCount for its
        inventory and receiving workflows and continue to maintain and extend
        it for the business. I now work as an order selector at US Foods while
        continuing my software development work.
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
