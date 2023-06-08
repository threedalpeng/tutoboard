import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LoginPage from "./features/auth/pages/LoginPage";
import MainPage from "./MainPage";
import BoardsPage from "./features/boards/pages/BoardsPage";
import BoardPage from "./features/boards/pages/BoardPage";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/boards",
    element: <BoardsPage />,
  },
  {
    path: "/boards/:boardId",
    element: <BoardPage />,
  },
]);

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}
