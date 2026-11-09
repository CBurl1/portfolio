import React from "react";
const tools = [
  "Git", "Supabase", "Vercel", "AWS", "Magento 2", "WordPress",
  "Jekyll", "Electron", "Auth0", "Stripe", "OpenAI API", "pytest",
];

function Toolstack() {
  return <ul className="skill-list">{tools.map((name) => <li className="skill-item" key={name}>{name}</li>)}</ul>;
}

export default Toolstack;
