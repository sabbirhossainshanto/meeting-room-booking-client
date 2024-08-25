import assets from "@/assets";
import { Link } from "react-router-dom";
import Container from "./Container";
import { CiLocationOn } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { LuMessageCircle } from "react-icons/lu";

const Footer = () => {
  return (
    <div className="bg-[#f3f3f3]  flex flex-col justify-between">
      {/* <Container> */}
      <div className="grid grid-cols-1 md:grid-cols-2  px-10 py-10 justify-items-center">
        <div className="space-y-3 flex-1">
          <h1 className="text-4xl">
            <span className="text-primary">Booking</span>
            <span>.com</span>
          </h1>
          <p className="text-xl text-[#2B2D42] ">
            Lorem ipsum, or lipsum as it is sometimes kno wn, is dummy text used
            in laying out print, gra phic or web designs the passage.
          </p>
          <div className="flex flex-col gap-4 pt-4">
            <label
              htmlFor="newsLetter"
              className="text-gray-900 text-xl uppercase"
            >
              Newsletter
            </label>
            <form className="flex">
              <input
                type="text"
                placeholder="Your email address"
                className="py-2.5 px-[15px] text-[13px] w-full sm:w-[230px] md:w-full lg:w-[230px]  bg-transparent rounded-l-[5px] border border-[#c7c7c7] focus:ring-1 focus:outline-rose-500 border-r-0 focus:border-r-0 "
              />
              <button
                type="button"
                className="default_btn py-2 px-2.5 min-w-[105px] rounded-r-[5px] rounded-l-none hover:bg-white hover:border-rose-500 hover:text-primary"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
          <div className="flex flex-col gap-4 pt-4">
            <h1 className="text-gray-900 text-xl uppercase">CONTACT</h1>
            <p className="flex items-center gap-2 text-lg">
              <CiLocationOn size={25} />
              <span>
                7895 Dr New Albuquerue, NM 19800, United States Of America
              </span>
            </p>
            <p className="flex items-center gap-2 text-lg">
              <IoCallOutline size={20} />
              <span>+566 477 256, +566 254 575</span>
            </p>
            <p className="flex items-center gap-2 text-lg">
              <LuMessageCircle size={20} />
              <span>info@domain.com</span>
            </p>
            <div className="flex items-center gap-4">
              <img className="h-7" src={assets.facebook} alt="" />
              <img className="h-7" src={assets.instagram} alt="" />
              <img className="h-7" src={assets.twitter} alt="" />
            </div>
          </div>
        </div>
        <div className="flex w-full justify-between md:justify-center md:gap-32 pt-10">
        <div className="">
          <h3 className="mb-5 font-semibold text-lg">MY ACCOUNT</h3>
          <div className="flex flex-col space-y-4">
            <Link to="/orders">Orders</Link>
            <Link to="/orders">Wishlist</Link>
            <Link to="/orders">Track Order</Link>
            <Link to="/orders">Manage Account</Link>
            <Link to="/orders">Return Order</Link>
          </div>
        </div>
        <div className="">
          <h3 className="mb-5 font-semibold text-lg ">INFORMATION</h3>
          <div className="flex flex-col space-y-4">
            <Link to="/orders">About Us</Link>
            <Link to="/orders">Return Policy</Link>
            <Link to="/orders">Terms and Condition</Link>
            <Link to="/orders">Privacy Policy</Link>
            <Link to="/orders">FAQ</Link>
          </div>
        </div>
        </div>
      </div>
      {/* </Container> */}

      <div className="bg-[#2b2d42] ">
        <Container>
          <div className="flex flex-col gap-4 sm:flex-row items-center justify-between py-4">
            <Link to="/">
              <span className="flex items-center gap-2 text-white">
                <span className="text-xl"> &copy; </span>
                <img className="h-5" src={assets.logo} alt="" />
                <span className="text-xl">- All Rights Reserved</span>
              </span>
            </Link>
            <img className="h-10" src={assets.paymentMethod} alt="" />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Footer;
