// components/SidebarProfile.jsx
import React from "react";
import { Card } from "@/components/ui/card";
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
          Hi, I’m a cloud infrastructure operator and certified database expert
          with over 15 years of hands-on experience. Whether it's Oracle, MySQL,
          or full-stack DevOps, I love solving complex IT problems and building
          scalable systems. When I’m not working, I’m probably exploring new
          game worlds, hitting the gym (sometimes), or taking my family on
          little adventures around town. Life’s all about balance — tech by day,
          fun and family by heart!
        </p>
      </div>
      <div className="p-4 border-t border-sky-100">
        <h3 className="text-lg font-semibold text-sky-700 mb-2 text-center">
          My Core Skills
        </h3>
        <SkillList />
      </div>
    </div>
  );
}
