import assets from "@/assets";
import Container from "@/components/shared/Container";
import { useGetSingleRoomsQuery } from "@/redux/features/rooms/roomApi";
import { FaGreaterThan } from "react-icons/fa";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { MdOutlineHome } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import { useState } from "react";

const SingleRoom = () => {
  const [activeImg, setActiveImg] = useState(0);
  const navigate = useNavigate();
  const { id } = useParams();
  const { data } = useGetSingleRoomsQuery(id);
  const navigateCheckoutPage = (id: string) => {
    navigate(`/booking/${id}`);
  };

  return (
    <div className="py-10">
      <Container>
        <div className="flex items-center gap-2">
          <MdOutlineHome
            onClick={() => navigate("/")}
            size={20}
            className="text-primary cursor-pointer"
          />
          <FaGreaterThan className="" />
          <span className="text-lg text-primary">Rooms</span>
          <FaGreaterThan className="" />
          <span className="text-lg">Single Room</span>
        </div>
        <div className="py-10">
          <div className="grid grid-cols-12 gap-6">
            <div
              className="col-span-12 lg:col-span-6"
           
            >
              <div className="flex justify-center items-center">
                <img
                  loading="lazy"
                  alt="product"
                  src={data?.data?.images?.[activeImg]}
                />
              </div>

              <div className="pt-6">
                <Swiper
                  slidesPerView={3}
                  spaceBetween={10}
                  modules={[Navigation]}
                  className="mySwiper"
                >
                  {data?.data?.images.map((image, i) => (
                    <SwiperSlide style={{ width: "111px", marginRight: "8px" }}>
                      {" "}
                      <div className="w-full h-[80px] flex justify-center items-center">
                        <img
                          onClick={() => setActiveImg(i)}
                          loading="lazy"
                          alt="product"
                          className={`w-full h-full object-cover cursor-pointer border ${
                            activeImg === i ? "border-primary" : ""
                          }`}
                          src={image}
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-6">
              <div className="product_info_wrapper">
                <div className="product_base_info">
                  <h1 className="text-2xl sm:text-3xl uppercase font-semibold">
                    {data?.data?.name}
                  </h1>

                  <div className="space-y-2 mt-4">
                    <p>
                      <span className="font-medium pr-3">Room No:</span>
                      <span className="">{data?.data?.roomNo}</span>
                    </p>
                    <p>
                      <span className="font-medium pr-3">Floor Bo:</span>
                      {data?.data?.floorNo}
                    </p>
                    <p>
                      <span className="font-medium pr-3">Capacity:</span>
                      {data?.data?.capacity}
                    </p>
                  </div>
                  <div className="mt-3 flex gap-3 items-center overflow-hidden">
                    <span className="font-medium pr-3">Price Per Slot : </span>
                    <span className="text-2xl text-primary font-semibold">
                      ${data?.data?.pricePerSlot}
                    </span>
                   
                  </div>
                  <div className="mt-2">
                    <p>
                      <span className="font-medium pr-3">Amenities:</span>

                      {data?.data?.amenities.map((item) => (
                        <span className="">
                          {item}{" "}
                        </span>
                      ))}
                    </p>
                  </div>
                </div>

                <div className="flex gap-5 mt-6 border-b pb-5">
                  <button
                    onClick={() => navigateCheckoutPage(data?.data?._id as string)}
                    className="flex gap-2 items-center border border-primary bg-primary text-sm sm:text-base text-white hover:bg-white hover:text-primary transition duration-300 px-2 sm:px-8 py-2 rounded uppercase group"
                  >
                    <span className="text-white group-hover:text-primary">
                      <IoCartOutline size={20} />
                    </span>
                    Book Now
                  </button>
                  <a
                  
                    className="flex gap-2 items-center border border-primary hover:bg-primary text-primary  hover:text-white transition duration-300 px-2 sm:px-8 py-2 rounded uppercase group"
                  >
                    <span className="text-primary group-hover:text-white">
                      <IoMdHeartEmpty size={20} />
                    </span>
                    Wishlist
                  </a>
                </div>

                <div className="flex gap-3 items-center mt-4">
                  <a className="w-8 h-8 border rounded-full flex justify-center items-center">
                    <img src={assets.facebook} alt="" />
                  </a>
                  <a className="w-8 h-8 border rounded-full flex justify-center items-center">
                    <img src={assets.twitter} alt="" />
                  </a>
                  <a className="w-8 h-8 border rounded-full flex justify-center items-center">
                    <img src={assets.instagram} alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SingleRoom;
