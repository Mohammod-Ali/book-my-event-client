import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Signin from "../Pages/Signin/Signin";
import Registration from "../Pages/Registration/Registration";
import Register from "../Pages/Register/Register";
import AddEvent from "../Pages/AddEvent/AddEvent";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "/signin",
        element: <Signin></Signin>,
      },
      {
        path: '/addEvent',
        element: <AddEvent></AddEvent>
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },
    ],
  },
]);
