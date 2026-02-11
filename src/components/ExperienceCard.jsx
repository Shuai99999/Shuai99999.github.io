// components/ExperienceCard.jsx
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export default function ExperienceCard({
  showExperience,
  toggleExperience,
  ChevronUp,
  ChevronDown,
}) {
  return (
    <Card className="bg-white border border-cyan-200 shadow-xl card-hover">
      <CardContent className="p-6">
        <h2
          className="text-2xl font-semibold text-cyan-700 mb-4 flex items-center gap-2 cursor-pointer"
          onClick={toggleExperience}
        >
          Work Experience{" "}
          {showExperience ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </h2>
        {showExperience && (
          <div className="text-sm text-gray-700 space-y-6">
            <div>
              <h3 className="text-lg font-bold text-cyan-700">
                Blackline Safety - Calgary, AB
              </h3>
              <p className="italic">
                Systems Analyst | January 2025 to Present
              </p>
              <p className="text-gray-700 text-sm leading-relaxed mb-2">
                Responsible for enterprise server infrastructure, database
                administration, and cybersecurity operations across on-premise
                and cloud environments.
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>
                  Administer and optimize Windows Server and Azure-based
                  infrastructure, ensuring high availability, redundancy, and
                  performance stability
                </li>
                <li>
                  Manage core services including Active Directory, Group Policy,
                  DNS, DHCP, and enterprise file services
                </li>
                <li>
                  Oversee Microsoft SQL Server and MySQL environments, including
                  installation, tuning, backup/recovery, replication, and
                  security configuration
                </li>
                <li>
                  Implement patch management and vulnerability remediation
                  programs to strengthen system security posture
                </li>
                <li>
                  Monitor and respond to security alerts from EDR/MDR platforms
                  (Defender for Endpoint, Arctic Wolf), performing log analysis
                  and incident triage
                </li>
                <li>
                  Enforce access control policies, including PAM and MFA, and
                  maintain compliance with ISO 27001, SOC 2, GDPR, and CSOX
                  standards
                </li>
                <li>
                  Develop automation scripts for database maintenance,
                  monitoring, and integrity validation
                </li>
                <li>
                  Maintain disaster recovery and business continuity strategies,
                  supporting audit readiness and risk management initiatives
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold text-cyan-700">
                RRS Supply Chain - Qingdao, China
              </h3>
              <p className="italic">
                Cloud Computing Team Leader | Feb.2017 - Jan.2025
              </p>
              <p className="text-gray-700 text-sm leading-relaxed mb-2">
                Led a cross-functional team of application, infrastructure, and
                systems engineers to design, deploy, and operate a large-scale
                logistics platform supporting multi-billion-dollar annual
                operations across China.
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>
                  Designed and built a new enterprise-grade data center from
                  ground up (2020), including infrastructure architecture,
                  deployment standards, and migration strategy
                </li>
                <li>
                  Led full data center migration with minimal service
                  interruption and zero critical data loss
                </li>
                <li>
                  Managed IT asset lifecycle, capacity planning, and cost
                  optimization through infrastructure performance analytics
                  (CPU, memory, deployment metrics)
                </li>
                <li>
                  Administered and optimized MySQL (5.6/5.7) and Oracle
                  (11g/19c) databases, including performance tuning,
                  high-availability setup, backup/recovery strategy, and ETL
                  development
                </li>
                <li>
                  Built and maintained CI/CD and DevOps platform using Docker,
                  Kubernetes, Jenkins, Git, and Ansible to improve development
                  efficiency and deployment reliability
                </li>
                <li>
                  Directed IT security compliance initiatives during corporate
                  IPO process, including vulnerability remediation and
                  governance framework implementation
                </li>
                <li>
                  Designed and implemented ITIL-based incident and change
                  management processes across teams
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold text-cyan-700">
                ZTE Intelligent Transportation - Qingdao, China
              </h3>
              <p className="italic">Oracle DBA | Mar.2014 - Feb.2017</p>
              <p className="text-gray-700 text-sm leading-relaxed mb-2">
                Managed enterprise Oracle database systems supporting municipal
                Transportation Management Systems for Traffic Police Bureau.
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>
                  Deployed, maintained, and optimized Oracle databases on Linux
                  and Windows environments
                </li>
                <li>
                  Designed backup/recovery strategies and executed database
                  migration projects
                </li>
                <li>
                  Collaborated with development teams to optimize SQL
                  performance and reduce query latency
                </li>
                <li>
                  Led implementation of Big Data analytics platform using
                  Hadoop, HBase, Elasticsearch, and Spark for OLAP and real-time
                  search capabilities
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold text-cyan-700">
                Shanghai Tianji Technology - Shanghai, China
              </h3>
              <p className="italic">
                Database Engineer / ETL Developer | Jul.2007 - Mar.2014
              </p>
              <p className="text-gray-700 text-sm leading-relaxed mb-2">
                Worked on large-scale Data Lake project for Shanghai Police
                Department.
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>
                  Designed and implemented ETL architecture using Informatica
                  PowerCenter
                </li>
                <li>
                  Managed Oracle, MSSQL, and MySQL databases for structured and
                  semi-structured data processing
                </li>
                <li>
                  Developed complex SQL procedures and performed performance
                  tuning for large-scale data workloads
                </li>
                <li>
                  Monitored and optimized database performance in
                  mission-critical public sector systems
                </li>
              </ul>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
