import React from "react";
import { DiCss3, DiHtml5, DiJavascript1, DiPython, DiReact } from "react-icons/di";
import { SiFastapi, SiFlask, SiNextdotjs, SiPostgresql, SiTailwindcss, SiTypescript } from "react-icons/si";
const skills = [
  ["Python", DiPython], ["TypeScript", SiTypescript], ["JavaScript", DiJavascript1],
  ["React", DiReact], ["Next.js", SiNextdotjs], ["Flask", SiFlask],
  ["FastAPI", SiFastapi], ["PostgreSQL", SiPostgresql],
  ["Tailwind CSS", SiTailwindcss], ["HTML", DiHtml5], ["CSS", DiCss3],
];

function Techstack() {
  return <ul className="skill-list">{skills.map(([name, Icon]) => <li className="skill-item" key={name}><span className="skill-item__icon" aria-hidden="true"><Icon /></span><span>{name}</span></li>)}</ul>;
}

export default Techstack;
