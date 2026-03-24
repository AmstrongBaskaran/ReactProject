import { createBrowserRouter } from "react-router";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import Home from "../Pages/Home/Home";
import BrowseVenues from "../Pages/BrowseVenues/BrowseVenues";
import cardView from "../Pages/Cardview/CardView";
import CardView from "../Pages/Cardview/CardView";
import Footer from "../Components/Footer/Footer";
import EventCreate from "../Pages/EventCreate/EventCreate";
import Dashboard from "../Pages/Dashboard/Dashboard";

const router = createBrowserRouter([
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "/Signup",
    element: <Signup />,
  },
  {
    path: "/BrowseVenues",
    element: <BrowseVenues />,
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/CardView",
    element: <CardView />,
  },
  {
    path: "/EventCreate",
    element: <EventCreate />,
  },
   {
    path: "/Dashboard",
    element: <Dashboard/>,
  }
]);

export default router;
