import { useAppDispatch } from "@/redux/hooks";
import SortBooking from "../modal/SortBooking";
import {
  setFilter,
  setSearch,
  setSort,
} from "@/redux/features/rooms/room.slice";
import { Button } from "../ui/button";

const Search = () => {
  const dispatch = useAppDispatch();
  const handleReset = () => {
    dispatch(setSearch(""));
    dispatch(setSort(""));
    dispatch(setFilter(""));
  };
  return (
    <div>
      <div className="xl:max-w-[390px] h-auto flex items-center gap-3">
        <input
          onChange={(e) => dispatch(setSearch(e.target.value))}
          type="text"
          placeholder="Search product..."
          className="px-5 py-2.5 border-none text-sm w-full focus:ring-0 focus:outline-none leading-relaxed rounded"
        />
        <SortBooking />

        <Button
          className="text-base font-semibold py-[16px] "
          onClick={handleReset}
        >
          Reset
        </Button>
      </div>
    </div>
  );
};

export default Search;
