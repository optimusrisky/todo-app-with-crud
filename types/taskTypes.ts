/** タスク */
export interface Task {
  /** タスクID (連番) */
  id: number;
  /**タスク名 */
  name: string;
  /** 優先度タイプ */
  priorityType?: "low" | "medium" | "high";
  /** 期限 */
  dueDate?: Date;
  /** 完了フラグ */
  isCompleted: boolean;
  /** 作成日 */
  createdAt: Date;
  /** 編集日 */
  updatedAt: Date;
}

/** タスク詳細 */
export interface TaskDetail extends Task {
  /** タスク説明 */
  description: string;
  /** ステータス */
  statusType?: "progress" | "completed";
}
