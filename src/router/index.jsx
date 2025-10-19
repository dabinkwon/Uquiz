import Home from "../pages/Home";
import Notfound from "../pages/Notfound";
import Quiz from "../pages/Quiz";
import Results from "../pages/Results";

export const RouteConfig = [
  { index: true, element: <Home /> },
  { path: "/quiz/:nickname", element: <Quiz /> },
  { path: "/results/:nickname", element: <Results /> },
  { path: "*", element: <Notfound /> },
];
