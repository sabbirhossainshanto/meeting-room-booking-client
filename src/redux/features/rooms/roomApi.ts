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
      invalidatesTags:['room']
    }),
    getAllRooms: builder.query<TResponseRedux<TRoom[]>, void>({
      query: () => ({
        url: "/rooms",
        method: "GET",
      }),
      providesTags:['room']
    }),
    getSingleRooms: builder.query<TResponseRedux<TRoom>, unknown>({
      query: (id: string) => ({
        url: `/rooms/${id}`,
        method: "GET",
      }),
    }),
    deleteRoom: builder.mutation({
      query: (id: string) => ({
        url: `/rooms/${id}`,
        method: "DELETE",
      }),
      invalidatesTags:['room']
    }),
  }),
});

export const {
  useAddRoomMutation,
  useGetAllRoomsQuery,
  useGetSingleRoomsQuery,
  useDeleteRoomMutation,
} = roomApi;
