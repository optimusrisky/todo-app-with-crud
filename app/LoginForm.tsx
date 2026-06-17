"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card, CardTitle } from "@/components/ui/card";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Paths } from "@/consts/consts";
import { type AuthInput, authSchema } from "@/schemas/authSchema";

export const LoginForm = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthInput>({
    resolver: zodResolver(authSchema),
    defaultValues: {
      loginId: "",
      password: "",
    },
  });

  /** ログイン処理 */
  const handleLogin = (input: AuthInput) => {
    console.log(input);
    router.push(Paths.DASH_BOARD);
    toast.success("ログインしました");
  };

  return (
    <Card className="flex flex-col gap-8 p-8 border-2 rounded-xl min-w-sm">
      <CardTitle className="font-bold self-center">ログイン</CardTitle>
      <form onSubmit={handleSubmit(handleLogin)}>
        <FieldSet>
          <FieldGroup className="gap-4">
            <Field data-invalid={!!errors.loginId}>
              <FieldLabel htmlFor="loginId" className="font-bold">
                ログインID
              </FieldLabel>
              <Input
                type="text"
                id="loginId"
                placeholder="ログインIDを入力してください"
                aria-invalid={!!errors.loginId}
                {...register("loginId")}
              />
              <FieldError errors={[errors.loginId]} />
            </Field>
            <Field data-invalid={!!errors.password}>
              <FieldLabel htmlFor="password" className="font-bold">
                パスワード
              </FieldLabel>
              <Input
                id="password"
                type="password"
                placeholder="パスワードを入力してください"
                aria-invalid={!!errors.password}
                {...register("password")}
              />
              <FieldError errors={[errors.password]} />
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
