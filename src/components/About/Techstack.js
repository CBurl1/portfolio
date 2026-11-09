import React from "react";
const skills = [
  "Python", "TypeScript", "JavaScript", "React", "Next.js", "Flask",
  "FastAPI", "PostgreSQL", "Tailwind CSS", "HTML", "CSS",
];

function Techstack() {
  return <ul className="skill-list">{skills.map((name) => <li className="skill-item" key={name}>{name}</li>)}</ul>;
}

export default Techstack;
