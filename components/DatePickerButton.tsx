"use client";

import { format } from "date-fns";
import { ja } from "date-fns/locale";
import { Calendar as CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface Props {
  onSelect: (date: Date | undefined) => void;
  selectedDate?: Date;
  className?: string | undefined;
}

/**
 * 日付選択用ボタン
 *
 * @param onSelect - 日付選択時の処理
 * @param selectedDate - 選択された日付
 * @param className - 日付選択ボタンのクラスネーム
 * @returns
 */
export function DatePickerButton({ onSelect, selectedDate, className }: Props) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          data-empty={!selectedDate}
          className={`justify-start text-left font-normal data-[empty=true]:text-muted-foreground ${className}`}
        >
          <CalendarIcon />
          {selectedDate ? (
            format(selectedDate, "yyyy/MM/dd")
          ) : (
            <span>日付を選択</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-fit h-80">
        <Calendar
          mode="single"
          selected={selectedDate}
          onSelect={(v) => onSelect(v)}
          locale={ja}
        />
      </PopoverContent>
    </Popover>
  );
}
