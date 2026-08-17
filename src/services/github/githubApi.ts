import { API_ENDPOINTS } from '@constants';
import { createApi } from '@reduxjs/toolkit/query/react';
import { axiosBaseQuery } from '@services/api/axiosBaseQuery';

import { GitHubUserSearchResponse } from './github.types';

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
    }),
});

export const { useSearchUsersQuery } = githubApi;
