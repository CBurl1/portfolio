import React from "react";
import { SiAmazonaws, SiAuth0, SiElectron, SiGit, SiJekyll, SiMagento, SiOpenai, SiPytest, SiStripe, SiSupabase, SiVercel, SiWordpress } from "react-icons/si";
const tools = [
  ["Git", SiGit], ["Supabase", SiSupabase], ["Vercel", SiVercel],
  ["AWS", SiAmazonaws], ["Magento 2", SiMagento], ["WordPress", SiWordpress],
  ["Jekyll", SiJekyll], ["Electron", SiElectron], ["Auth0", SiAuth0],
  ["Stripe", SiStripe], ["OpenAI API", SiOpenai], ["pytest", SiPytest],
];

function Toolstack() {
  return <ul className="skill-list">{tools.map(([name, Icon]) => <li className="skill-item" key={name}><span className="skill-item__icon" aria-hidden="true"><Icon /></span><span>{name}</span></li>)}</ul>;
}

export default Toolstack;
