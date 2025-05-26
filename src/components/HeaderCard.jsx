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
        </section>
      </CardContent>
    </Card>
  );
}
