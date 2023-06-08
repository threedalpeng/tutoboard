import { useQuery } from "@tanstack/react-query";
import { getBoard, getBoards } from "../../../api/boards";

export const useFetchBoards = () => {
  return useQuery(["boards"], getBoards);
};

export const useFetchBoard = (id: number) => {
  return useQuery(["boards", id], () => getBoard(id));
};
