// components/SkillList.jsx
import React from "react";
import Skill from "./Skill";

const skills = [
  // Database Architecture
  {
    skill: "Oracle (MAA / Data Guard)",
    level: "expert",
    color: "#F80000",
  },
  {
    skill: "MySQL",
    level: "expert",
    color: "#00758F",
  },
  {
    skill: "Microsoft SQL Server (Always On)",
    level: "advanced",
    color: "#CC2927",
  },

  // High Availability & DR
  {
    skill: "High Availability & Disaster Recovery",
    level: "expert",
    color: "#6C63FF",
  },
  {
    skill: "Backup & Recovery Strategy",
    level: "expert",
    color: "#4CAF50",
  },

  // Cloud & Infrastructure
  {
    skill: "Azure",
    level: "intermediate",
    color: "#0078D4",
  },
  {
    skill: "Linux Server Administration",
    level: "advanced",
    color: "#FCC624",
  },
  {
    skill: "Windows Server",
    level: "advanced",
    color: "#00A4EF",
  },

  // DevOps & Containerization
  {
    skill: "Docker",
    level: "advanced",
    color: "#2496ED",
  },
  {
    skill: "Kubernetes",
    level: "intermediate",
    color: "#326CE5",
  },
  {
    skill: "Jenkins",
    level: "advanced",
    color: "#D33833",
  },
  {
    skill: "Ansible",
    level: "intermediate",
    color: "#EE0000",
  },

  // Infrastructure Services
  {
    skill: "Active Directory & Group Policy",
    level: "advanced",
    color: "#0078D4",
  },
  {
    skill: "DNS / DHCP / Networking",
    level: "advanced",
    color: "#FF6F00",
  },

  // Security & Compliance
  {
    skill: "IT Security & Vulnerability Management",
    level: "advanced",
    color: "#8E44AD",
  },
  {
    skill: "ITIL Incident & Change Management",
    level: "advanced",
    color: "#2ECC71",
  },

  // Automation
  {
    skill: "Shell / PowerShell Scripting",
    level: "expert",
    color: "#5391FE",
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
