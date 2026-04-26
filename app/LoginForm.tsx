"use client";

import { useRouter } from "next/navigation";
import type { SubmitEvent } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardTitle } from "@/components/ui/card";
import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Paths } from "@/consts/consts";

export const LoginForm = () => {
  const router = useRouter();

  const handleLogin = (e: SubmitEvent) => {
    e.preventDefault();
    router.push(Paths.DASH_BOARD);
  };

  return (
    <Card className="flex flex-col gap-8 p-8 border-2 rounded-xl min-w-sm">
      <CardTitle className="font-bold self-center">ログイン</CardTitle>
      <form onSubmit={handleLogin}>
        <FieldSet>
          <FieldGroup className="gap-4">
            <Field>
              <FieldLabel htmlFor="loginId" className="font-bold">
                ログインID
              </FieldLabel>
              <Input
                type="text"
                name="loginId"
                id="loginId"
                placeholder="ログインIDを入力してください"
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="password" className="font-bold">
                パスワード
              </FieldLabel>
              <Input
                id="password"
                type="password"
                placeholder="パスワードを入力してください"
              />
            </Field>
            <Button type="submit" className="p-2 min-h-fit">
              ログイン
            </Button>
          </FieldGroup>
        </FieldSet>
      </form>
    </Card>
  );
};
