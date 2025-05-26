import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export default function GameSection() {
  return (
    <Card className="bg-white border border-cyan-200 shadow-xl card-hover">
      <CardContent className="p-6">
        <h2 className="text-2xl font-semibold text-cyan-700 mb-2">Game</h2>
        <p className="text-gray-700 text-sm">
          你可以在这里展示喜欢的游戏、战绩截图、Steam 游戏收藏、Switch
          记录，甚至嵌入小游戏或直播片段。
        </p>
      </CardContent>
    </Card>
  );
}
