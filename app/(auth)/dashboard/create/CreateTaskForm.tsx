"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import { DatePickerButton } from "@/components/DatePickerButton";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldContent,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/components/ui/field";
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
      <FieldSet className="flex flex-col gap-4 border-0 p-0">
        <div className="flex gap-4 w-full">
          <div className="border rounded-lg p-4 flex flex-col gap-4 min-h-50 w-[70%] flex-1">
            <FieldGroup className="gap-4 flex flex-col flex-1 min-h-0">
              <Field>
                <FieldLabel htmlFor="name" className="font-bold">
                  タスク名
                </FieldLabel>
                <FieldContent>
                  <Input
                    id="name"
                    name="name"
                    placeholder="タスク名を入力してください"
                  />
                </FieldContent>
              </Field>
              <Field className="flex-1 min-h-0">
                <FieldLabel htmlFor="description" className="font-bold">
                  説明
                </FieldLabel>
                <FieldContent className="flex-1 min-h-0">
                  <Textarea
                    id="description"
                    name="description"
                    placeholder="説明を入力してください"
                    className="field-sizing-fixed flex-1 min-h-0 h-full resize-none"
                  />
                </FieldContent>
              </Field>
            </FieldGroup>
          </div>
          <div className="border rounded-lg p-4 flex flex-col gap-2 w-[30%]">
            <h3 className="text-md font-bold">タスク情報</h3>
            <FieldGroup className="gap-2">
              <Field orientation="horizontal" className="items-center gap-2">
                <FieldLabel htmlFor="statusType" className="max-w-[120px]">
                  ステータス
                </FieldLabel>
                <FieldContent className="min-w-0 flex-1">
                  <NativeSelect
                    id="statusType"
                    name="statusType"
                    className="w-full"
                  >
                    <NativeSelectOption value="">未設定</NativeSelectOption>
                    {Object.entries(STATUS_LABEL).map(([value, label]) => (
                      <NativeSelectOption key={value} value={value}>
                        {label}
                      </NativeSelectOption>
                    ))}
                  </NativeSelect>
                </FieldContent>
              </Field>
              <Field orientation="horizontal" className="items-center gap-2">
                <FieldLabel htmlFor="priorityType" className="max-w-[120px]">
                  優先度
                </FieldLabel>
                <FieldContent className="min-w-0 flex-1">
                  <NativeSelect
                    id="priorityType"
                    name="priorityType"
                    className="w-full"
                  >
                    <NativeSelectOption value="">未設定</NativeSelectOption>
                    {Object.entries(PRIORITY_LABEL).map(([value, label]) => (
                      <NativeSelectOption key={value} value={value}>
                        {label}
                      </NativeSelectOption>
                    ))}
                  </NativeSelect>
                </FieldContent>
              </Field>
              <Field orientation="horizontal" className="items-center gap-2">
                <FieldLabel htmlFor="createdBy" className="max-w-[120px]">
                  作成者
                </FieldLabel>
                <FieldContent className="min-w-0 flex-1">
                  <Input
                    id="createdBy"
                    name="createdBy"
                    placeholder="作成者を入力してください"
                    className="w-full"
                  />
                </FieldContent>
              </Field>
              <Field orientation="horizontal" className="items-center gap-2">
                <FieldLabel htmlFor="dueDate" className="max-w-[120px]">
                  期日
                </FieldLabel>
                <FieldContent className="min-w-0 flex-1">
                  <DatePickerButton
                    onSelect={handleSelectDate}
                    selectedDate={date}
                  />
                </FieldContent>
              </Field>
            </FieldGroup>
          </div>
        </div>
      </FieldSet>
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
