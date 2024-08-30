import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { FaGreaterThan } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { TbFidgetSpinner } from "react-icons/tb";
import { useAddRoomMutation } from "@/redux/features/rooms/roomApi";
import toast from "react-hot-toast";
import axios from "axios";

const AddRoom = () => {
  const [loading, setLoading] = useState(false);
  const [addRoom] = useAddRoomMutation();
  const [images, setImages] = useState<File[]>([]);
  const navigate = useNavigate();
  const { handleSubmit, register } = useForm();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      setLoading(true);
      const uploadPromises = images.map((image) => {
        const formData = new FormData();
        formData.append("file", image);
        formData.append("upload_preset", "sabbirCloud");
        formData.append("cloud_name", "daar91zv4");
        return axios.post(
          "https://api.cloudinary.com/v1_1/daar91zv4/upload",
          formData
        );
      });
      const uploadedImages = await Promise.all(uploadPromises);
      const imagesUrl = uploadedImages.map((res) => res.data.secure_url);

      const roomData = {
        name: data?.name,
        roomNo: Number(data?.roomNo),
        floorNo: Number(data?.floorNo),
        capacity: Number(data?.capacity),
        pricePerSlot: Number(data?.pricePerSlot),
        amenities: [data?.amenities],
        images: imagesUrl,
      };

      const res = await addRoom(roomData).unwrap();

      if (res?.success) {
        setLoading(false);
        toast.success(res?.message);
        navigate("/dashboard/room-management");
      }
    } catch (error: any) {
      setLoading(false);
      toast.error(error?.data?.errorMessages?.[0]?.message);
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files) {
      const files = Array.from(e.target.files);
      setImages((prevImg) => [...prevImg, ...files]);
    }
  };

  return (
    <div className="py-14 container">
      <div className="flex items-center gap-2">
        <MdDashboard
          onClick={() => navigate("/dashboard")}
          size={20}
          className="text-primary cursor-pointer"
        />
        <FaGreaterThan className="" />
        <span className="text-lg text-primary">Rooms</span>
        <FaGreaterThan className="" />
        <span className="text-lg">Booking</span>
      </div>
      <div className="grid grid-cols-12 gap-6 py-14">
        <div className="col-span-12 ">
          <h4 className="bg-[#E9E4E4] px-3 py-2 text-lg font-semibold">
            Add Available Room
          </h4>
          <form onSubmit={handleSubmit(onSubmit)}>
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
            <div className="sm:flex md:block lg:flex gap-6 mt-3">
              <div className="w-full sm:w-1/2 md:w-full lg:w-1/2">
                <div>
                  <label className="pb-2">
                    Upload Images <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="file"
                    onChange={handleImageChange}
                    name="imageUrl"
                    id="upload"
                    className="hidden"
                    multiple
                  />
                  <div className="w-full flex items-center flex-wrap">
                    <label htmlFor="upload">
                      <AiOutlinePlusCircle
                        size={30}
                        className="mt-3"
                        color="#555"
                      />
                    </label>
                    {images &&
                      images.map((file, i) => (
                        <img
                          src={URL.createObjectURL(file)}
                          key={i}
                          alt=""
                          className="h-[120px] w-[120px] object-cover m-2"
                        />
                      ))}
                  </div>
                </div>
              </div>
              <div className="w-full sm:w-1/2 md:w-full lg:w-1/2 mt-6 sm:mt-0 md:mt-6 lg:mt-0">
                <label className="text-lg font-medium" htmlFor="first_name">
                  Submit <span className="text-primary">*</span>
                </label>
                <button
                  type="submit"
                  className="default_btn rounded w-full hover:bg-white hover:border-rose-500 hover:text-primary mt-1"
                >
                  {!loading ? (
                    <span> Add Room</span>
                  ) : (
                    <span className="flex items-center gap-2 justify-center text-base">
                      <span>Please Wait</span>{" "}
                      <TbFidgetSpinner className="animate-spin" />
                    </span>
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddRoom;
