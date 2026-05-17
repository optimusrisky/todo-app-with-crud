import { Breadcrumb } from "@/components/Breadcrumb";
import type { Task } from "@/types/taskTypes";
import { TaskListContainer } from "./TaskListContainer";

export default function Page() {
  const tasks: Task[] = [
    {
      id: 1,
      name: "早起きする",
      isCompleted: false,
      createdAt: new Date("2026/04/27"),
      updatedAt: new Date("2026/04/27"),
    },
    {
      id: 2,
      name: "掃除する",
      priorityType: "low",
      priorityTypeName: "低",
      isCompleted: false,
      createdAt: new Date("2026/04/27"),
      updatedAt: new Date("2026/04/27"),
    },
  ];
  return (
    <div className="flex flex-col gap-4">
      <Breadcrumb items={[{ title: "ダッシュボード" }]} />
      <h1 className="text-2xl font-bold">ダッシュボード</h1>
      <TaskListContainer tasks={tasks} />
    </div>
  );
}
