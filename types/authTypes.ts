/** ログインユーザー */
export interface LoginUser {
  /** ID(一意) */
  id: number;
  /** ユーザーID */
  userId: string;
  /** ユーザー名 */
  name: string;
  /** メールアドレス */
  email: string;
}
