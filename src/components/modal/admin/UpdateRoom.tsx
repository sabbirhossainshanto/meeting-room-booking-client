import {
  useGetSingleRoomsQuery,
  useUpdateRoomMutation,
} from "@/redux/features/rooms/roomApi";
import { Modal } from "antd";
import { useEffect } from "react";

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { TbFidgetSpinner } from "react-icons/tb";
type TUpdateSlotProps = {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  roomId: string;
};

const UpdateRoom = ({
  isModalOpen,
  setIsModalOpen,
  roomId,
}: TUpdateSlotProps) => {
  const [updateRoom, { isLoading }] = useUpdateRoomMutation();
  const { data: roomData } = useGetSingleRoomsQuery(roomId, {
    refetchOnMountOrArgChange: true,
    skip: roomId ? false : true,
  });

  const { handleSubmit, register, reset } = useForm();

  const handleUpdateSlot: SubmitHandler<FieldValues> = async (data) => {
    try {
      const slotData = {
        id: roomId,
        data: {
          name: data?.name,
          roomNo: Number(data?.roomNo),
          floorNo: Number(data?.floorNo),
          capacity: Number(data?.capacity),
          pricePerSlot: Number(data?.pricePerSlot),
          amenities: [data?.amenities],
        },
      };
      const res = await updateRoom(slotData).unwrap();
      if (res?.success) {
        toast.success(res?.message);
        setIsModalOpen(false);
      }
    } catch (error: any) {
      toast.error(error?.data?.errorMessages?.[0]?.message);
    }
  };

  useEffect(() => {
    if (roomData) {
      reset({
        name: roomData?.data?.name,
        roomNo: roomData?.data?.roomNo,
        floorNo: roomData?.data?.floorNo,
        capacity: roomData?.data?.capacity,
        pricePerSlot: roomData?.data?.pricePerSlot,
        amenities: roomData?.data?.amenities?.join(", ") || "",
      });
    }
  }, [roomData, reset]);

  if (!roomData) {
    return;
  }
  return (
    <Modal
      title="Update Room"
      open={isModalOpen}
      onCancel={() => setIsModalOpen(false)}
      footer={null}
    >
      <form onSubmit={handleSubmit(handleUpdateSlot)}>
        <div className="sm:flex md:block lg:flex gap-6 mt-6">
          <div className="w-full sm:w-1/2 md:w-full lg:w-1/2">
            <label className="text-lg font-medium" htmlFor="first_name">
              Room Name <span className="text-primary">*</span>
            </label>
            <input
              {...register("name", { required: true })}
              className="w-full text-sm border-[2.5px] border-[#E9E4E4] rounded focus:ring-0 focus:outline-primary mt-2 py-2 px-2"
              type="text"
              id="first_name"
            />
          </div>
          <div className="w-full sm:w-1/2 md:w-full lg:w-1/2 mt-6 sm:mt-0 md:mt-6 lg:mt-0">
            <label className="text-lg font-medium" htmlFor="last_name">
              Room No <span className="text-primary">*</span>
            </label>
            <input
              {...register("roomNo", { required: true })}
              className="w-full text-sm border-[2.5px] border-[#E9E4E4] rounded focus:ring-0 focus:outline-primary mt-2 py-2 px-2"
              type="number"
              id="first_name"
            />
          </div>
        </div>
        <div className="sm:flex md:block lg:flex gap-6 mt-6">
          <div className="w-full sm:w-1/2 md:w-full lg:w-1/2">
            <label className="text-lg font-medium" htmlFor="first_name">
              Floor No <span className="text-primary">*</span>
            </label>
            <input
              {...register("floorNo", { required: true })}
              className="w-full text-sm border-[2.5px] border-[#E9E4E4] rounded focus:ring-0 focus:outline-primary mt-2 py-2 px-2"
              type="number"
              id="first_name"
            />
          </div>
          <div className="w-full sm:w-1/2 md:w-full lg:w-1/2 mt-6 sm:mt-0 md:mt-6 lg:mt-0">
            <label className="text-lg font-medium" htmlFor="last_name">
              Capacity <span className="text-primary">*</span>
            </label>
            <input
              {...register("capacity", { required: true })}
              className="w-full text-sm border-[2.5px] border-[#E9E4E4] rounded focus:ring-0 focus:outline-primary mt-2 py-2 px-2"
              type="text"
              id="last_name"
            />
          </div>
        </div>
        <div className="sm:flex md:block lg:flex gap-6 mt-6">
          <div className="w-full sm:w-1/2 md:w-full lg:w-1/2">
            <label className="text-lg font-medium" htmlFor="first_name">
              Amenities <span className="text-primary">*</span>
            </label>
            <input
              {...register("amenities", { required: true })}
              className="w-full text-sm border-[2.5px] border-[#E9E4E4] rounded focus:ring-0 focus:outline-primary mt-2 py-2 px-2"
              type="text"
              id="last_name"
            />
          </div>
          <div className="w-full sm:w-1/2 md:w-full lg:w-1/2 mt-6 sm:mt-0 md:mt-6 lg:mt-0">
            <label className="text-lg font-medium" htmlFor="last_name">
              Price Per Slot <span className="text-primary">*</span>
            </label>
            <input
              {...register("pricePerSlot", { required: true })}
              className="w-full text-sm border-[2.5px] border-[#E9E4E4] rounded focus:ring-0 focus:outline-primary mt-2 py-2 px-2"
              type="text"
              id="last_name"
            />
          </div>
        </div>
        <div className="w-full  mt-6 flex justify-end gap-6">
          <button
            type="submit"
            className="default_btn rounded w-full hover:bg-white hover:border-rose-500 hover:text-primary mt-1 w-1/2"
          >
            {!isLoading ? (
              <span> Add Room</span>
            ) : (
              <span className="flex items-center gap-2 justify-center text-base">
                <span>Please Wait</span>{" "}
                <TbFidgetSpinner className="animate-spin" />
              </span>
            )}
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default UpdateRoom;
