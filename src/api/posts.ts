import { Post } from "../features/posts/model/post";
import fetcher from "./utils";

export const getPost = (boardId: number, postId: number) =>
  fetcher.get<Post>(`/boards/${boardId}/posts/${postId}`);
export const getPosts = (boardId: number, page?: number) =>
  fetcher.get<Post[]>(
    `/boards/${boardId}/posts${page === undefined ? "" : `?_page=${page}`}`
  );
