import type { Metadata } from "next";
import { LoginForm } from "./LoginForm";

export const metadata: Metadata = {
  title: "Todo App | ログイン",
  description: "Todo App | ログイン",
};

export default function Home() {
  return (
    <div className="h-full w-full flex justify-center items-center">
      <LoginForm />
    </div>
  );
}
