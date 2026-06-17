import z from "zod";
import { Errors } from "@/consts/errorMessages";

/** ログインスキーマ */
export const authSchema = z.object({
  loginId: z.string().min(1, { error: Errors.REQUIRED }),
  password: z.string().min(1, { error: Errors.REQUIRED }),
});
/** ログインフォーム 型 */
export type AuthInput = z.infer<typeof authSchema>;
