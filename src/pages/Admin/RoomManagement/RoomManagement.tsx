import UpdateRoom from "@/components/modal/admin/UpdateRoom";

import {
  useDeleteRoomMutation,
  useGetAllRoomsQuery,
} from "@/redux/features/rooms/roomApi";
import { TRoom } from "@/types";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaGreaterThan } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const RoomManagement = () => {
  const [roomId, setRoomId] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const [deleteRoom] = useDeleteRoomMutation();
  const { data } = useGetAllRoomsQuery(undefined);

  const handleDeleteRoom = async (room: TRoom) => {
    try {
      Swal.fire({
        title: "Are you sure!",
        text: `Do you want to delete ${room.name}!`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Delete it!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          const res = await deleteRoom(room._id).unwrap();
          if (res?.success) {
            toast.success(res?.message);
          }
        }
      });
    } catch (error: any) {
      toast.error(error?.data?.errorMessages?.[0]?.message);
    }
  };

  const handleModalOpen = (id: string) => {
    setIsModalOpen(true);
    setRoomId(id);
  };

  return (
    <div className="py-14 container">
     
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 pb-10">
            <MdDashboard
              onClick={() => navigate("/dashboard")}
              size={20}
              className="text-primary cursor-pointer"
            />
            <FaGreaterThan className="" />
            <span className="text-lg text-primary">Room Management</span>
          </div>
          <button
            onClick={() => navigate("/dashboard/add-room")}
            className="default_btn rounded  hover:bg-white hover:border-rose-500 hover:text-primary"
          >
            Create Room
          </button>
        </div>
        <div className="col-span-12 lg:col-span-9">
          {data?.data?.map((room:TRoom) => {
            return (
              <div
                key={room?._id}
                className="md:flex justify-between items-center border rounded p-5"
              >
              <div className="flex-1">
              <div className="w-32 h-20">
                  <img
                    loading="lazy"
                    className="w-full h-full object-cover"
                    src={room?.images?.[0]}
                    alt="product"
                  />
                </div>
              </div>
                <div className="mt-6 md:mt-0 flex-1">
                  <a className="hover:text-primary transition duration-300 text-lg">
                    <h5 className="font-medium ">
                      <span className="">Name :</span> {room?.name}
                    </h5>
                  </a>
                  <p className=" mb-0 text-lg">
                    <span className="font-medium "> Room No: </span>
                    <span className="">{room?.roomNo}</span>
                  </p>
                  <p className=" mb-0 text-lg">
                    <span className="font-medium">Floor No:</span>{" "}
                    <span className="">{room?.floorNo}</span>
                  </p>
                </div>
                <div className="mt-6 md:mt-0 flex-1">
                  <a className=" text-lg">
                    <h5 className="">
                      <span className="font-medium ">Capacity :</span>{" "}
                      <span className="">{room?.capacity}</span>
                    </h5>
                  </a>
                  <div className="text-lg  mt-2 md:mt-0">
                    <h5 className="">
                      <span className="font-medium">Price Per Slot :</span>{" "}
                      <span className="text-primary">${room?.pricePerSlot}</span>
                    </h5>
                  </div>
                </div>

                <div className="flex justify-between md:gap-12 items-center mt-4 md:mt-0">
                  <div className="group">
                    <button
                      onClick={() => handleModalOpen(room?._id)}
                      className="flex gap-2 items-center border border-primary bg-primary text-white text-sm uppercase px-4 py-2 rounded hover:bg-white hover:text-primary transition duration-300"
                    >
                      <span className="text-white group-hover:text-primary transition"></span>{" "}
                      Edit Room
                    </button>
                    <UpdateRoom
                      isModalOpen={isModalOpen}
                      setIsModalOpen={setIsModalOpen}
                      roomId={roomId}
                    />
                  </div>
                  <div
                    onClick={() => handleDeleteRoom(room)}
                    className="cursor-pointer hover:text-primary transition"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M7 21q-.825 0-1.412-.587Q5 19.825 5 19V6q-.425 0-.713-.287Q4 5.425 4 5t.287-.713Q4.575 4 5 4h4q0-.425.288-.713Q9.575 3 10 3h4q.425 0 .713.287Q15 3.575 15 4h4q.425 0 .712.287Q20 4.575 20 5t-.288.713Q19.425 6 19 6v13q0 .825-.587 1.413Q17.825 21 17 21ZM7 6v13h10V6Zm2 10q0 .425.288.712Q9.575 17 10 17t.713-.288Q11 16.425 11 16V9q0-.425-.287-.713Q10.425 8 10 8t-.712.287Q9 8.575 9 9Zm4 0q0 .425.288.712q.287.288.712.288t.713-.288Q15 16.425 15 16V9q0-.425-.287-.713Q14.425 8 14 8t-.712.287Q13 8.575 13 9ZM7 6v13V6Z"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      
    </div>
  );
};

export default RoomManagement;
