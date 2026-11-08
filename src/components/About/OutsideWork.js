import React from "react";
import { GiMountainClimbing } from "react-icons/gi";
import { FaBaseballBall, FaGlobeAmericas } from "react-icons/fa";

const outdoorActivities = ["Skiing", "Fishing", "Hiking", "Rock climbing"];

function OutsideWork() {
  return (
    <div className="outside-work-grid">
      <div className="outside-work-card outside-work-card--outdoors">
        <span className="outside-work-card__icon" aria-hidden="true"><GiMountainClimbing /></span>
        <h3>Time outdoors</h3>
        <p>I enjoy getting outside when I can.</p>
        <ul className="outside-work-activities" aria-label="Outdoor interests">
          {outdoorActivities.map((activity) => <li key={activity}>{activity}</li>)}
        </ul>
      </div>
      <div className="outside-work-card outside-work-card--travel">
        <span className="outside-work-card__icon" aria-hidden="true"><FaGlobeAmericas /></span>
        <h3>Travel &amp; Spanish</h3>
        <p>I enjoy traveling and have been learning to speak Spanish.</p>
      </div>
      <div className="outside-work-card outside-work-card--baseball">
        <span className="outside-work-card__icon" aria-hidden="true"><FaBaseballBall /></span>
        <h3>Baseball &amp; coaching</h3>
        <p>I play baseball and am an assistant coach for a high school team.</p>
      </div>
    </div>
  );
}

export default OutsideWork;
