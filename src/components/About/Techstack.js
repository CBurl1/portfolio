import React from "react";
import { DiPython, DiJavascript1, DiReact, DiHtml5, DiCss3 } from "react-icons/di";
import { SiPostgresql, SiFlask, SiFastapi, SiSqlite, SiTailwindcss } from "react-icons/si";

const skills = [
  { name: "Python", Icon: DiPython },
  { name: "JavaScript", Icon: DiJavascript1 },
  { name: "React", Icon: DiReact },
  { name: "Flask", Icon: SiFlask },
  { name: "FastAPI", Icon: SiFastapi },
  { name: "PostgreSQL", Icon: SiPostgresql },
  { name: "SQLite", Icon: SiSqlite },
  { name: "HTML5", Icon: DiHtml5 },
  { name: "CSS3", Icon: DiCss3 },
  { name: "Tailwind", Icon: SiTailwindcss },
];

function Techstack() {
  return <div className="skill-list">{skills.map(({ name, Icon }) => <div className="skill-item" key={name}><Icon aria-hidden="true" /><span>{name}</span></div>)}</div>;
}

export default Techstack;
