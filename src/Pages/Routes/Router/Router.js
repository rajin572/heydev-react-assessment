import { createBrowserRouter } from "react-router-dom";
import Main from "../../../layout/Main/Main";
import ErrorPage from "../../ErrorPage/ErrorPage";
import LandingPage from "../../LandingPage/LandingPage";
import UserDetailsPage from "../../UserDetailsPage/UserDetailsPage";
import UsersPage from "../../UsersPage/UsersPage";

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
      {
        path: "/users",
        element: <UsersPage></UsersPage>,
        loader: () => fetch('https://jsonplaceholder.typicode.com/users')
      },
      {
        path:'/users/:id',
        element: <UserDetailsPage></UserDetailsPage>,
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    }
    ],
  },
  {
    path: "*",
    element: <ErrorPage> </ErrorPage>,
  },
]);
export default router;
