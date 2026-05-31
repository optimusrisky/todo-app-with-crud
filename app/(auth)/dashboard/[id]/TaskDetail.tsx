import dayjs from "dayjs";
import Markdown from "react-markdown";
import { PRIORITY_LABEL, STATUS_LABEL } from "@/consts/task";
import { markdownComponents } from "@/lib/markdownComponents";
import { markdownRemarkPlugins } from "@/lib/markdownPlugins";
import type { TaskDetail as TaskDetailType } from "@/types/taskTypes";

interface Props {
  task: TaskDetailType;
}

export const TaskDetail = ({ task }: Props) => {
  return (
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
              {task.priorityType ? PRIORITY_LABEL[task.priorityType] : "未設定"}
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
    </div>
  );
};
