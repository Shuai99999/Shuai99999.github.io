// components/HeaderCard.jsx
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export default function HeaderCard() {
  return (
    <Card className="bg-white border border-cyan-200 shadow-xl card-hover">
      <CardContent className="p-6">
        <section>
          <h1 className="text-5xl font-extrabold text-cyan-700 mb-4">
            Shuai Gao
          </h1>
          <p className="text-lg text-gray-700">
            Cloud & Database Architect | DevOps & Data Engineering
            <br />
            Technology professional with 15+ years of experience in
            enterprise-scale database architecture, cloud infrastructure, and
            high-availability systems.
          </p>
          <p className="text-lg text-gray-700">
            Diploma in Computer Programming <br />
            Red Deer Polytechnic — Graduated January 2026 <br />
            Available for full-time positions
          </p>
        </section>
      </CardContent>
    </Card>
  );
}
