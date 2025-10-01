import Home from "../pages/Home";
import Quiz from "../pages/Quiz";
import Results from "../pages/Results";

export const RouteConfig = [
  { index: true, element: <Home /> },
  { path: "/quiz/:nickname", element: <Quiz /> },
  { path: "/results/:nickname", element: <Results /> },
];
