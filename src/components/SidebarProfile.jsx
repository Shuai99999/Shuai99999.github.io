// components/SidebarProfile.jsx
import React from "react";
import { Card } from "@/components/ui/card";
import { Sparkles } from "lucide-react";
import SkillList from "./SkillList";

export default function SidebarProfile() {
  return (
    <div className="rounded-xl overflow-hidden border border-sky-200 bg-white shadow-xl">
      <img
        src="/portrait.jpg"
        alt="Shuai Gao portrait"
        className="w-full h-full object-cover aspect-video"
      />
      <div className="p-4 text-sm text-center">
        <h3 className="text-lg font-semibold text-sky-700 mb-2 text-center">
          Shuai Gao
        </h3>
        <p className="sidebar-intro text-sky-700">
          Hi, I’m a cloud and database architect with over 15 years of
          experience designing, operating, and optimizing enterprise-scale
          infrastructure and mission-critical systems. I have led cloud
          computing teams and built high-availability platforms supporting
          large-scale production environments.
          <br /> In addition to infrastructure and DevOps expertise, I actively
          build modern full-stack applications using Node.js, React, and
          cloud-native technologies. With a strong foundation in databases,
          system architecture, and production reliability, I enjoy bridging the
          gap between infrastructure and application development to deliver
          scalable, secure, and resilient systems.
        </p>
      </div>
      <div className="p-4 border-t border-sky-100">
        <h3 className="text-lg font-semibold text-sky-700 mb-2 flex items-center justify-center gap-2">
          <Sparkles size={20} aria-hidden />
          My Core Skills
        </h3>
        <SkillList />
      </div>
    </div>
  );
}
