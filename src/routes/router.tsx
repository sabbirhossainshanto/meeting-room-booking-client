import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import Login from "@/pages/Login/Login";
import Register from "@/pages/Register/Register";
import NotFound from "@/pages/NotFound/NotFound";
import MeetingRoom from "@/pages/MeetingRoom/MeetingRoom";
import AboutUs from "@/pages/AboutUs/AboutUs";
import ContactUs from "@/pages/ContactUs/ContactUs";
import ScrollToTop from "@/components/shared/ScrollToTop";
import SingleRoom from "@/pages/SingleRoom/SingleRoom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <ScrollToTop />
        <App />
      </>
    ),
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/meeting-rooms",
        element: <MeetingRoom />,
      },
      {
        path: "/meeting-rooms/:id",
        element: <SingleRoom />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);
