"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import { DatePickerButton } from "@/components/DatePickerButton";
import { Button } from "@/components/ui/button";
import { Field, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  NativeSelect,
  NativeSelectOption,
} from "@/components/ui/native-select";
import { Textarea } from "@/components/ui/textarea";
import { Paths } from "@/consts/consts";

export const CreateTaskForm = () => {
  const [date, setDate] = useState<Date | undefined>();
  const router = useRouter();

  /** 日付選択処理 */
  const handleSelectDate = (selectedDate: Date | undefined) => {
    setDate(selectedDate);
  };

  /** タスク追加 */
  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();
    toast.success("タスクを追加しました");
    router.push(Paths.DASH_BOARD);
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className="border rounded-lg p-4">
        <FieldGroup>
          <Field orientation="horizontal">
            <div className="min-w-[150px]">タスク名</div>
            <Input id="name" placeholder="タスク名を入力してください" />
          </Field>
          <Field orientation="horizontal" className="items-baseline">
            <div className="min-w-[150px]">説明</div>
            <Textarea id="description" placeholder="説明を入力してください" />
          </Field>
          <Field orientation="horizontal">
            <div className="min-w-[150px]">優先度</div>
            <NativeSelect id="priorityType" className="w-75">
              <NativeSelectOption value="">優先度を選択</NativeSelectOption>
              <NativeSelectOption value="low">低</NativeSelectOption>
              <NativeSelectOption value="medium">中</NativeSelectOption>
              <NativeSelectOption value="high">高</NativeSelectOption>
            </NativeSelect>
          </Field>
          <Field orientation="horizontal">
            <div className="min-w-[150px]">期日</div>
            <DatePickerButton
              onSelect={handleSelectDate}
              selectedDate={date}
              className="w-75"
            />
          </Field>
          <div className="flex justify-end">
            <Button type="submit" className="w-50 py-2 h-fit">
              作成
            </Button>
          </div>
        </FieldGroup>
      </div>
    </form>
  );
};
