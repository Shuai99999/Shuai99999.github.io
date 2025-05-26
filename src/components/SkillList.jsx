// components/SkillList.jsx
import React from "react";
import Skill from "./Skill";

const skills = [
  {
    skill: "DBA",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "Cloud Computing",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Dev Ops",
    level: "intermediate",
    color: "#C3DCAF",
  },
  {
    skill: "Data Science",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "HTML+CSS",
    level: "beginner",
    color: "#60DAFB",
  },
  {
    skill: "React",
    level: "beginner",
    color: "#FF3B00",
  },
];

export default function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skillObj) => (
        <Skill
          key={skillObj.skill}
          skill={skillObj.skill}
          level={skillObj.level}
          color={skillObj.color}
        />
      ))}
    </div>
  );
}
