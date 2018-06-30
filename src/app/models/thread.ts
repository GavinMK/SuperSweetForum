export interface Reply {
  id: string;
  body: string;
  poster?: string;
}

export interface Thread {
  id: number;
  parentThreadId?: number;
  title?: string;
  body: string;
  isMainThread: boolean;
  mostRecent: number;
  replies?: number[];
  poster?: string;
}



export interface Topic {
  id: number | string;
  title: string;
  threads?: Thread[];
}
