import { Card, CardContent } from "@/components/ui/card";

export default function CodeSection() {
  return (
    <Card className="bg-white border border-cyan-200 shadow-xl card-hover">
      <CardContent className="p-6">
        <h2 className="text-2xl font-semibold text-cyan-700 mb-2">Code</h2>
        <p className="text-gray-700 text-sm">
          这里将展示你的一些项目代码、技术演示等内容。例如 GitHub
          项目链接、代码片段、API 使用说明等。
        </p>
      </CardContent>
    </Card>
  );
}
