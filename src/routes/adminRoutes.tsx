import AddRoom from "@/pages/Admin/AddRoom/AddRoom";
import RoomManagement from "@/pages/Admin/RoomManagement/RoomManagement";

export const adminRoutes = [
    {
        path:'room-management',
        element:<RoomManagement/>
    },
    {
        path:'add-room',
        element:<AddRoom/>
    }
]