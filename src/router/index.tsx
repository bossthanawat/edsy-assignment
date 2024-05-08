import { MainLayout } from "@/components/layout/main";
import { lazy } from "react";
import { useRoutes } from "react-router-dom";

export default function Router() {
  return useRoutes([
    {
      path: "",
      element: <MainLayout />,
      children: [
        {
          element: <HomePage />,
          index: true,
        },
        {
          path: "/question",
          element: <QuestionPage />,
        },
      ],
    },
  ]);
}

const HomePage = lazy(() => import("../pages/Home"));
const QuestionPage = lazy(() => import("../pages/question/Question"));
