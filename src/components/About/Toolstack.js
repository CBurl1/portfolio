import React from "react";
import { SiGit, SiJira, SiPostman, SiPytest, SiJest, SiElectron, SiMagento, SiAuth0, SiStripe, SiOpenai, SiAmazonaws } from "react-icons/si";

const tools = [
  { name: "Git", Icon: SiGit },
  { name: "Jira", Icon: SiJira },
  { name: "Postman", Icon: SiPostman },
  { name: "PyTest", Icon: SiPytest },
  { name: "Jest", Icon: SiJest },
  { name: "Electron", Icon: SiElectron },
  { name: "Magento 2", Icon: SiMagento },
  { name: "Auth0", Icon: SiAuth0 },
  { name: "Stripe", Icon: SiStripe },
  { name: "OpenAI", Icon: SiOpenai },
  { name: "AWS", Icon: SiAmazonaws },
];

function Toolstack() {
  return <div className="skill-list">{tools.map(({ name, Icon }) => <div className="skill-item" key={name}><Icon aria-hidden="true" /><span>{name}</span></div>)}</div>;
}

export default Toolstack;
