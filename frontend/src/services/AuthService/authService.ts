import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery(
        {baseUrl: import.meta.env.VITE_BASE_URL}
    ),
    endpoints: builder => ({
        getOTP: builder.mutation({
            query: (body) => ({
                url: '/auth/request-otp',
                method: 'POST',
                body
            })
        }),
        verifyOTP: builder.mutation({
            query: (body) => ({
                url: `/auth/verify-otp`,
                method: 'POST',
                body: body
            })
        })
    })
});

export const { 
    useGetOTPMutation,
    useVerifyOTPMutation
} = authApi;