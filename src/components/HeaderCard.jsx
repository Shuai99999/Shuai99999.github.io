// components/HeaderCard.jsx
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Code2,
  Github,
  Mail,
  Phone,
  MessageCircle,
  MapPin,
} from "lucide-react";

export default function HeaderCard() {
  return (
    <Card className="bg-white border border-cyan-200 shadow-xl card-hover">
      <CardContent className="p-6">
        <section>
          <h1 className="text-5xl font-extrabold text-cyan-700 mb-1">
            Shuai Gao
          </h1>
          <p className="text-base text-gray-600 mb-4 flex items-center gap-1.5">
            <MapPin size={18} aria-hidden />
            Red Deer, AB, CA
          </p>
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
            <Button asChild variant="outline">
              <a
                href="https://leetcode.com/u/Shuai99999/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Code2 className="mr-2" size={18} /> LeetCode
              </a>
            </Button>
            <Button asChild variant="outline">
              <a href="tel:+15878760888">
                <Phone className="mr-2" size={18} /> 587-876-0888
              </a>
            </Button>
            <Button asChild variant="outline">
              <a
                href="https://wa.me/15878760888"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-2" size={18} /> WhatsApp
              </a>
            </Button>
          </div>
          <div className="space-y-4 text-lg text-gray-700">
            <p>
              Technology professional with 16 years of enterprise database
              experience and 8 years leading cloud computing teams at Haier
              Group, specializing in high-availability systems, cloud
              architecture, and large-scale infrastructure.
            </p>
            <p>
              Currently completing a Computer Programming diploma at Red Deer
              Polytechnic, expanding my expertise into full-stack development,
              AI engineering, and cloud-native applications.
            </p>
            <p>
              My technical background spans Oracle, SQL Server, MySQL, Azure,
              Docker, Kubernetes, Python, C#, ASP.NET Core, React, Node.js, and
              CI/CD.
            </p>
            <p>
              I&apos;m particularly interested in AI Data Engineering, AI Agent
              Development, and AI Platform Engineering, combining enterprise
              infrastructure experience with modern software development to
              build scalable, intelligent systems.
            </p>
          </div>
        </section>
      </CardContent>
    </Card>
  );
}
