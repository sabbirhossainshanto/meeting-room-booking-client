import { baseApi } from "@/redux/api/baseApi";
import { TResponseRedux, TRoom } from "@/types";

const roomApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addRoom: builder.mutation({
      query: (payload) => ({
        url: "/rooms",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["room"],
    }),
    getAllRooms: builder.query({
      query: (query) => {
        const params = new URLSearchParams();
        if (query?.searchTerm) {
          params.append("searchTerm", query.searchTerm);
        }
        if (query?.sort) {
          params.append("sort", query.sort);
        }
        if (query?.filter) {
          params.append("filter", query.filter);
        }

        return {
          url: "/rooms",
          method: "GET",
          params,
        };
      },
      providesTags: ["room"],
    }),
    getSingleRooms: builder.query<TResponseRedux<TRoom>, unknown>({
      query: (id) => ({
        url: `/rooms/${id}`,
        method: "GET",
      }),
    }),
    deleteRoom: builder.mutation({
      query: (id: string) => ({
        url: `/rooms/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["room"],
    }),
    updateRoom: builder.mutation({
      query: (payload) => ({
        url: `/rooms/${payload?.id}`,
        method: "PUT",
        body: payload?.data,
      }),
      invalidatesTags: ["room"],
    }),
  }),
});

export const {
  useAddRoomMutation,
  useGetAllRoomsQuery,
  useGetSingleRoomsQuery,
  useDeleteRoomMutation,
  useUpdateRoomMutation,
} = roomApi;
