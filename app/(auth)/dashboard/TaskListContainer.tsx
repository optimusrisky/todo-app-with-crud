"use client";

import Link from "next/link";
import { useState } from "react";
import { TbPlus } from "react-icons/tb";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Paths } from "@/consts/consts";
import { cn } from "@/lib/utils";
import type { Task } from "@/types/taskTypes";
import { TaskList } from "./TaskList";

interface Props {
  tasks: Task[];
}

export const TaskListContainer = ({ tasks }: Props) => {
  const [selectedTab, setSelectedTab] = useState("all");

  const getTabClassName = () => {
    return cn(
      "cursor-pointer",
      "rounded-t-sm",
      "rounded-b-none",
      "h-fit",
      "py-1",
      "px-4",
      "group-data-[variant=line]/tabs-list:data-active:bg-primary/10 after:bg-primary",
      "dark:group-data-[variant=line]/tabs-list:data-active:bg-primary/30 after:bg-primary",
    );
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <Tabs
          defaultValue={selectedTab}
          onValueChange={(v) => setSelectedTab(v)}
          className="w-full"
        >
          <TabsList variant="line">
            <TabsTrigger value="all" className={getTabClassName()}>
              All Tasks
            </TabsTrigger>
            <TabsTrigger value="inProgress" className={getTabClassName()}>
              In Progress
            </TabsTrigger>
            <TabsTrigger value="completed" className={getTabClassName()}>
              Completed
            </TabsTrigger>
          </TabsList>
        </Tabs>
        <Button asChild className="px-4 py-2 h-fit">
          <Link href={Paths.TASK_CREATE}>
            <TbPlus />
            Add
          </Link>
        </Button>
      </div>
      <TaskList tasks={tasks} />
    </div>
  );
};
