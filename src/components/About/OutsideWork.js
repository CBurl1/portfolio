import React from "react";
import { GiMountainClimbing, GiBaseballBat } from "react-icons/gi";
import { TbWorld } from "react-icons/tb";

const items = [
  {
    icon: <TbWorld />,
    title: "Travel and Spanish",
    body: "I like visiting new places and am learning to speak Spanish.",
  },
  {
    icon: <GiMountainClimbing />,
    title: "Time outdoors",
    body: "I enjoy skiing, fishing, and hiking when I can.",
  },
  {
    icon: <GiBaseballBat />,
    title: "Youth baseball",
    body: "I enjoy coaching youth baseball and spending time with the team.",
  },
];

function OutsideWork() {
  return (
    <div className="interest-grid">
      {items.map((item) => (
        <div className="interest-card" key={item.title}>
          <div className="interest-card__icon">{item.icon}</div>
          <h4 className="interest-card__title">{item.title}</h4>
          <p className="interest-card__body">{item.body}</p>
        </div>
      ))}
    </div>
  );
}

export default OutsideWork;
