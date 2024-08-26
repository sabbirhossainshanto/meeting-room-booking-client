import { baseApi } from "@/redux/api/baseApi";

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
  }),
});

export const { useCreateBookingMutation } = bookingApi;
