import { createBrowserRouter } from "react-router-dom";
import Main from "../../../layout/Main/Main";
import ErrorPage from "../../ErrorPage/ErrorPage";
import LandingPage from "../../LandingPage/LandingPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <LandingPage></LandingPage>,
      },
      {
        path: "/home",
        element: <LandingPage></LandingPage>,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage> </ErrorPage>,
  },
]);
export default router;
