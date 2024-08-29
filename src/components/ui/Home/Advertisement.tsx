import assets from "@/assets";
import {  MdSchedule } from "react-icons/md";
import { GiConfirmed} from "react-icons/gi";

const Advertisement = () => {
  return (
    <div className="container py-14">
      <div className="flex justify-between">
        <div className="w-full max-w-full">
          <div className="sm:flex justify-center">
            <div className="w-[270px] sm:w-1/3 max-w-full sm:pr-3 mb-3 sm:mb-0 mx-auto">
              <div className="min-h-[90px] border border-primary rounded-sm flex items-center justify-center">
                <div className="mr-3 md:mr-6 flex-shrink-0">
                  <MdSchedule
                    className="w-[40px] md:w-[50px] max-h-11 text-primary "
                  size={35}
                  />
                </div>
                <div>
                  <h4 className="text-lg sm:text-base md:text-lg leading-6 mb-1">
                  Schedule
                  </h4>
                  <p className="sm:text-[10px] md:text-[13px] text-[#6B6B6B]">
                  Flexible Scheduling
                  </p>
                </div>
              </div>
            </div>

            <div className="w-[270px] sm:w-1/3 max-w-full sm:px-3 mb-3 sm:mb-0 mx-auto">
              <div className="min-h-[90px] border border-primary rounded-sm flex items-center justify-center">
                <div className="mr-3 md:mr-6 flex-shrink-0">
                  <GiConfirmed
                    className="w-[40px] md:w-[50px] max-h-11 text-primary"
                  size={35}
                  />
                </div>
                <div>
                  <h4 className="text-lg sm:text-base md:text-lg leading-6 mb-1">
                  Instant Booking Confirmation
                  </h4>
                  <p className="sm:text-[10px] md:text-[13px] text-[#6B6B6B]">
                    Confirmation within 30 minutes
                  </p>
                </div>
              </div>
            </div>

            <div className="w-[270px] sm:w-1/3 max-w-full sm:pl-3 mx-auto">
              <div className="min-h-[90px] border border-primary rounded-sm flex items-center justify-center">
                <div className="mr-3 md:mr-6 flex-shrink-0">
                  <img
                    src={assets.serviceHour}
                    className="w-[40px] md:w-[50px] max-h-11"
                    alt="icon"
                  />
                </div>
                <div>
                  <h4 className="text-lg sm:text-base md:text-lg leading-6 mb-1">
                    24/7 Support
                  </h4>
                  <p className="sm:text-[10px] md:text-[13px] text-[#6B6B6B]">
                    Customer support
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advertisement;
