import { baseApi } from "@/redux/api/baseApi";
import { TQueryParam, TResponseRedux } from "@/types";
import { TSlot } from "@/types/slot.type";

const slotApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addSlot: builder.mutation({
      query: (payload) => {
        return {
          url: "/slots",
          method: "POST",
          body: payload,
        };
      },
      invalidatesTags: ["slot"],
    }),
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
      providesTags: ["slot"],
    }),
    deleteSlot: builder.mutation({
      query: (id) => {
        return {
          url: `/slots/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["slot"],
    }),
    getSingleSlot: builder.query<TResponseRedux<TSlot>, unknown>({
      query: (id) => {
        return {
          url: `/slots/${id}`,
          method: "GET",
        };
      },
    }),
    updateSlot: builder.mutation({
      query: (payload) => {
        return {
          url: `/slots/${payload?.id}`,
          method: "PUT",
          body: payload?.data,
        };
      },
      invalidatesTags: ["slot"],
    }),
  }),
});

export const {
  useGetAvailableSlotsQuery,
  useAddSlotMutation,
  useDeleteSlotMutation,
  useGetSingleSlotQuery,
  useUpdateSlotMutation,
} = slotApi;
