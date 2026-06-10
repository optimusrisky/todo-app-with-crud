"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Fragment, useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { TbTrash } from "react-icons/tb";
import { DeleteTaskModal } from "@/components/task/modal/DeleteTaskModal";
import { PriorityTypeBadge } from "@/components/task/PriorityTypeBadge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Paths } from "@/consts/consts";
import type { Task } from "@/types/taskTypes";

interface Props {
  tasks: Task[];
}

/**
 * タスクリスト表示コンポーネント
 * @param tasks タスク一覧
 */
export const TaskList = ({ tasks }: Props) => {
  const [isDeleteTaskModalOpen, setIsDeleteTaskModalOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const router = useRouter();

  const handleDeleteTaskModalOpen = (task: Task) => {
    setIsDeleteTaskModalOpen(true);
    setSelectedTask(task);
  };

  return (
    <FieldGroup className="flex flex-col gap-0">
      {tasks.map((task, index) => (
        <Fragment key={task.id}>
          <Field
            orientation="horizontal"
            className={`border${index === tasks.length - 1 ? "-y" : "-t"} p-4 justify-between`}
          >
            <div className="flex items-center gap-4">
              <Checkbox id={task.id.toString()} name={task.id.toString()} />
              <FieldLabel htmlFor={task.id.toString()}>{task.name}</FieldLabel>
            </div>
            <div className="flex items-center gap-4">
              {task.priorityType && (
                <PriorityTypeBadge priorityType={task.priorityType} />
              )}
              <Button
                onClick={() => handleDeleteTaskModalOpen(task)}
                variant="ghost"
              >
                <TbTrash />
              </Button>
              <Button variant="ghost" className="cursor-pointer">
                <Link
                  href={Paths.TASK_DETAIL.replace(":id", task.id.toString())}
                >
                  <BsThreeDots />
                </Link>
              </Button>
            </div>
          </Field>
          {!!selectedTask && (
            <DeleteTaskModal
              key={selectedTask.id}
              opened={isDeleteTaskModalOpen}
              task={selectedTask}
              onOpenChange={setIsDeleteTaskModalOpen}
              onDelete={() => router.refresh()}
            />
          )}
        </Fragment>
      ))}
    </FieldGroup>
  );
};
