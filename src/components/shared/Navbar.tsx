import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import assets from "@/assets";
import { useAppSelector } from "@/redux/hooks";
import NavbarDropdown from "../modal/NavbarDropdown";
import Search from "./Search";

const Navbar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { token } = useAppSelector((state) => state.auth);
  return (
    <div className="bg-[#2b2d42] ">
      <header className="container flex items-center justify-between  py-6">
        <div className="flex items-center justify-center gap-10">
          <Link to="/">
            <img className="h-7" src={assets.logo} alt="" />
          </Link>
        </div>

        {pathname === "/meeting-rooms" ? (
          <Search />
        ) : (
          <div className="sm:flex items-center gap-4 hidden sm:block]">
            <NavLink
              className={({ isActive }) =>
                `text-white transition-colors duration-75 font-medium  text-lg ${
                  isActive ? "font-semibold text-rose-600" : ``
                }`
              }
              to="/"
            >
              Home
            </NavLink>{" "}
            <NavLink
              className={({ isActive }) =>
                `text-white transition-colors duration-75 font-medium  text-lg ${
                  isActive ? "font-semibold text-rose-600" : ``
                }`
              }
              to="/meeting-rooms"
            >
              Meeting Rooms
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `text-white transition-colors duration-75 font-medium  text-lg ${
                  isActive ? "font-semibold text-rose-600" : ``
                }`
              }
              to="/about-us"
            >
              About Us
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `text-white transition-colors duration-75 font-medium  text-lg ${
                  isActive ? "font-semibold text-rose-600" : ``
                }`
              }
              to="contact-us"
            >
              Contact Us
            </NavLink>
          </div>
        )}

        {token ? (
          <div className="relative group">
            <img className="h-10 cursor-pointer" src={assets.user} alt="" />
            <NavbarDropdown />
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <button
              onClick={() => navigate("/register")}
              className="bg-white px-3 py-2.5 rounded-sm text-primary font-semibold"
            >
              Register
            </button>
            <button
              onClick={() => navigate("/login")}
              className="bg-white px-3 py-2.5 rounded-sm text-primary font-semibold"
            >
              Sign In
            </button>
          </div>
        )}
      </header>
    </div>
  );
};

export default Navbar;
