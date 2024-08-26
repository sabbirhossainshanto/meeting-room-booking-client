import { baseApi } from "@/redux/api/baseApi";
import { TFullUser, TResponseRedux } from "@/types";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    signUp: builder.mutation({
      query: (payload) => ({
        url: "/auth/signup",
        method: "POST",
        body: payload,
      }),
    }),
    login: builder.mutation({
      query: (payload) => ({
        url: "/auth/login",
        method: "POST",
        body: payload,
      }),
    }),
    getMe: builder.query<TResponseRedux<TFullUser>, unknown>({
      query: () => ({
        url: "/auth/getMe",
        method: "GET",
      }),
    }),
  }),
});

export const { useLoginMutation, useSignUpMutation, useGetMeQuery } = authApi;
