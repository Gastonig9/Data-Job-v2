import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Job } from '../models';
import { BASE_URL } from '../assets/url';


export const apiJobService = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL.prod }),
    endpoints: (builder) => ({
        getJobs: builder.query<Job[], []>({
            query: () => '/jobs',
        }),
        getJobByTitle: builder.query<Job | undefined, string>({
            query: (title: string) => `/jobs/${title}`,
        }),
        postJob: builder.mutation<Job, Partial<Job>>({
            query: (newJob) => ({
                url: '/jobs',
                method: 'POST',
                body: newJob,
            }),
        }),
    }),
});

export const { useGetJobsQuery, useGetJobByTitleQuery, usePostJobMutation } = apiJobService;
