/** タスク */
export interface Task {
  /** タスクID (連番) */
  id: number;
  /**タスク名 */
  name: string;
  priorityType?: "low" | "medium" | "high";
  dueDate?: Date;
  isCompleted: boolean;
  createdAt: Date;
  updatedAt: Date;
}
