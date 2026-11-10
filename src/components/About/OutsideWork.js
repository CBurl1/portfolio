import React from "react";
import { FaBaseballBall } from "react-icons/fa";
import { FiCompass, FiMap } from "react-icons/fi";

function OutsideWork() {
  return (
    <div className="outside-work-grid">
      <div className="outside-work-card outside-work-card--outdoors">
        <FiCompass aria-hidden="true" />
        <h3>Time outdoors</h3>
        <p>I enjoy skiing, fishing, hiking, and rock climbing.</p>
      </div>
      <div className="outside-work-card outside-work-card--travel">
        <FiMap aria-hidden="true" />
        <h3>Travel &amp; Spanish</h3>
        <p>I enjoy traveling and have been learning to speak Spanish.</p>
      </div>
      <div className="outside-work-card outside-work-card--baseball">
        <FaBaseballBall aria-hidden="true" />
        <h3>Baseball &amp; coaching</h3>
        <p>I play baseball and am an assistant coach for a high school team.</p>
      </div>
    </div>
  );
}

export default OutsideWork;
