export interface IPost {
  title: string;
  body: string;
  userId: number;
  id: number;
}

export interface IComment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}
