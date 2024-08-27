import { TMyBooking } from "@/types";
import { Modal } from "antd";

type TSlotProp = {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  booking?: TMyBooking;
};

const SeeSlot = ({ isModalOpen, setIsModalOpen, booking }: TSlotProp) => {
 
  return (
    <Modal
      title="Slot Details"
      open={isModalOpen}
      onCancel={() => setIsModalOpen(false)}
      onOk={() => setIsModalOpen(false)}
    >
      <div className="col-span-12 md:col-span-6 lg:col-span-4">
        <h4 className="bg-[#E9E4E4] px-3 py-2">Date: {booking?.date}</h4>
        <div className="border border-[#E9E4E4] px-4 py-6 mt-4">
          {booking?.slots?.map((slot) => {
            return (
              <div
                key={slot._id}
                className="flex justify-between mb-4 border-b"
              >
                <div className="checkorder_cont">
                  <h5>
                    <span className="font-medium">Time :</span> {slot.startTime}{" "}
                    - {slot.endTime}
                  </h5>
                </div>

                <p className="font-semibold text-primary">
                  ${booking.room.pricePerSlot}
                </p>
              </div>
            );
          })}

          <div className="flex justify-between border-b pb-3 mt-5">
            <h5 className="font-semibold uppercase">Subtotal</h5>
            <p className="font-semibold">
              ${booking?.slots && booking?.totalAmount + booking?.slots?.length}
            </p>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default SeeSlot;
