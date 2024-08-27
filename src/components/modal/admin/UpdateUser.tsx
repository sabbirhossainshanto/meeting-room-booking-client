import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useUpdateRoleMutation } from "@/redux/features/auth/authApi";
import { TFullUser } from "@/types";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const UpdateUser = ({ user }: { user: TFullUser }) => {
  const [role, setRole] = useState("");
  const [updateRole] = useUpdateRoleMutation();

  useEffect(() => {
    if (role) {
      try {
        Swal.fire({
          title: "Are you sure!",
          text: `Do you want to update ${user.role} to ${role}!`,
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, update it!",
        }).then(async (result) => {
          if (result.isConfirmed) {
            const payload = {
              id: user._id,
              data: {
                role,
              },
            };
            const res = await updateRole(payload).unwrap();
            if (res?.success) {
              toast.success(res?.message);
            }
          }
        });
      } catch (error: any) {
        toast.error(error?.data?.errorMessages?.[0]?.message);
      }
    }
  }, [role]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex gap-2 items-center border border-primary bg-primary text-white text-sm uppercase px-4 py-2 rounded hover:bg-white hover:text-primary transition duration-300">
          <span className="text-white group-hover:text-primary transition"></span>{" "}
          Edit Role
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={role} onValueChange={setRole}>
          <DropdownMenuRadioItem value="user">User</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="admin">Admin</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UpdateUser;
