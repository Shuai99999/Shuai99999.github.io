import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export default function DataSection() {
  return (
    <Card className="bg-white border border-cyan-200 shadow-xl card-hover">
      <CardContent className="p-6">
        <h2 className="text-2xl font-semibold text-cyan-700 mb-2">Analytics</h2>
        <p className="text-gray-700 text-sm mb-4">
          未来你可以在这里展示如学习统计、技能增长曲线、年度总结、时间分配图表等。同时下面可以放一张地图，展示你去过的地方。
        </p>
        <div className="w-full h-64 bg-gray-100 border border-dashed border-cyan-300 flex items-center justify-center text-gray-400">
          [这里将嵌入交互地图：你去过的国家和城市]
        </div>
      </CardContent>
    </Card>
  );
}
