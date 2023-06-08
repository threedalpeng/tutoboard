import { Link } from "react-router-dom";
import Placeholder from "../../../components/Placeholder";
import { useFetchBoards } from "../hooks/useBoardsQuery";

export default function BoardsPage() {
  const { data: boards, isLoading, isSuccess } = useFetchBoards();
  return (
    <div>
      <div className="flex flex-row bg-neutral-600 shadow-md items-center h-16">
        <div className="pl-8 font-bold text-xl">
          <Link to="/boards">TutoBoard</Link>
        </div>
      </div>

      {isLoading && <span className="loading loading-spinner"></span>}
      {isSuccess && (
        <div className="flex flex-col gap-8 p-16">
          {boards.map((board) => (
            <div className="overflow-hidden rounded-lg flex flex-row justify-between items-center bg-slate-100 text-slate-900 border-solid border-[1px]">
              <div className="flex flex-row">
                <Placeholder style={{ width: "8rem", alignSelf: "stretch" }} />
                <div className="p-4 pl-8">
                  <h1 className="font-bold text-2xl">{board.title}</h1>
                  <h2 className="">{board.description}</h2>
                </div>
              </div>
              <Link to={`/boards/${board.id}`}>
                <span className="font-extrabold text-4xl pr-4">{">"}</span>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
