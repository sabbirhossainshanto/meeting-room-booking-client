import { baseApi } from "@/redux/api/baseApi";
import { TQueryParam, TResponseRedux } from "@/types";
import { TSlot } from "@/types/slot.type";

const slotApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAvailableSlots: builder.query<TResponseRedux<TSlot[]>, unknown>({
      query: (query: TQueryParam[]) => {
        const params = new URLSearchParams();
        if (query) {
          query.forEach((item: TQueryParam) =>
            params.append(item.name, item.value as string)
          );
        }
        return {
          url: "/slots/availability",
          method: "GET",
          params,
        };
      },
    }),
  }),
});

export const { useGetAvailableSlotsQuery } = slotApi;
