import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Placeholder from "../../../components/Placeholder";
import { useFetchInfintePosts } from "../../posts/hooks/usePostsQuery";
import { useFetchBoard } from "../hooks/useBoardsQuery";

export default function BoardPage() {
  const params = useParams<{ boardId: string }>();
  const boardId = Number.parseInt(params.boardId ?? "");

  const {
    data: board,
    isLoading: isBoardLoading,
    isSuccess: isBoardSuccess,
  } = useFetchBoard(boardId);
  const {
    data: posts,
    isLoading: isPostsLoading,
    isSuccess: isPostsSuccess,
    isFetching: isPostsFetching,
    isFetchingNextPage: isPostsFetchingNextPage,
    fetchNextPage,
  } = useFetchInfintePosts(boardId);

  const handleScroll: (ev: Event) => void = (event) => {
    const target = event.target as Document;
    const body = target.body;
    const isOnBottom =
      body.scrollHeight - window.scrollY === window.innerHeight;

    if (isOnBottom && !isPostsFetchingNextPage) {
      fetchNextPage();
    }
  };
  useEffect(() => {
    document.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="flex flex-row bg-neutral-600 shadow-md items-center h-16">
        <div className="pl-8 font-bold text-xl">
          <Link to="/boards">TutoBoard</Link>
        </div>
      </div>
      <main className="place-items-center">
        <div className="flex flex-col p-16 gap-8">
          <div className="flex flex-col gap-4">
            {isBoardLoading && (
              <span className="loading loading-spinner w-90 h-90"></span>
            )}{" "}
            {isBoardSuccess && (
              <>
                <h1 className="font-extrabold text-4xl">{board.title}</h1>
                <h2>{board.description}</h2>
              </>
            )}
          </div>
          <div className="flex flex-col gap-4">
            {isPostsLoading && (
              <span className="loading loading-spinner w-90 h-90"></span>
            )}
            {isPostsSuccess &&
              posts.pages.map((page) =>
                page.map((post) => (
                  <div
                    key={post.id}
                    className="flex flex-row rounded-xl p-4 justify-between bg-slate-100 text-slate-900"
                  >
                    <div>
                      <div className="font-bold text-2xl">{post.title}</div>
                      <div className="font-bold text-lg"></div>
                    </div>
                    <div className="flex flex-col items-end gap-4">
                      <Placeholder
                        style={{
                          borderRadius: "9999px",
                          height: "64px",
                          width: "64px",
                        }}
                      />
                      <div className="font-light">by {post.arthor}</div>
                    </div>
                  </div>
                ))
              )}
          </div>
          {isPostsFetching && isPostsFetchingNextPage && (
            <span className="loading loading-spinner w-90 h-90"></span>
          )}
        </div>
      </main>
    </div>
  );
}
