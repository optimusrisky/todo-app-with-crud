import { FiAlertTriangle } from "react-icons/fi";
import { TbTrash } from "react-icons/tb";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
} from "@/components/ui/dialog";

interface Props {
  task: {
    id: number;
    name: string;
  };
  opened: boolean;
  onOpenChange: (open: boolean) => void;
  onDelete: () => void;
}

export const DeleteTaskModal = ({
  task,
  opened,
  onOpenChange,
  onDelete,
}: Props) => {
  const handleDelete = () => {
    console.log(`taskId: ${task.id}`);
    toast.success("タスクを削除しました");
    onDelete();
    onOpenChange(false);
  };

  return (
    <Dialog open={opened} onOpenChange={onOpenChange}>
      <DialogPortal>
        <DialogOverlay />
        <DialogContent>
          <DialogTitle hidden />
          <DialogDescription hidden />
          <div className="flex flex-col items-center gap-4">
            <div className="rounded-full bg-destructive/10 text-destructive size-12 flex items-center justify-center">
              <FiAlertTriangle className="text-2xl" />
            </div>
            <span className="text-lg font-bold">
              このタスクを削除しますか？
            </span>
            <div className="flex flex-col items-center text-xs">
              <span className="text-muted-foreground">
                {`「${task.name}」を削除すると、`}
              </span>
              <span className="text-muted-foreground">
                関連するサブタスクやコメントもすべて削除されます。
              </span>
              <span className="text-muted-foreground">
                この操作は取り消せません。
              </span>
            </div>
            <DialogFooter className="w-full gap-4">
              <DialogClose asChild>
                <Button className="grow" variant="outline">
                  キャンセル
                </Button>
              </DialogClose>
              <Button
                className="grow"
                variant="destructive"
                onClick={handleDelete}
              >
                <TbTrash />
                削除
              </Button>
            </DialogFooter>
          </div>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
};
