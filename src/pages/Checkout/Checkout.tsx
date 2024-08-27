import Container from "@/components/shared/Container";
import { useGetMeQuery } from "@/redux/features/auth/authApi";
import { useCreateBookingMutation } from "@/redux/features/user/booking/bookingApi";
import { useGetAvailableSlotsQuery } from "@/redux/features/user/slot/slotApi";
import { TQueryParam } from "@/types";
import { Select, SelectProps } from "antd";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaGreaterThan } from "react-icons/fa";
import { MdOutlineHome } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";

const Checkout = () => {
  const { id } = useParams();
  const [query, setQuery] = useState<TQueryParam[] | undefined>(undefined);
  const [slot, setSlot] = useState<string[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const navigate = useNavigate();
  const { data: user } = useGetMeQuery(undefined);
  const { data: slots } = useGetAvailableSlotsQuery(query);
  const [addBooking] = useCreateBookingMutation();
  const { handleSubmit, register, reset } = useForm({
    defaultValues: {
      name: user?.data?.name,
      email: user?.data?.email,
      address: user?.data?.address,
      phone: user?.data?.phone,
    },
  });

  const handleBooking = async () => {
    const bookingData = {
      room: id,
      slots: slot,
      date: query?.[0]?.value,
      user: user?.data?._id,
    };

    try {
      const res = await addBooking(bookingData).unwrap();
      if (res?.success) {
        toast.success(res?.message);
        // navigate("/");
      }
    } catch (error: any) {
      toast.error(error?.data?.errorMessages?.[0]?.message);
    }
  };

  useEffect(() => {
    if (user) {
      reset({
        name: user?.data?.name,
        email: user?.data?.email,
        address: user?.data?.address,
        phone: user?.data?.phone,
      });
    }
  }, [user, reset]);

  useEffect(() => {
    if (slots) {
      const categories = Array.from(
        new Set(slots?.data?.map((item) => item.date))
      );

      setCategories(categories);
    }
  }, [slots]);

  const options: SelectProps["options"] = slots?.data?.map((slot) => ({
    label: `Start Time ${slot.startTime} - End Time ${slot.endTime}`,
    value: slot._id,
  }));
  const dateOption: SelectProps["options"] = categories?.map((category) => ({
    label: category,
    value: category,
  }));

  const getSelectedSlot = slots?.data?.filter((item) =>
    slot.includes(item._id)
  );

  const totalPrice = getSelectedSlot?.reduce((acc, slot) => {
    return acc + slot.room.pricePerSlot;
  }, 0);

  if (!categories) {
    return;
  }

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
          <span className="text-lg">Booking</span>
        </div>
        <form
          onSubmit={handleSubmit(handleBooking)}
          className="grid grid-cols-12 gap-6 py-14"
        >
          <div className="col-span-12 md:col-span-6 lg:col-span-8 ">
            <h4 className="bg-[#E9E4E4] px-3 py-2 text-lg font-semibold">
              Billing details
            </h4>
            <div>
              <div className="sm:flex md:block lg:flex gap-6 mt-6">
                <div className="w-full sm:w-1/2 md:w-full lg:w-1/2">
                  <label className="text-lg font-medium" htmlFor="first_name">
                    Select Date <span className="text-primary">*</span>
                  </label>

                  <Select
                    allowClear
                    style={{ width: "100%" }}
                    placeholder="Please select"
                    onChange={(value) => setQuery([{ name: "date", value }])}
                    options={dateOption}
                  />
                </div>
                <div className="w-full sm:w-1/2 md:w-full lg:w-1/2 mt-6 sm:mt-0 md:mt-6 lg:mt-0">
                  <label className="text-lg font-medium" htmlFor="last_name">
                    Select Slot <span className="text-primary">*</span>
                  </label>

                  <Select
                    mode="multiple"
                    allowClear
                    style={{ width: "100%" }}
                    placeholder="Please select"
                    onChange={(value) => setSlot(value)}
                    options={options}
                  />
                </div>
              </div>
              <div className="sm:flex md:block lg:flex gap-6 mt-6">
                <div className="w-full sm:w-1/2 md:w-full lg:w-1/2">
                  <label className="text-lg font-medium" htmlFor="first_name">
                    Name <span className="text-primary">*</span>
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
                    Email <span className="text-primary">*</span>
                  </label>
                  <input
                    {...register("email", { required: true })}
                    className="w-full text-sm border-[2.5px] border-[#E9E4E4] rounded focus:ring-0 focus:outline-primary mt-2 py-2 px-2"
                    type="email"
                    id="last_name"
                  />
                </div>
              </div>
              <div className="sm:flex md:block lg:flex gap-6 mt-6">
                <div className="w-full sm:w-1/2 md:w-full lg:w-1/2">
                  <label className="text-lg font-medium" htmlFor="first_name">
                    Address <span className="text-primary">*</span>
                  </label>
                  <input
                    {...register("address", { required: true })}
                    className="w-full text-sm border-[2.5px] border-[#E9E4E4] rounded focus:ring-0 focus:outline-primary mt-2 py-2 px-2"
                    type="text"
                    id="first_name"
                  />
                </div>
                <div className="w-full sm:w-1/2 md:w-full lg:w-1/2 mt-6 sm:mt-0 md:mt-6 lg:mt-0">
                  <label className="text-lg font-medium" htmlFor="last_name">
                    Phone <span className="text-primary">*</span>
                  </label>
                  <input
                    {...register("phone", { required: true })}
                    className="w-full text-sm border-[2.5px] border-[#E9E4E4] rounded focus:ring-0 focus:outline-primary mt-2 py-2 px-2"
                    type="text"
                    id="last_name"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <h4 className="bg-[#E9E4E4] px-3 py-2">Room Details</h4>
            <div className="border border-[#E9E4E4] px-4 py-6 mt-4">
              <h4 className="uppercase border-b border-[#E9E4E4] pb-2">
                {slots?.data?.[0]?.room.name}
              </h4>
              {getSelectedSlot?.map((slot) => {
                return (
                  <div key={slot._id} className="flex justify-between mt-5">
                    <div className="checkorder_cont">
                      <h5>
                        {slot.startTime} - {slot.endTime}
                      </h5>
                    </div>

                    <p className="font-semibold">${slot.room.pricePerSlot}</p>
                  </div>
                );
              })}

              <div className="flex justify-between border-b pb-3 mt-5">
                <h5 className="font-semibold uppercase">Subtotal</h5>
                <p className="font-semibold">${totalPrice}</p>
              </div>
              <div className="flex justify-between border-b pb-3 mt-5">
                <h5 className="font-semibold uppercase">Discount</h5>
                <p className="font-semibold">N/A</p>
              </div>
              <div className="flex justify-between border-b pb-3 mt-5">
                <h5 className="font-semibold uppercase">Total</h5>
                <p className="font-semibold">${totalPrice}</p>
              </div>
              <div className="flex gap-3 items-center mt-4">
                <input
                  type="checkbox"
                  className="focus:ring-0 text-primary border border-primary focus:bg-primary focus:outline-none"
                  id="save-default"
                />
                <label
                  htmlFor="save-default"
                  className="text-sm cursor-pointer"
                >
                  Agree to our{" "}
                  <a className="text-primary">terms &amp; conditions</a>
                </label>
              </div>

              <div className="mt-4">
                <button type="submit" className="default_btn btn-hover w-full">
                  place order
                </button>
              </div>
            </div>
          </div>
        </form>
      </Container>
    </div>
  );
};

export default Checkout;
