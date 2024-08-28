import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import ScrollToTopButton from "../shared/ScrollToTopButton";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <ScrollToTopButton />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
