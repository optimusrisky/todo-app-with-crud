import { Badge } from "@/components/ui/badge";
import { PRIORITY_LABEL } from "@/consts/task";
import type { Task } from "@/types/taskTypes";

type PriorityType = NonNullable<Task["priorityType"]>;

interface Props {
  priorityType: PriorityType;
}

/**
 * タスクの優先度バッジ
 * @param priorityType タスクの優先度
 */
export const PriorityTypeBadge = ({ priorityType }: Props) => {
  const getBgColor = () => {
    switch (priorityType) {
      case "high":
        return "bg-priority-high";
      case "medium":
        return "bg-priority-medium";
      case "low":
        return "bg-priority-low";
      default:
        break;
    }
  };

  if (!priorityType) return null;

  return (
    <Badge
      className={`${getBgColor()} h-fit py-1 px-2 w-20 rounded-sm text-white font-bold`}
    >
      優先度：{PRIORITY_LABEL[priorityType]}
    </Badge>
  );
};
