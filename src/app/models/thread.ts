export interface Reply {
  id: string;
  body: string;
  postnum: number;
  poster?: string;
}

export interface Thread {
  id: number | string;
  title: string;
  postnum: number;
  body: string;
  replies?: Reply[];
  poster?: string;
}



export interface Topic {
  id: number | string;
  title: string;
  threads?: Thread[];
}
