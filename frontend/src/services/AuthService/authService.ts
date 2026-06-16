import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { getOTPResponse, LoginFormData, LoginResponse, OTPFormData } from "../../pages/Login/Login.type";
export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery(
        {baseUrl: import.meta.env.VITE_BASE_URL}
    ),
    endpoints: builder => ({
        getOTP: builder.mutation<getOTPResponse, LoginFormData>({
            query: (body) => ({
                url: '/auth/request-otp',
                method: 'POST',
                body
            })
        }),
        verifyOTP: builder.mutation<LoginResponse, OTPFormData>({
            query: (body) => ({
                url: '/auth/verify-otp',
                method: 'POST',
                body
            })
        })
    })
});

export const { 
    useGetOTPMutation,
    useVerifyOTPMutation
} = authApi;