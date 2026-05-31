import { Breadcrumb } from "@/components/Breadcrumb";
import { Paths } from "@/consts/consts";
import type { TaskDetail as TaskDetailType } from "@/types/taskTypes";
import { TaskDetail } from "./TaskDetail";

const dummyTaskDetail: TaskDetailType = {
  id: 1,
  name: "早起きする",
  isCompleted: false,
  createdAt: new Date("2026/04/27"),
  updatedAt: new Date("2026/04/27"),
  description: `

# タイトル

これは **太字** です。

- item1

- item2

`,
  createdBy: "ABC 太郎",
};

export default function Page() {
  const taskDetail = dummyTaskDetail;

  return (
    <div className="flex flex-col gap-4">
      <Breadcrumb
        items={[
          { title: "ダッシュボード", href: Paths.DASH_BOARD },
          { title: "タスク詳細" },
        ]}
      />
      <h1 className="text-2xl font-bold">{taskDetail.name}</h1>
      <TaskDetail task={dummyTaskDetail} />
    </div>
  );
}
