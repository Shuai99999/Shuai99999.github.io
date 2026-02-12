import { Card, CardContent } from "@/components/ui/card";
import { Code2 } from "lucide-react";

const codeProjects = [
  {
    title: "Enterprise Automation Platform (Django)",
    url: "https://github.com/Shuai99999/cmdb.git",
    description:
      "Centralized CMDB and workflow automation platform built with Django to streamline infrastructure operations and asset management.",
  },
  {
    title: "API-Driven Workflow Orchestration",
    url: "https://github.com/Shuai99999/officeAutomation.git",
    description:
      "Automated enterprise approval processes via REST API integration, reducing manual operations and improving process efficiency.",
  },
  {
    title: "Data Lifecycle & Migration Framework",
    url: "https://github.com/Shuai99999/DemoDataxJob.git",
    description:
      "Cross-platform data archiving and migration framework (MySQL, Oracle, Impala) using DataX. Sanitized enterprise demo.",
  },
  {
    title: "Production Database Automation Toolkit",
    url: "https://github.com/Shuai99999/DemoOracleSource.git",
    description:
      "Automated Oracle data lifecycle management and cleanup for production systems (sanitized core logic).",
  },
  {
    title: "EverMotion Trading",
    url: "https://evermotion.ca/",
    description:
      "Cross-border e-commerce site built with MongoDB, Express, and React (MERN stack).",
  },
];

export default function CodeSection() {
  return (
    <Card className="bg-white border border-cyan-200 shadow-xl card-hover">
      <CardContent className="p-6">
        <h2 className="text-2xl font-semibold text-cyan-700 mb-4 flex items-center gap-2">
          <Code2 size={22} aria-hidden />
          Code
        </h2>
        <ul className="space-y-6">
          {codeProjects.map(({ title, url, description }) => (
            <li key={url}>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-700 font-medium underline hover:text-cyan-800 decoration-cyan-600"
              >
                {title}
              </a>
              <p className="text-gray-600 text-sm mt-0.5">{description}</p>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
