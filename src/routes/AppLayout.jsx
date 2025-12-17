import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "../pages/Home";
import main from "../pages/main";
import List2025 from "../pages/list2025";
import List2026 from "../pages/list2026";
import QuestionsPage2025 from "../pages/q2025";
// import QuestionsPage2026 from "../pages/q2026";
import Result from "../pages/result";
// import Thankyou from "../pages/thankyou";

const router = createBrowserRouter([
  { path: "/", Component: Home },
  { path: "/main", Component: main },
  { path: "/list2025", Component: List2025 },
  { path: "/list2026", Component: List2026 },
  { path: "/q2025", Component: QuestionsPage2025 },
  // { path: "/q2026", Component: QuestionsPage2026 },
  { path: "/result", Component: Result },
  // { path: "/thankyou", Component: Thankyou },
]);

export default function AppLayout() {
  return <RouterProvider router={router} />;
}
