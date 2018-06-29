export interface Reply {
  id: string;
  body: string;
  poster?: string;
}

export interface Thread {
  id: number | string;
  title: string;
  body: string;
  replies?: Reply[];
  poster?: string;
}
