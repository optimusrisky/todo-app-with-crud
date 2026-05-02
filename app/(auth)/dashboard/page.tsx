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
      priorityTypeName: "LOW",
      isCompleted: false,
      createdAt: new Date("2026/04/27"),
      updatedAt: new Date("2026/04/27"),
    },
  ];
  return <TaskListContainer tasks={tasks} />;
}
