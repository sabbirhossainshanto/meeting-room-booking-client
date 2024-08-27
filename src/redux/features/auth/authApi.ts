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
        url: "/users/getMe",
        method: "GET",
      }),
    }),
    getAllUser: builder.query<TResponseRedux<TFullUser[]>, unknown>({
      query: () => ({
        url: "/users",
        method: "GET",
      }),
      providesTags: ["user"],
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `/users/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["user"],
    }),
    updateRole: builder.mutation({
      query: (payload) => ({
        url: `/users/${payload.id}`,
        method: "PATCH",
        body: payload.data,
      }),
      invalidatesTags: ["user"],
    }),
  }),
});

export const {
  useLoginMutation,
  useSignUpMutation,
  useGetMeQuery,
  useGetAllUserQuery,
  useDeleteUserMutation,
  useUpdateRoleMutation,
} = authApi;
