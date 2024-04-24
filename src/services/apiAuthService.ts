import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { AuthRegister } from '../models/auth.model';
import { BASE_URL } from '../assets/url';



export const apiAuthService = createApi({
    reducerPath: 'apiAuth',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL.prod }),
    endpoints: (builder) => ({
        registerUser: builder.mutation<AuthRegister, Partial<AuthRegister>>({
            query: (newJob) => ({
                url: '/auth/register',
                method: 'POST',
                body: newJob,
            }),
        }),
    }),
});

export const { useRegisterUserMutation } = apiAuthService;
