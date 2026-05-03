"use client";

import { BsThreeDots } from "react-icons/bs";
import { PriorityTypeBadge } from "@/components/task/PriorityTypeBadge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import type { Task } from "@/types/taskTypes";

interface Props {
  tasks: Task[];
}

/**
 * タスクリスト表示コンポーネント
 * @param tasks タスク一覧
 */
export const TaskList = ({ tasks }: Props) => {
  return (
    <FieldGroup className="flex flex-col gap-0">
      {tasks.map((task, index) => (
        <Field
          key={task.id}
          orientation="horizontal"
          className={`border${index === tasks.length - 1 ? "-y" : "-t"} p-4 justify-between`}
        >
          <div className="flex items-center gap-4">
            <Checkbox id={task.id.toString()} name={task.id.toString()} />
            <FieldLabel htmlFor={task.id.toString()}>{task.name}</FieldLabel>
          </div>
          <div className="flex items-center gap-4">
            {task.priorityType && task.priorityTypeName && (
              <PriorityTypeBadge priorityType={task.priorityType}>
                {task.priorityTypeName}
              </PriorityTypeBadge>
            )}
            <Button variant="ghost" className="cursor-pointer">
              <BsThreeDots />
            </Button>
          </div>
        </Field>
      ))}
    </FieldGroup>
  );
};
