import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useUpdateBookingMutation } from "@/redux/features/user/booking/bookingApi";
import { TMyBooking } from "@/types";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const UpdateBookingStatus = ({ booking }: { booking: TMyBooking }) => {
  const [status, setStatus] = useState("");
  const [updateBooking] = useUpdateBookingMutation();

  useEffect(() => {
    if (status) {
      try {
        Swal.fire({
          title: "Are you sure!",
          text: `Do you want to update ${booking.isConfirmed} to ${status}!`,
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, update it!",
        }).then(async (result) => {
          if (result.isConfirmed) {
            const payload = {
              id: booking._id,
              data: {
                isConfirmed: status,
              },
            };
            const res = await updateBooking(payload).unwrap();
            if (res?.success) {
              toast.success(res?.message);
            }
          }
        });
      } catch (error: any) {
        toast.error(error?.data?.errorMessages?.[0]?.message);
      }
    }
  }, [status]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex gap-2 items-center border border-primary bg-primary text-white text-sm uppercase px-4 py-2 rounded hover:bg-white hover:text-primary transition duration-300">
          <span className="text-white group-hover:text-primary transition"></span>{" "}
          Edit Status
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={status} onValueChange={setStatus}>
          <DropdownMenuRadioItem value="confirmed">
            Confirmed
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="unconfirmed">
            Un Confirmed
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="canceled">
            Canceled
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UpdateBookingStatus;
