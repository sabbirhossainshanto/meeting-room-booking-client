import SeeSlot from "@/components/modal/SeeSlot";
import Container from "@/components/shared/Container";
import { useMyBookingsQuery } from "@/redux/features/user/booking/bookingApi";
import { TMyBooking } from "@/types";
import { useState } from "react";
import { FaGreaterThan } from "react-icons/fa";
import { MdOutlineHome } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const MyBookings = () => {
  const [bookingData, setBookingData] = useState<TMyBooking>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const { data } = useMyBookingsQuery(undefined);

  const handleModalOpen = (booking: TMyBooking) => {
    setIsModalOpen(true);
    setBookingData(booking);
  };

  return (
    <div className="py-14">
      <Container>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 pb-10">
            <MdOutlineHome
              onClick={() => navigate("/")}
              size={20}
              className="text-primary cursor-pointer"
            />
            <FaGreaterThan className="" />
            <span className="text-lg">My Booking</span>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-9">
          {data?.data?.map((booking) => {
            return (
              <div
                key={booking._id}
                className="md:flex justify-between items-center border rounded p-5"
              >
                <div className="w-20 h-20">
                  <img
                    loading="lazy"
                    className="w-full h-full object-cover"
                    src={booking.room.images?.[0]}
                    alt="product"
                  />
                </div>
                <div className="mt-6 md:mt-0">
                  <a
                    onClick={() =>
                      navigate(`/meeting-rooms/${booking.room._id}`)
                    }
                    className="hover:text-primary transition duration-300 text-lg cursor-pointer"
                  >
                    <h5 className="">
                      <span className="font-medium">Name :</span>{" "}
                      {booking.room.name}
                    </h5>
                  </a>
                  <p className=" text-lg">
                    <h5 className=" ">
                      <span className="font-medium">Room No :</span>{" "}
                      <span className="">{booking.room.roomNo}</span>
                    </h5>
                  </p>
                </div>
                <div className="mt-6 md:mt-0">
                  <p className=" text-lg">
                    <h5 className="">
                      <span className="font-medium ">Date :</span>{" "}
                      <span className="">{booking.date}</span>
                    </h5>
                  </p>

                  <p className=" text-lg">
                    <h5 className="">
                      <span className="font-medium ">Is Confirm :</span>{" "}
                      <span
                        className={`
                        ${
                          booking.isConfirmed === "confirmed"
                            ? "text-green-600"
                            : ""
                        }
                        ${
                          booking.isConfirmed === "unconfirmed"
                            ? "text-yellow-600"
                            : ""
                        }
                        ${
                          booking.isConfirmed === "canceled"
                            ? "text-primary"
                            : ""
                        }
                      
                      `}
                      >
                        {booking.isConfirmed}
                      </span>
                    </h5>
                  </p>
                </div>

                <div className="flex justify-between md:gap-12 items-center mt-4 md:mt-0">
                  <button
                    onClick={() => handleModalOpen(booking)}
                    className="default_btn rounded  hover:bg-white hover:border-rose-500 hover:text-primary"
                  >
                    See Slot
                  </button>
                  <SeeSlot
                    isModalOpen={isModalOpen}
                    setIsModalOpen={setIsModalOpen}
                    booking={bookingData}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
};

export default MyBookings;
