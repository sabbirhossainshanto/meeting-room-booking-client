import AddRoom from "@/pages/Admin/AddRoom/AddRoom";
import AddSlot from "@/pages/Admin/AddSlot/AddSlot";
import BookingManagement from "@/pages/Admin/BookingManagement/BookingManagement";
import RoomManagement from "@/pages/Admin/RoomManagement/RoomManagement";
import SlotManagement from "@/pages/Admin/SlotManagement/SlotManagement";
import UserManagement from "@/pages/Admin/UserManagement/UserManagement";

export const adminRoutes = [
  {
    path: "room-management",
    element: <RoomManagement />,
  },
  {
    path: "add-room",
    element: <AddRoom />,
  },
  {
    path: "add-slot",
    element: <AddSlot />,
  },
  {
    path: "slot-management",
    element: <SlotManagement />,
  },
  {
    path: "user-management",
    element: <UserManagement />,
  },
  {
    path: "booking-management",
    element: <BookingManagement />,
  },
];
