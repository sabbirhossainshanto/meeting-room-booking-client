import { baseApi } from "@/redux/api/baseApi";
import { TResponseRedux, TRoom } from "@/types";

const roomApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addRoom: builder.mutation({
      query: (payload) => ({
        url: "/room",
        method: "POST",
        body: payload,
      }),
    }),
    getAllRooms: builder.query<TResponseRedux<TRoom[]>, void>({
      query: () => ({
        url: "/rooms",
        method: "GET",
      }),
    }),
    getSingleRooms: builder.query<TResponseRedux<TRoom>, unknown>({
      query: (id: string) => ({
        url: `/rooms/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useAddRoomMutation,
  useGetAllRoomsQuery,
  useGetSingleRoomsQuery,
} = roomApi;
