import z from "zod";
import { Errors } from "@/consts/errorMessages";

export const taskSchema = z.object({
  /** タスク名 */
  name: z.string().min(1, { error: Errors.REQUIRED }),
  /** 説明 */
  description: z.string().optional(),
  /** ステータス */
  statusType: z.enum(["", "progress", "completed"]).optional(),
  /** 優先度 */
  priorityType: z.enum(["", "low", "medium", "high"]).optional(),
  /** 期日　 */
  dueDate: z.date().optional(),
});

export type TaskInput = z.infer<typeof taskSchema>;
