import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Job } from '../models';
import { BASE_URL } from '../assets/url';

const baseQuery = fetchBaseQuery({
    baseUrl: BASE_URL.prod,
});

export const apiJobService = createApi({
    reducerPath: 'api',
    baseQuery,
    endpoints: (builder) => ({
        getJobs: builder.query<Job[], []>({
            query: () => '/jobs',
        }),
        getJobByTitle: builder.query<Job | undefined, string>({
            query: (title: string) => `/jobs/${title}`,
        }),
        postJob: builder.mutation<Job, { newJob: Partial<Job>; userId: string | undefined }>({
            query: ({ newJob, userId }) => ({
                url: `/jobs/post-job/${userId}`,
                method: 'POST',
                body: newJob,
            }),
        }),
    }),
});

export const { useGetJobsQuery, useGetJobByTitleQuery, usePostJobMutation } = apiJobService;
