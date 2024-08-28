import { baseApi } from "@/redux/api/baseApi";
import { TMyBooking, TResponseRedux } from "@/types";

const bookingApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createBooking: builder.mutation({
      query: (payload) => {
        return {
          url: "/bookings",
          method: "POST",
          body: payload,
        };
      },
    }),
    myBookings: builder.query<TResponseRedux<TMyBooking[]>, unknown>({
      query: () => {
        return {
          url: "/my-bookings",
          method: "GET",
        };
      },
    }),
    getAllBooking: builder.query<TResponseRedux<TMyBooking[]>, unknown>({
      query: () => {
        return {
          url: "/bookings",
          method: "GET",
        };
      },
      providesTags: ["booking"],
    }),
    deleteBooking: builder.mutation({
      query: (id) => {
        return {
          url: `/bookings/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["booking"],
    }),
    updateBooking: builder.mutation({
      query: (payload) => {
        return {
          url: `/bookings/${payload?.id}`,
          method: "PUT",
          body: payload.data,
        };
      },
      invalidatesTags: ["booking"],
    }),
  }),
});

export const {
  useCreateBookingMutation,
  useMyBookingsQuery,
  useGetAllBookingQuery,
  useDeleteBookingMutation,
  useUpdateBookingMutation,
} = bookingApi;
