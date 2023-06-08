import { Board } from "../features/boards/model/board";
import fetcher from "./utils";

export const getBoard = (id: number) => fetcher.get<Board>(`/boards/${id}`);
export const getBoards = () => fetcher.get<Board[]>("/boards");
