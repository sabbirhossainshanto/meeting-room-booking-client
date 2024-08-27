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
  }),
});

export const { useCreateBookingMutation, useMyBookingsQuery } = bookingApi;
