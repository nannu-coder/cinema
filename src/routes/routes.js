import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import Details from "../pages/Details/Details";
import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "details/:id",
        element: <Details />,
      },
    ],
  },
]);

export default router;
