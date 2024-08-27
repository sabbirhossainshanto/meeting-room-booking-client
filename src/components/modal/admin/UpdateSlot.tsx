import {
  useGetSingleSlotQuery,
  useUpdateSlotMutation,
} from "@/redux/features/user/slot/slotApi";
import { DatePicker, Modal, TimePicker } from "antd";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
type TUpdateSlotProps = {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  slotId: string;
};

const UpdateSlot = ({
  isModalOpen,
  setIsModalOpen,
  slotId,
}: TUpdateSlotProps) => {
  const [updateSlot] = useUpdateSlotMutation();
  const { data: slotData } = useGetSingleSlotQuery(slotId, {
    refetchOnMountOrArgChange: true,
  });

  const [date, setDate] = useState<string>("");
  const [startTime, setStartTime] = useState<string>("");
  const [endTime, setEndTime] = useState<string>("");

  const handleUpdateSlot = async () => {
    try {
      const slotData = {
        id: slotId,
        data: {
          date,
          startTime,
          endTime,
        },
      };
      const res = await updateSlot(slotData).unwrap();
      if (res?.success) {
        toast.success(res?.message);
        setIsModalOpen(false);
      }
    } catch (error: any) {
      toast.error(error?.data?.errorMessages?.[0]?.message);
    }
  };

  useEffect(() => {
    if (slotData?.data) {
      setDate(slotData?.data?.date);
      setStartTime(slotData?.data?.startTime);
      setEndTime(slotData?.data?.endTime);
    }
  }, [slotData]);

  if (!slotData) {
    return;
  }

  return (
    <Modal
      title="Update Slot"
      open={isModalOpen}
      onCancel={() => setIsModalOpen(false)}
      onOk={handleUpdateSlot}
    >
      <div className="sm:flex md:block lg:flex gap-6 mt-6">
        <div className="w-full  md:w-full  mt-6 sm:mt-0 md:mt-6 lg:mt-0">
          <label className="text-lg font-medium" htmlFor="last_name">
            Date <span className="text-primary">*</span>
          </label>
          <DatePicker
            value={dayjs(date, "YYYY/MM/DD")}
            format="YYYY/MM/DD"
            className="block h-11 mt-2"
            onChange={(__date, dateString) => setDate(dateString as string)}
          />
        </div>
      </div>
      <div className="sm:flex md:block lg:flex gap-6 mt-6">
        <div className="w-full sm:w-1/2 md:w-full lg:w-1/2">
          <label className="text-lg font-medium" htmlFor="first_name">
            Start Time <span className="text-primary">*</span>
          </label>
          <TimePicker
            value={dayjs(startTime, "HH:mm")}
            className="block h-11 mt-2"
            onChange={(__time, timeString) =>
              setStartTime(timeString as string)
            }
            format="HH:mm"
          />
        </div>
        <div className="w-full sm:w-1/2 md:w-full lg:w-1/2 mt-6 sm:mt-0 md:mt-6 lg:mt-0">
          <label className="text-lg font-medium" htmlFor="last_name">
            End Time <span className="text-primary">*</span>
          </label>
          <TimePicker
            value={dayjs(endTime, "HH:mm")}
            className="block h-11 mt-2"
            onChange={(__time, timeString) => setEndTime(timeString as string)}
            format="HH:mm"
          />
        </div>
      </div>
    </Modal>
  );
};

export default UpdateSlot;
