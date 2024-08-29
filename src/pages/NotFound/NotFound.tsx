import assets from "@/assets";
import Footer from "@/components/shared/Footer";
import Heading from "@/components/shared/Heading";
import Navbar from "@/components/shared/Navbar";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <Navbar />
      <Heading title="404" to="/" padding="10" />
      <div className="pb-10">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-9">
              <div className="page_nfwrap">
                <div className="flex items-center justify-center">
                  <img
                    loading="lazy"
                    src={assets.notFound}
                    className="w-100"
                    alt="page not found"
                  />
                </div>
                <div className=" text-2xl font-medium text-center mt-5">
                  <h4 className="mb-4">
                    THE PAGE YOU'VE REQUESTED IS NOT AVAILABLE
                  </h4>
                  <Link
                    to="/"
                    className="default_btn small rounded hover:bg-white hover:border-primary hover:text-primary font-semibold text-xl"
                  >
                    back to home
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
