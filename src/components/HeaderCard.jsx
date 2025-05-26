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
            Oracle Certified Master | Cloud Infrastructure Leader | DevOps
            Practitioner
            <br />
            15+ years in database administration, IT infrastructure, and
            enterprise systems.
          </p>
          <p className="text-lg text-gray-700">
            From Jan 2025, I came to Canada as an international student in
            Alberta. I am eligible for part-time work during semesters and
            full-time work in summer breaks. I will graduate in early 2027.
          </p>
        </section>
      </CardContent>
    </Card>
  );
}
