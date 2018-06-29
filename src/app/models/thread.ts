export interface Reply {
  id: string;
  body: string;
}

export interface Thread {
  id: number | string;
  title: string;
  body: string;
  replies: Reply[];
}
