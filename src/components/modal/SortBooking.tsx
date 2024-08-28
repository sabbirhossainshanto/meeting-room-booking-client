import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { setSort } from "@/redux/features/rooms/room.slice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

const SortBooking = () => {
  const dispatch = useAppDispatch();
  const { sort } = useAppSelector((state) => state.room);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="text-base gap-3" variant="outline">
          <span>Sort Products</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Price</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup
          value={sort}
          onValueChange={(value) => dispatch(setSort(value))}
        >
          <DropdownMenuRadioItem value="+pricePerSlot">
            Low to High
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="-pricePerSlot">
            High to Low
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default SortBooking;
