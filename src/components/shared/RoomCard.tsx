import { TRoom } from "@/types";
import { FaEye } from "react-icons/fa";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const RoomCard = ({ room }: {room:TRoom}) => {
const navigate = useNavigate()
  return (
    <div className="col-span-1 overflow-hidden rounded-[3px] shadow-sm group">
      <div className="relative">
        <img
          src={room.images?.[0]}
          className="w-full object-cover flex-shrink-0"
          alt="product"
        />

        <div className="absolute top-[15px] left-[15px] p-2 rounded-[3px] bg-[#ffc107] text-[15px] text-white leading-[18px] z-10">
          50%
        </div>
        <div className="w-[30px] h-[30px] bg-white text-base shadow-sm rounded-full absolute top-[15px] right-[15px] z-10 text-primary flex items-center justify-center cursor-pointer">
          <IoMdHeartEmpty size={23} />
        </div>
        <div className="w-full h-full absolute left-0 top-0 bg-bgcolor opacity-0 group-hover:opacity-100 transition-all duration-500">
          <button
          onClick={()=>{
          navigate(`/meeting-rooms/${room._id}`)
          }}
            style={{ backgroundColor: "rgba(43 45 66)" }}
            className="absolute left-0 bottom-0 w-full p-2 bg-secondary text-white text-base text-center leading-4 flex items-center justify-center gap-1"
          >
            <span className="text-white mr-1">
              <FaEye />
            </span>
            Quick View
          </button>
        </div>
      </div>
      <div className="p-4">
        <a href="#">
          <h4 className="text-lg leading-6 mb-1  hover:text-primary font-medium transition duration-200">
            {room.name}
          </h4>
        </a>
        <p className="text-[15px] text-[#464545] mb-2.5">
          Capacity : {room.capacity}
        </p>
        <div className="mr-[5px]">
          <span className="text-[#fd3d57] text-xl font-semibold leading-[22px]">
            ${room.pricePerSlot}
          </span>
        </div>
      </div>
      <div className="w-full">
        <button className="group default_btn btn-hover w-full rounded-t-none text-base leading-[19px] gap-1.5 p-2 rounded-b-[3px] flex items-center justify-center transition-all duration-500">
          <IoCartOutline
            className="text-white group-hover:text-primary  transition duration-500"
            size={20}
          />
          Book Now
        </button>
      </div>
    </div>
  );
};

export default RoomCard;
