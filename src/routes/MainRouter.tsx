import { createBrowserRouter, RouterProvider } from "react-router-dom";
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
import ProtectedRoute from "@/components/layout/ProtectedRoute";
import Checkout from "@/pages/Checkout/Checkout";
import AdminLayout from "@/components/layout/AdminLayout";
import { adminRoutes } from "./adminRoutes";
import MyBookings from "@/pages/MyBooking/MyBooking";

const MainRouter = () => {
  const router = createBrowserRouter([
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
          element: (
            <ProtectedRoute role="user">
              <SingleRoom />
            </ProtectedRoute>
          ),
        },
        {
          path: "/booking/:id",
          element: (
            <ProtectedRoute role="user">
              <Checkout />
            </ProtectedRoute>
          ),
        },
        {
          path: "/my-bookings",
          element: (
            <ProtectedRoute role="user">
              <MyBookings />
            </ProtectedRoute>
          ),
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
    {
      path: "/dashboard",
      element: (
        <ProtectedRoute role="admin">
          <AdminLayout />
        </ProtectedRoute>
      ),
      children: adminRoutes,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default MainRouter;
