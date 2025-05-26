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
                RRS Supply Chain
              </h3>
              <p className="italic">
                Cloud Computing Team Leader | Feb.2017 - Jan.2025
              </p>
              <p className="text-gray-700 text-sm leading-relaxed mb-2">
                RRS Supply Chain is a subsidiary of Haier Corporation and
                operates a multi-billion RMB logistics business serving both
                Haier and other major manufacturers across China. At RRS, I led
                a cross-functional team of application, infrastructure, and
                systems engineers to build and deliver a large-scale logistics
                application supporting nationwide operations.
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Designed and built a data center from scratch.</li>
                <li>Managed IT asset lifecycle, capacity, and performance.</li>
                <li>Administered Oracle, MySQL, MS SQL Server.</li>
                <li>
                  Developed CI/CD platform with Docker, Kubernetes, Jenkins.
                </li>
                <li>Led IT security governance during corporate listing.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold text-cyan-700">
                ZTE Intelligent Transportation
              </h3>
              <p className="italic">Oracle DBA | Mar.2014 - Feb.2017</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>
                  Deployed and optimized Oracle databases for public safety
                  systems.
                </li>
                <li>
                  Participated in OLAP system design with Hadoop/HBase/Spark.
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold text-cyan-700">
                Shanghai Tianji Technology
              </h3>
              <p className="italic">
                Database Engineer / ETL Developer | Jul.2007 - Mar.2014
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Designed ETL architecture with Informatica.</li>
                <li>
                  Maintained RMDBs and performed performance optimization.
                </li>
              </ul>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
