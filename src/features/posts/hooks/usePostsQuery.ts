import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { getPost, getPosts } from "../../../api/posts";

export const useFetchPosts = (boardId: number, page: number) => {
  return useQuery(["boards", boardId, "posts"], () => getPosts(boardId, page));
};

export const useFetchInfintePosts = (boardId: number) => {
  return useInfiniteQuery(
    ["boards", boardId, "posts"],
    ({ pageParam = 1 }) => getPosts(boardId, pageParam),
    {
      getNextPageParam: (_lastPage, pages) => pages.length + 1,
    }
  );
};

export const useFetchPost = (boardId: number, postId: number) => {
  return useQuery(["boards", boardId, "posts", postId], () =>
    getPost(boardId, postId)
  );
};
