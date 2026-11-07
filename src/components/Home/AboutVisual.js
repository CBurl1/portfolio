import React from "react";

const layers = [
  { number: "01", title: "Python services", detail: "Flask · FastAPI" },
  { number: "02", title: "Product interfaces", detail: "React · Electron" },
  { number: "03", title: "Data and APIs", detail: "PostgreSQL · Magento 2" },
];

function AboutVisual() {
  return (
    <div className="about-visual">
      <span className="section-eyebrow">HOW I BUILD</span>
      <h3>From the workflow to the working product.</h3>
      <div className="about-visual__layers">
        {layers.map((layer) => <div className="about-visual__layer" key={layer.number}><span>{layer.number}</span><div><strong>{layer.title}</strong><small>{layer.detail}</small></div></div>)}
      </div>
    </div>
  );
}

export default AboutVisual;
