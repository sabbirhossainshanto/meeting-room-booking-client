import RoomCard from "@/components/shared/RoomCard";
import useDebounce from "@/hooks/useDebounce";
import { useGetAllRoomsQuery } from "@/redux/features/rooms/roomApi";
import { useAppSelector } from "@/redux/hooks";
import { TRoom } from "@/types";

const MeetingRoom = () => {
  const { filter, searchTerm, sort } = useAppSelector((state) => state.room);
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  const debouncedQuery = {
    filter,
    sort,
    searchTerm: debouncedSearchTerm,
  };
  const { data } = useGetAllRoomsQuery(debouncedQuery);
  return (
    <div className="container pt-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {data?.data?.map((room: TRoom) => (
          <RoomCard room={room} />
        ))}
      </div>
    </div>
  );
};

export default MeetingRoom;
