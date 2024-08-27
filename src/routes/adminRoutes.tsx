import AddRoom from "@/pages/Admin/AddRoom/AddRoom";
import AddSlot from "@/pages/Admin/AddSlot/AddSlot";
import RoomManagement from "@/pages/Admin/RoomManagement/RoomManagement";
import SlotManagement from "@/pages/Admin/SlotManagement/SlotManagement";

export const adminRoutes = [
    {
        path:'room-management',
        element:<RoomManagement/>
    },
    {
        path:'add-room',
        element:<AddRoom/>
    },
    {
        path:'add-slot',
        element:<AddSlot/>
    },
    {
        path:'slot-management',
        element:<SlotManagement/>
    }
]