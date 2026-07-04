"use client";

import { useState } from "react";
import ReactMarkdown from "react-markdown";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { markdownComponents } from "@/lib/markdownComponents";
import { markdownRemarkPlugins } from "@/lib/markdownPlugins";

interface Props {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
}

export const MarkdownEditor = ({
  value = "",
  onChange,
  placeholder,
}: Props) => {
  const [tab, setTab] = useState<"edit" | "preview">("edit");

  return (
    <Tabs
      value={tab}
      onValueChange={(v) => setTab(v as "edit" | "preview")}
      className="flex flex-col flex-1 h-full"
    >
      <TabsList variant="line" className="self-start mb-1">
        <TabsTrigger value="edit">編集</TabsTrigger>
        <TabsTrigger value="preview">プレビュー</TabsTrigger>
      </TabsList>
      <TabsContent value="edit" className="flex flex-col flex-1 mt-0">
        <Textarea
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          placeholder={placeholder}
          className="flex-1 h-full resize-none"
        />
      </TabsContent>
      <TabsContent value="preview" className="mt-0">
        <div className="min-h-32 rounded-md border p-3">
          {value ? (
            <ReactMarkdown
              components={markdownComponents}
              remarkPlugins={markdownRemarkPlugins}
            >
              {value}
            </ReactMarkdown>
          ) : (
            <p className="text-sm text-muted-foreground">
              プレビューするコンテンツがありません
            </p>
          )}
        </div>
      </TabsContent>
    </Tabs>
  );
};
