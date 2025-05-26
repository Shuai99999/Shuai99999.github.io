// components/ContactCard.jsx
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Mail } from "lucide-react";

export default function ContactCard() {
  return (
    <Card className="bg-white border border-cyan-200 shadow-xl card-hover">
      <CardContent className="p-6">
        <h2 className="text-2xl font-semibold text-cyan-700 mb-4">
          Contact & Repositories
        </h2>
        <div className="flex gap-4 flex-wrap mb-4">
          <Button asChild variant="outline">
            <a href="mailto:gaoshuai099@gmail.com">
              <Mail className="mr-2" size={18} /> Email
            </a>
          </Button>
          <Button asChild variant="outline">
            <a href="https://github.com/Shuai99999" target="_blank">
              <Github className="mr-2" size={18} /> GitHub
            </a>
          </Button>
        </div>
        <ul className="text-sm text-gray-700 list-disc list-inside space-y-1">
          <li>
            <a
              href="https://github.com/Shuai99999/cmdb"
              target="_blank"
              className="text-cyan-700 underline"
            >
              cmdb
            </a>{" "}
            – Django project for automating daily tasks
          </li>
          <li>
            <a
              href="https://github.com/Shuai99999/officeAutomation"
              target="_blank"
              className="text-cyan-700 underline"
            >
              officeAutomation
            </a>{" "}
            – Workflow automation via API
          </li>
          <li>
            <a
              href="https://github.com/Shuai99999/DemoDataxJob"
              target="_blank"
              className="text-cyan-700 underline"
            >
              DemoDataxJob
            </a>{" "}
            – MySQL ⇄ BigData migration demo
          </li>
          <li>
            <a
              href="https://github.com/Shuai99999/DemoShellMySQL"
              target="_blank"
              className="text-cyan-700 underline"
            >
              DemoShellMySQL
            </a>{" "}
            – Core MySQL shell scripts
          </li>
          <li>
            <a
              href="https://github.com/Shuai99999/DemoOracleSource"
              target="_blank"
              className="text-cyan-700 underline"
            >
              DemoOracleSource
            </a>{" "}
            – Oracle auto archiving tool
          </li>
          <li>
            <a
              href="https://github.com/Shuai99999/React_Curriculum"
              target="_blank"
              className="text-cyan-700 underline"
            >
              React_Curriculum
            </a>{" "}
            – Practice projects in React
          </li>
        </ul>
      </CardContent>
    </Card>
  );
}
