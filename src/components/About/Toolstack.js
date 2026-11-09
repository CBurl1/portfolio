import React from "react";
import { SiGit, SiPytest, SiElectron, SiMagento, SiAuth0, SiStripe, SiOpenai, SiAmazonaws, SiSupabase, SiVercel, SiWordpress, SiJekyll } from "react-icons/si";

const tools = [
  { name: "Git", Icon: SiGit },
  { name: "Supabase", Icon: SiSupabase },
  { name: "Vercel", Icon: SiVercel },
  { name: "AWS", Icon: SiAmazonaws },
  { name: "Magento 2", Icon: SiMagento },
  { name: "WordPress", Icon: SiWordpress },
  { name: "Jekyll", Icon: SiJekyll },
  { name: "Electron", Icon: SiElectron },
  { name: "Auth0", Icon: SiAuth0 },
  { name: "Stripe", Icon: SiStripe },
  { name: "OpenAI", Icon: SiOpenai },
  { name: "pytest", Icon: SiPytest },
];

function Toolstack() {
  return <div className="skill-list">{tools.map(({ name, Icon }) => <div className="skill-item" key={name}><Icon aria-hidden="true" /><span>{name}</span></div>)}</div>;
}

export default Toolstack;
