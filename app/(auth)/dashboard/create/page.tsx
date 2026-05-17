import { Breadcrumb } from "@/components/Breadcrumb";
import { Paths } from "@/consts/consts";
import { CreateTaskForm } from "./CreateTaskForm";

export default function Page() {
  return (
    <div className="flex flex-col gap-4">
      <Breadcrumb
        items={[
          { title: "ダッシュボード", href: Paths.DASH_BOARD },
          { title: "タスク作成" },
        ]}
      />
      <h1 className="text-2xl font-bold">タスク作成</h1>
      <CreateTaskForm />
    </div>
  );
}
