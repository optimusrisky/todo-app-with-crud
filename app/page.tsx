import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Todo App | ログイン",
  description: "Todo App | ログイン",
};

export default function Home() {
  return (
    <div className="flex justify-center">
      <div className="p-10 border-2 border-border-base rounded-xl dark:text-white">
        <h1 className="font-bold">ログイン</h1>
        <form>
          <div>
            <label htmlFor="loginId">ログインID</label>
            <input type="text" name="loginId" id="loginId" />
          </div>
        </form>
      </div>
    </div>
  );
}
