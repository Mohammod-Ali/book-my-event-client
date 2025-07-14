import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Signin from "../Pages/Signin/Signin";
import Registration from "../Pages/Registration/Registration";
import Register from "../Pages/Register/Register";
import AddEvent from "../Pages/AddEvent/AddEvent";
import Profile from "../Pages/Profile/Profile";
import MyBookings from "../Pages/MyBookings/MyBookings";
import EventDetails from "../Shared/EventDetails/EventDetails";
import Events from "../Pages/Events/Events";
import PrivateRoute from "./PrivateRoute";

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
        path: '/events',
        element: <Events></Events>
      },
      {
        path: '/myBookings',
        element: <PrivateRoute><MyBookings></MyBookings></PrivateRoute>
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
        path: "/registration/:id",
        element: <PrivateRoute><Registration></Registration></PrivateRoute>
      },
      {
        path: '/profile',
        element: <PrivateRoute><Profile></Profile></PrivateRoute>
      },
      {
        path: '/events/:id',
        element: <EventDetails></EventDetails>
      }
    ],
  },
]);
