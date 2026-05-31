import type { TaskDetail } from "@/types/taskTypes";

/** ステータス名　 (表示用) */
export const STATUS_LABEL = {
  progress: "進行中",
  completed: "完了",
} as const satisfies Record<NonNullable<TaskDetail["statusType"]>, string>;

export const PRIORITY_LABEL = {
  low: "低",
  medium: "中",
  high: "高",
};
