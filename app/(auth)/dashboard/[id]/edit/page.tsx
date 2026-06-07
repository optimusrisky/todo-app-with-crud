import { Breadcrumb } from "@/components/Breadcrumb";
import { Paths } from "@/consts/consts";
import type { TaskDetail } from "@/types/taskTypes";
import { EditTaskForm } from "./EditTaskForm";

const dummyTaskDetail: TaskDetail = {
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
  return (
    <div className="flex flex-col gap-4">
      <Breadcrumb
        items={[
          { title: "ダッシュボード", href: Paths.DASH_BOARD },
          {
            title: dummyTaskDetail.name,
            href: Paths.TASK_DETAIL.replace(
              ":id",
              dummyTaskDetail.id.toString(),
            ),
          },
          { title: "タスク編集" },
        ]}
      />
      <h1 className="text-2xl font-bold">タスク編集</h1>
      <EditTaskForm task={dummyTaskDetail} />
    </div>
  );
}
