"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import { DatePickerButton } from "@/components/DatePickerButton";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldContent,
  FieldError,
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
import { type TaskInput, taskSchema } from "@/schemas/taskSchema";
import type { TaskDetail } from "@/types/taskTypes";

interface Props {
  task: TaskDetail;
}

export const EditTaskForm = ({ task }: Props) => {
  const router = useRouter();

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<TaskInput>({
    resolver: zodResolver(taskSchema),
    defaultValues: {
      name: task.name,
      description: task.description,
      statusType: task.statusType ?? "",
      priorityType: task.priorityType ?? "",
      dueDate: task.dueDate,
    },
  });

  /** タスク更新 */
  const handleUpdate = (input: TaskInput) => {
    console.log(input);
    toast.success("タスクを更新しました");
    router.push(Paths.DASH_BOARD);
  };

  return (
    <form onSubmit={handleSubmit(handleUpdate)} className="flex flex-col gap-4">
      <FieldSet className="flex flex-col gap-4 border-0 p-0">
        <div className="flex gap-4 w-full">
          <div className="border rounded-lg p-4 flex flex-col gap-4 min-h-50 w-[70%] flex-1">
            <FieldGroup className="gap-4 flex flex-col flex-1">
              <Field data-invalid={!!errors.name}>
                <FieldLabel htmlFor="name" className="font-bold">
                  タスク名
                </FieldLabel>
                <FieldContent>
                  <Input
                    id="name"
                    placeholder="タスク名を入力してください"
                    aria-invalid={!!errors.name}
                    {...register("name")}
                  />
                </FieldContent>
                <FieldError errors={[errors.name]} />
              </Field>
              <Field className="h-full">
                <FieldLabel htmlFor="description" className="font-bold">
                  説明
                </FieldLabel>
                <FieldContent>
                  <Textarea
                    id="description"
                    placeholder="説明を入力してください"
                    className="field-sizing-fixed flex-1 h-full resize-none"
                    {...register("description")}
                  />
                </FieldContent>
              </Field>
            </FieldGroup>
          </div>
          <div className="border rounded-lg p-4 flex flex-col gap-4 w-[30%]">
            <h3 className="text-md font-bold">タスク情報</h3>
            <FieldGroup className="gap-4">
              <Field orientation="horizontal" className="items-center gap-2">
                <FieldLabel htmlFor="statusType" className="max-w-[120px]">
                  ステータス
                </FieldLabel>
                <FieldContent>
                  <NativeSelect
                    id="statusType"
                    className="w-full"
                    {...register("statusType")}
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
                <FieldContent>
                  <NativeSelect
                    id="priorityType"
                    className="w-full"
                    {...register("priorityType")}
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
                <FieldContent>
                  <div>{task.createdBy}</div>
                </FieldContent>
              </Field>
              <Field orientation="horizontal" className="items-center gap-2">
                <FieldLabel htmlFor="dueDate" className="max-w-[120px]">
                  期日
                </FieldLabel>
                <FieldContent>
                  <Controller
                    name="dueDate"
                    control={control}
                    render={({ field }) => (
                      <DatePickerButton
                        onSelect={field.onChange}
                        selectedDate={field.value}
                      />
                    )}
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
          <Link href={Paths.TASK_DETAIL.replace(":id", task.id.toString())}>
            詳細に戻る
          </Link>
        </Button>
        <Button type="submit" className="w-50 py-2 h-fit">
          更新
        </Button>
      </div>
    </form>
  );
};
