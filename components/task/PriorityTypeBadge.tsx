import { Badge } from "@/components/ui/badge";
import type { Task } from "@/types/taskTypes";

interface Props {
  priorityType: Task["priorityType"];
  children: React.ReactNode;
}

/**
 * タスクの優先度バッジ
 * @param priorityType タスクの優先度
 * @@param children
 */
export const PriorityTypeBadge = ({ priorityType, children }: Props) => {
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

  return (
    <Badge
      className={`${getBgColor()} h-fit py-1 px-2 w-20 rounded-sm text-white font-bold`}
    >
      優先度：{children}
    </Badge>
  );
};
