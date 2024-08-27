import { logOut } from "@/redux/features/auth/authSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { SiNginxproxymanager } from "react-icons/si";
import { FaCheckToSlot } from "react-icons/fa6";
import { FaBookmark, FaUserCircle } from "react-icons/fa";

const NavbarDropDown = () => {
  const dispatch = useDispatch();
  return (
    <div className="absolute top-full right-[1px] bg-white z-20 rounded-b-[3px] py-5 px-[15px] w-[205px] shadow-sm mt-3.5 group-hover:mt-[5px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
      <div>
        <p className="text-sm leading-[18px] font-medium mb-4  text-center">
          Welcome to Room Booking
        </p>
      </div>
      <div>
        <Link
          to="/dashboard"
          className="flex items-center relative w-full mt-[7px] text-[15px] pl-8 text-[#464545] hover:text-primary transition duration-200"
        >
          <svg
            className="absolute left-0 top-[1px]"
            width="21"
            height="21"
            viewBox="0 0 32 32"
          >
            <path
              fill="currentColor"
              d="M12 5c-1.645 0-3 1.355-3 3c0 .353.073.684.188 1H4v6h1v13h22V15h1V9h-5.188c.115-.316.188-.647.188-1c0-1.645-1.355-3-3-3c-1.75 0-2.94 1.33-3.72 2.438c-.103.148-.188.292-.28.437c-.092-.145-.177-.29-.28-.438C14.94 6.33 13.75 5 12 5zm0 2c.626 0 1.436.67 2.063 1.563c.152.217.13.23.25.437H12c-.565 0-1-.435-1-1s.435-1 1-1zm8 0c.565 0 1 .435 1 1s-.435 1-1 1h-2.313c.12-.206.098-.22.25-.438C18.564 7.672 19.375 7 20 7zM6 11h20v2h-9v-1h-2v1H6v-2zm1 4h18v11h-8V16h-2v10H7V15z"
            ></path>
          </svg>
          Dashboard
        </Link>
        <Link
          to="/dashboard/room-management"
          className="flex items-center relative w-full mt-[7px] text-[15px] pl-8 text-[#464545] hover:text-primary transition duration-200"
        >
          <SiNginxproxymanager
            size={18}
            className="absolute left-0 top-[2.5px]"
          />
          Room Management
        </Link>
        <Link
          to="/dashboard/slot-management"
          className="flex items-center relative w-full mt-[7px] text-[15px] pl-8 text-[#464545] hover:text-primary transition duration-200"
        >
          <FaCheckToSlot size={18} className="absolute left-0 top-[2.5px]" />
          Slot Management
        </Link>
        <Link
          to="/dashboard/booking-management"
          className="flex items-center relative w-full mt-[7px] text-[15px] pl-8 text-[#464545] hover:text-primary transition duration-200"
        >
          <FaBookmark
            size={18}
            className="absolute left-0 top-[2.5px]"
          />
          Booking Management
        </Link>
        <Link
          to="/dashboard/user-management"
          className="flex items-center relative w-full mt-[7px] text-[15px] pl-8 text-[#464545] hover:text-primary transition duration-200"
        >
          <FaUserCircle
            size={18}
            className="absolute left-0 top-[2.5px]"
          />
          User Management
        </Link>

        <button
          onClick={() => dispatch(logOut())}
          className="flex items-center relative w-full mt-[7px] text-[15px] pl-8 text-[#464545] hover:text-primary transition duration-200"
        >
          <svg
            className="absolute left-0 top-[2px]"
            width="20"
            height="20"
            viewBox="0 0 32 32"
          >
            <path
              fill="currentColor"
              d="M15 4v12h2V4zm-3 .688C7.348 6.34 4 10.785 4 16c0 6.617 5.383 12 12 12s12-5.383 12-12c0-5.215-3.348-9.66-8-11.313v2.157C23.527 8.39 26 11.91 26 16c0 5.516-4.484 10-10 10S6 21.516 6 16c0-4.09 2.473-7.61 6-9.156z"
            ></path>
          </svg>
          Log out
        </button>
      </div>
    </div>
  );
};

export default NavbarDropDown;
