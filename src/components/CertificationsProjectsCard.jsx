// components/CertificationsProjectsCard.jsx
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export default function CertificationsProjectsCard() {
  return (
    <Card className="bg-white border border-cyan-200 shadow-xl card-hover">
      <CardContent className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-xl font-bold text-cyan-700 mb-2">
            Certifications & Skills
          </h2>
          <ul className="text-gray-700 list-disc list-inside space-y-1">
            <li>Oracle Certified Master (OCM, 2014)</li>
            <li>Red Hat Certified Engineer (RHCE, 2010)</li>
            <li>Oracle, MySQL, SQL Server</li>
            <li>Docker, Kubernetes, Git, Jenkins, Ansible</li>
            <li>CI/CD, ITIL, Infrastructure Automation</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-bold text-cyan-700 mb-2">
            Project Highlights
          </h2>
          <p className="text-gray-700 mb-2">
            Data Center Building and Immigration
            <br />
            <strong>Position:</strong> Project Manager
            <br />
            <strong>Period:</strong> Feb.2020-Dec.2024
            <br />
            Description: Converted infra from private cloud to x86 servers,
            achieving over 40% cost savings (~$3.2M USD). Led migration and
            capacity planning.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
