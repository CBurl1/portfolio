import React from "react";
import { DiPython, DiJavascript1, DiReact, DiHtml5, DiCss3 } from "react-icons/di";
import { SiPostgresql, SiFlask, SiFastapi, SiTailwindcss, SiTypescript, SiNextdotjs } from "react-icons/si";

const skills = [
  { name: "Python", Icon: DiPython },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "JavaScript", Icon: DiJavascript1 },
  { name: "React", Icon: DiReact },
  { name: "Next.js", Icon: SiNextdotjs },
  { name: "Flask", Icon: SiFlask },
  { name: "FastAPI", Icon: SiFastapi },
  { name: "PostgreSQL", Icon: SiPostgresql },
  { name: "Tailwind CSS", Icon: SiTailwindcss },
  { name: "HTML5", Icon: DiHtml5 },
  { name: "CSS3", Icon: DiCss3 },
];

function Techstack() {
  return <div className="skill-list">{skills.map(({ name, Icon }) => <div className="skill-item" key={name}><Icon aria-hidden="true" /><span>{name}</span></div>)}</div>;
}

export default Techstack;
