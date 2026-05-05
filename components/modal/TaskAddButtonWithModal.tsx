"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { TbPlus } from "react-icons/tb";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { DatePickerButton } from "../ui/date-picker";
import { Field, FieldGroup } from "../ui/field";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { NativeSelect, NativeSelectOption } from "../ui/native-select";

/**
 * タスク追加ボタン+モーダル
 *
 * @remarks
 * - 入力した内容でタスク情報を登録できる
 */
export const TaskAddButtonWithModal = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const handleSubmit = () => {
    setOpen(false);
    router.refresh();
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="px-4 py-2 h-fit cursor-pointer">
          <TbPlus />
          Add
        </Button>
      </DialogTrigger>
      <DialogOverlay className="supports-backdrop-filter:backdrop-blur-none" />
      <DialogContent className="gap-6">
        <DialogHeader>
          <DialogTitle>Add New Task</DialogTitle>
        </DialogHeader>
        <FieldGroup>
          <Field>
            <Label htmlFor="name" aria-required>
              タスク名
            </Label>
            <Input id="name" placeholder="タスク名を入力してください" />
          </Field>
          <Field>
            <Label htmlFor="description">説明</Label>
            <Input id="description" placeholder="説明を入力してください" />
          </Field>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Field>
              <Label htmlFor="priorityType">優先度</Label>
              <NativeSelect id="priorityType">
                <NativeSelectOption value="">優先度を選択</NativeSelectOption>
                <NativeSelectOption value="low">低</NativeSelectOption>
                <NativeSelectOption value="medium">中</NativeSelectOption>
                <NativeSelectOption value="high">高</NativeSelectOption>
              </NativeSelect>
            </Field>
            <Field>
              <Label htmlFor="dueDate">期日</Label>
              <DatePickerButton />
            </Field>
          </div>
        </FieldGroup>
        <DialogFooter className="sm:justify-between">
          <DialogClose asChild>
            <Button variant="outline" className="cursor-pointer">
              Cancel
            </Button>
          </DialogClose>
          <Button onClick={handleSubmit} className="cursor-pointer">
            Create Task
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
