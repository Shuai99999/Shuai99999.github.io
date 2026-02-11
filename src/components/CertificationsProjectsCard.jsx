// components/CertificationsProjectsCard.jsx
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Wrench } from "lucide-react";

const certifications = [
  "Oracle Certified Master (OCM), 2014",
  "Red Hat Certified Engineer (RHCE), 2010",
  "Microsoft Certified: Azure Fundamentals (AZ-900), 2025",
];

const technicalSections = [
  {
    title: "Database & Architecture",
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
    items: [
      "Data center design, build, and migration",
      "IT asset management, capacity planning, cost estimation",
      "ITIL-based incident & change management",
      "Security & compliance operations",
    ],
  },
  {
    title: "Middleware & DevOps",
    items: [
      "Docker, Kubernetes, Git, Jenkins, Ansible",
    ],
  },
  {
    title: "Full Stack Development",
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
          <div>
            <h3 className="text-base font-semibold text-cyan-600 border-b border-cyan-100 pb-1 mb-2">
              Certifications
            </h3>
            <ul className="text-gray-700 text-sm list-disc list-inside space-y-1">
              {certifications.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold text-cyan-600 border-b border-cyan-100 pb-1 mb-3">
              Technical Expertise
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {technicalSections.map((section) => (
                <div key={section.title} className="space-y-2">
                  <h4 className="text-sm font-semibold text-cyan-600">
                    {section.title}
                  </h4>
                  <ul className="text-gray-700 text-sm list-disc list-inside space-y-1">
                    {section.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
