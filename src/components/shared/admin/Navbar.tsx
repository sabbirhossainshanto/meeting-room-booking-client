import { Link, NavLink } from "react-router-dom";
import assets from "@/assets";
import NavbarDropDown from "./NavbarDropDown";

const Navbar = () => {
  return (
    <div className=" bg-[#2b2d42] ">
 
        <header className="flex items-center justify-between  py-6 container">
          <div className="flex items-center justify-center gap-10">
            <Link to="/">
              <img className="h-7" src={assets.logo} alt="" />
            </Link>
          </div>

          <div className="lg:flex items-center gap-4 hidden">
            <NavLink
              className={({ isActive }) =>
                `text-white transition-colors duration-75 font-medium  text-lg ${
                  isActive ? "font-semibold" : ``
                }`
              }
              to="/"
            >
              Home
            </NavLink>{" "}
            <NavLink
              className={({ isActive }) =>
                `text-white transition-colors duration-75 font-medium  text-lg ${
                  isActive ? "font-semibold" : ``
                }`
              }
              to="/dashboard/room-management"
            >
              Room Management
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `text-white transition-colors duration-75 font-medium  text-lg ${
                  isActive ? "font-semibold" : ``
                }`
              }
              to="/dashboard/slot-management"
            >
              Slot Management
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `text-white transition-colors duration-75 font-medium  text-lg ${
                  isActive ? "font-semibold" : ``
                }`
              }
              to="/dashboard/booking-management"
            >
              Booking Management
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `text-white transition-colors duration-75 font-medium  text-lg ${
                  isActive ? "font-semibold" : ``
                }`
              }
              to="/dashboard/user-management"
            >
              User Management
            </NavLink>
          </div>

          <div className="relative group">
            <img className="h-10 cursor-pointer" src={assets.user} alt="" />
            <NavbarDropDown />
          </div>
        </header>
   
    </div>
  );
};

export default Navbar;
