// components/CertificationsProjectsCard.jsx
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Wrench,
  Award,
  Database,
  Cloud,
  Container,
  Code2,
} from "lucide-react";

const certifications = [
  "Oracle Certified Master (OCM), 2014",
  "Red Hat Certified Engineer (RHCE), 2010",
  "Microsoft Certified: Azure Fundamentals (AZ-900), 2025",
];

const technicalSections = [
  {
    title: "Database & Architecture",
    icon: Database,
    items: [
      "Oracle & MySQL & MSSQL deployment, performance tuning, backup/recovery, migration, monitoring",
      "Oracle MAA architecture (Primary/Standby switchovers)",
      "SQL Server Always On Availability Groups & Failover Clustering",
      "Enterprise-level data and database migration strategies",
      "ETL processing and advanced SQL procedures",
    ],
  },
  {
    title: "Infrastructure & Cloud",
    icon: Cloud,
    items: [
      "Data center design, build, and migration",
      "IT asset management, capacity planning, cost estimation",
      "ITIL-based incident & change management",
      "Security & compliance operations",
    ],
  },
  {
    title: "Middleware & DevOps",
    icon: Container,
    items: [
      "Docker, Kubernetes, Git, Jenkins, Ansible",
    ],
  },
  {
    title: "Full Stack Development",
    icon: Code2,
    items: [
      "MERN Stack (MongoDB, Express, React, Node.js)",
      "RESTful API design",
      "Authentication & JWT",
      "MVC architecture",
      "Git version control",
      "Basic CI/CD pipeline integration",
    ],
  },
];

export default function CertificationsProjectsCard() {
  return (
    <Card className="bg-white border border-cyan-200 shadow-xl card-hover">
      <CardContent className="p-6">
        <h2 className="text-xl font-bold text-cyan-700 mb-4 flex items-center gap-2">
          <Wrench size={22} aria-hidden />
          Certifications & Technical Expertise
        </h2>

        <div className="space-y-6">
          {/* Certifications as compact badges */}
          <div>
            <h3 className="text-base font-semibold text-cyan-600 mb-3 flex items-center gap-2">
              <Award size={18} aria-hidden />
              Certifications
            </h3>
            <div className="flex flex-wrap gap-2">
              {certifications.map((item) => {
                const match = item.match(/^(.+),\s*(\d{4})$/);
                const label = match ? match[1] : item;
                const year = match ? match[2] : null;
                return (
                  <span
                    key={item}
                    className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50/60 px-3 py-1.5 text-sm text-gray-700"
                  >
                    <span>{label}</span>
                    {year && (
                      <span className="shrink-0 rounded bg-cyan-100 px-1.5 py-0.5 text-xs font-medium text-cyan-700">
                        {year}
                      </span>
                    )}
                  </span>
                );
              })}
            </div>
          </div>

          {/* Technical Expertise: single column for even flow */}
          <div>
            <h3 className="text-base font-semibold text-cyan-600 mb-3 flex items-center gap-2">
              Technical Expertise
            </h3>
            <div className="space-y-4">
              {technicalSections.map((section) => {
                const Icon = section.icon;
                return (
                  <div
                    key={section.title}
                    className="rounded-lg border border-cyan-100 bg-cyan-50/30 p-4"
                  >
                    <h4 className="mb-2 flex items-center gap-2 text-sm font-semibold text-cyan-700">
                      <Icon size={18} aria-hidden className="shrink-0" />
                      {section.title}
                    </h4>
                    <ul className="text-gray-700 text-sm list-disc list-inside space-y-1">
                      {section.items.map((item) => (
                        <li key={item} className="leading-snug">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
