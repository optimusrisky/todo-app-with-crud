"use client";

import dayjs from "dayjs";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { BsPencil } from "react-icons/bs";
import { TbTrash } from "react-icons/tb";
import Markdown from "react-markdown";
import { DeleteTaskModal } from "@/components/task/modal/DeleteTaskModal";
import { Button } from "@/components/ui/button";
import { Paths } from "@/consts/consts";
import { PRIORITY_LABEL, STATUS_LABEL } from "@/consts/task";
import { markdownComponents } from "@/lib/markdownComponents";
import { markdownRemarkPlugins } from "@/lib/markdownPlugins";
import type { TaskDetail as TaskDetailType } from "@/types/taskTypes";

interface Props {
  task: TaskDetailType;
}

export const TaskDetail = ({ task }: Props) => {
  const [isDeleteTaskModalOpen, setIsDeleteTaskModalOpen] = useState(false);
  const router = useRouter();

  return (
    <>
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold">{task.name}</h1>
        <div className="flex gap-4 items-center">
          <Button
            onClick={() => setIsDeleteTaskModalOpen(true)}
            variant="destructive"
            className="px-4 py-2 h-fit"
          >
            <TbTrash />
            削除
          </Button>
          <Button asChild className="px-4 py-2 h-fit">
            <Link href={Paths.TASK_EDIT.replace(":id", task.id.toString())}>
              <BsPencil />
              編集
            </Link>
          </Button>
        </div>
      </div>
      <div className="flex gap-4 w-full">
        <div className="border rounded-lg p-4 flex flex-col gap-4 min-h-50 w-[70%]">
          <div className="flex flex-col gap-2">
            <div className="min-w-[150px] font-bold">説明</div>
            <Markdown
              components={markdownComponents}
              remarkPlugins={markdownRemarkPlugins}
            >
              {task.description}
            </Markdown>
          </div>
        </div>
        <div className="border rounded-lg p-4 flex flex-col gap-2 w-[30%]">
          <h3 className="text-md font-bold">タスク情報</h3>
          <div className="flex flex-col gap-2">
            <div className="flex items-center">
              <div className="min-w-[120px]">ステータス</div>
              <div>
                {task.statusType ? STATUS_LABEL[task.statusType] : "未設定"}
              </div>
            </div>
            <div className="flex items-center">
              <div className="min-w-[120px]">優先度</div>
              <div>
                {task.priorityType
                  ? PRIORITY_LABEL[task.priorityType]
                  : "未設定"}
              </div>
            </div>
            <div className="flex items-center">
              <div className="min-w-[120px]">作成者</div>
              <div>{task.createdBy}</div>
            </div>
            <div className="flex items-center">
              <div className="min-w-[120px]">期日</div>
              <div>
                {task.dueDate
                  ? new Date(task.dueDate).toLocaleDateString("ja")
                  : "未設定"}
              </div>
            </div>
            <div className="flex items-center">
              <div className="min-w-[120px]">作成日</div>
              <div>{dayjs(task.createdAt).format("YYYY年MM月DD日 HH:mm")}</div>
            </div>
            <div className="flex items-center">
              <div className="min-w-[120px]">更新日</div>
              <div>{dayjs(task.updatedAt).format("YYYY年MM月DD日 HH:mm")}</div>
            </div>
          </div>
        </div>
        <DeleteTaskModal
          task={task}
          opened={isDeleteTaskModalOpen}
          onOpenChange={setIsDeleteTaskModalOpen}
          onDelete={() => router.push(Paths.DASH_BOARD)}
        />
      </div>
    </>
  );
};
