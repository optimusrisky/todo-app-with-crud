"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import { DatePickerButton } from "@/components/DatePickerButton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  NativeSelect,
  NativeSelectOption,
} from "@/components/ui/native-select";
import { Textarea } from "@/components/ui/textarea";
import { Paths } from "@/consts/consts";
import { PRIORITY_LABEL, STATUS_LABEL } from "@/consts/task";

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
    <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col gap-4">
      <div className="flex gap-4 w-full">
        <div className="border rounded-lg p-4 flex flex-col gap-4 min-h-50 w-[70%] flex-1">
          <div className="flex flex-col gap-2">
            <div className="min-w-[150px] font-bold">タスク名</div>
            <Input id="name" placeholder="タスク名を入力してください" />
          </div>
          <div className="flex flex-col gap-2 flex-1 min-h-0">
            <div className="min-w-[150px] font-bold">説明</div>
            <Textarea
              id="description"
              placeholder="説明を入力してください"
              className="field-sizing-fixed flex-1 min-h-0 h-full resize-none"
            />
          </div>
        </div>
        <div className="border rounded-lg p-4 flex flex-col gap-2 w-[30%]">
          <h3 className="text-md font-bold">タスク情報</h3>
          <div className="flex flex-col gap-2">
            <div className="flex items-center">
              <div className="min-w-[120px]">ステータス</div>
              <NativeSelect id="statusType" className="w-full">
                <NativeSelectOption value="">未設定</NativeSelectOption>
                {Object.entries(STATUS_LABEL).map(([value, label]) => (
                  <NativeSelectOption key={value} value={value}>
                    {label}
                  </NativeSelectOption>
                ))}
              </NativeSelect>
            </div>
            <div className="flex items-center">
              <div className="min-w-[120px]">優先度</div>
              <NativeSelect id="priorityType" className="w-full">
                <NativeSelectOption value="">未設定</NativeSelectOption>
                {Object.entries(PRIORITY_LABEL).map(([value, label]) => (
                  <NativeSelectOption key={value} value={value}>
                    {label}
                  </NativeSelectOption>
                ))}
              </NativeSelect>
            </div>
            <div className="flex items-center">
              <div className="min-w-[120px]">作成者</div>
              <Input
                id="createdBy"
                placeholder="作成者を入力してください"
                className="w-full"
              />
            </div>
            <div className="flex items-center">
              <div className="min-w-[120px]">期日</div>
              <DatePickerButton
                onSelect={handleSelectDate}
                selectedDate={date}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <Button
          asChild
          variant="outline"
          type="button"
          className="w-50 py-2 h-fit"
        >
          <Link href={Paths.DASH_BOARD}>一覧に戻る</Link>
        </Button>
        <Button type="submit" className="w-50 py-2 h-fit">
          作成
        </Button>
      </div>
    </form>
  );
};
