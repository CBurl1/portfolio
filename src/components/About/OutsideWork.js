import React from "react";
import { GiMountainClimbing } from "react-icons/gi";

function OutsideWork() {
  return (
    <div className="outdoors-feature">
      <span className="outdoors-feature__icon" aria-hidden="true"><GiMountainClimbing /></span>
      <p>I enjoy skiing, fishing, hiking, and rock climbing when I can.</p>
    </div>
  );
}

export default OutsideWork;
