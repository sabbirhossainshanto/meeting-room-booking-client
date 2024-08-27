import { useGetAllRoomsQuery } from "@/redux/features/rooms/roomApi";
import RoomCard from "@/components/shared/RoomCard";

const FeaturedRooms = () => {
  const { data } = useGetAllRoomsQuery(undefined);
console.log(data);
  return (
    <div className="container pb-14">
      <h2 className="text-[28px] mb-6">Featured Rooms For You</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {data?.data?.map((room) => (
          <RoomCard room={room} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedRooms;
