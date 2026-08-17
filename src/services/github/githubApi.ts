import { createApi } from '@reduxjs/toolkit/query/react';

import { API_ENDPOINTS } from '@constants';
import { axiosBaseQuery } from '@services/api/axiosBaseQuery';

import { GitHubUserDetails, GitHubUserSearchResponse } from './github.types';

export const githubApi = createApi({
    reducerPath: 'githubApi',
    baseQuery: axiosBaseQuery(),
    endpoints: (builder) => ({
        searchUsers: builder.query<GitHubUserSearchResponse, string>({
            query: (query: string) => ({
                url: API_ENDPOINTS.GITHUB.SEARCH_USERS,
                method: 'GET',
                params: {
                    q: query,
                },
            }),
        }),

        getUserByUsername: builder.query<GitHubUserDetails, string>({
            query: (username) => ({
                url: API_ENDPOINTS.GITHUB.USER_DETAILS(username),
                method: 'GET',
            }),
        }),
    }),
});

export const { useSearchUsersQuery, useGetUserByUsernameQuery } = githubApi;
