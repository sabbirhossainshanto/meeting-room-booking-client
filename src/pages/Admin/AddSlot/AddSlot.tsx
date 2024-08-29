
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { FaGreaterThan } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { TbFidgetSpinner } from "react-icons/tb";
import { useGetAllRoomsQuery } from "@/redux/features/rooms/roomApi";
import toast from "react-hot-toast";
import {
  DatePicker,
  DatePickerProps,
  Select,
  SelectProps,
  TimePicker,
} from "antd";
import { useAddSlotMutation } from "@/redux/features/user/slot/slotApi";
import { TRoom } from "@/types";

const AddSlot = () => {
  const [addSlot, { isLoading, isSuccess }] = useAddSlotMutation();
  const { data: rooms } = useGetAllRoomsQuery(undefined);
  const [date, setDate] = useState<string | string[]>("");
  const [startTime, setStartTime] = useState<string | string[]>("");
  const [endTime, setEndTime] = useState<string | string[]>("");
  const [room, setRoom] = useState<string | string[]>("");

  const navigate = useNavigate();
  const { handleSubmit } = useForm();
  const onSubmit: SubmitHandler<FieldValues> = async () => {
    const slotData = {
      room,
      date,
      startTime,
      endTime,
    };

    try {
      const res = await addSlot(slotData).unwrap();
      if (res?.success) {
        toast.success(res?.message);
        navigate("/dashboard/slot-management");
      }
    } catch (error: any) {
      toast.error(error?.data?.errorMessages?.[0]?.message);
    }
  };

  const onChange: DatePickerProps["onChange"] = (__date, dateString) => {
    setDate(dateString);
  };

  const options: SelectProps["options"] = rooms?.data?.map((room:TRoom) => ({
    label: room.name,
    value: room._id,
  }));
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
          <span className="text-lg">Add SLot</span>
        </div>
        <div className="grid grid-cols-12 gap-6 py-14">
          <div className="col-span-12 ">
            <h4 className="bg-[#E9E4E4] px-3 py-2 text-lg font-semibold">
              Add Slot Form
            </h4>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="sm:flex md:block lg:flex gap-6 mt-6">
                <div className="w-full sm:w-1/2 md:w-full lg:w-1/2">
                  <label className="text-lg font-medium" htmlFor="first_name">
                    Room<span className="text-primary">*</span>
                  </label>
                  <Select
                    className="block h-11 mt-2"
                    allowClear
                    style={{ width: "100%" }}
                    placeholder="Please select"
                    onChange={(value) => setRoom(value)}
                    options={options}
                  />
                </div>
                <div className="w-full sm:w-1/2 md:w-full lg:w-1/2 mt-6 sm:mt-0 md:mt-6 lg:mt-0">
                  <label className="text-lg font-medium" htmlFor="last_name">
                    Date <span className="text-primary">*</span>
                  </label>
                  <DatePicker className="block h-11 mt-2" onChange={onChange} />
                </div>
              </div>
              <div className="sm:flex md:block lg:flex gap-6 mt-6">
                <div className="w-full sm:w-1/2 md:w-full lg:w-1/2">
                  <label className="text-lg font-medium" htmlFor="first_name">
                    Start Time <span className="text-primary">*</span>
                  </label>
                  <TimePicker
                    className="block h-11 mt-2"
                    onChange={(__time, timeString) => setStartTime(timeString)}
                    format="HH:mm"
                  />
                </div>
                <div className="w-full sm:w-1/2 md:w-full lg:w-1/2 mt-6 sm:mt-0 md:mt-6 lg:mt-0">
                  <label className="text-lg font-medium" htmlFor="last_name">
                    End Time <span className="text-primary">*</span>
                  </label>
                  <TimePicker
                    className="block h-11 mt-2"
                    onChange={(__time, timeString) => setEndTime(timeString)}
                    format="HH:mm"
                  />
                </div>
              </div>

              <div className="sm:flex md:block lg:flex gap-6 mt-3">
                <div className="w-full sm:w-1/2 md:w-full lg:w-1/2 mt-6 sm:mt-0 md:mt-6 lg:mt-0">
                  <button
                    type="submit"
                    className="default_btn rounded w-full hover:bg-white hover:border-rose-500 hover:text-primary mt-1"
                  >
                    {!isLoading && !isSuccess ? (
                      <span> Add Slot</span>
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

export default AddSlot;
