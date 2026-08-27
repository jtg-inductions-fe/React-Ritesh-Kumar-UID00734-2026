import type {
    GitHubAuthenticatedUser,
    GitHubUser,
    GitHubUserDetails,
    GitHubUserSearchResponse,
} from '@_types';
import { createApi } from '@reduxjs/toolkit/query/react';

import { API_ENDPOINTS } from '@constants';
import { axiosBaseQuery } from '@services';

interface AuthenticatedRequest {
    username: string;
    token: string;
}

export const githubApi = createApi({
    reducerPath: 'githubApi',
    baseQuery: axiosBaseQuery(),
    tagTypes: ['Following'],
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

        getAuthenticatedUser: builder.query<GitHubAuthenticatedUser, string>({
            query: (token) => ({
                url: API_ENDPOINTS.GITHUB.AUTHENTICATED_USER,
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }),
        }),

        checkFollowingUser: builder.query<boolean, AuthenticatedRequest>({
            providesTags: (_result, _error, { username }) => [
                {
                    type: 'Following',
                    id: username,
                },
            ],

            async queryFn(
                { username, token },
                _queryApi,
                _extraOptions,
                baseQuery,
            ) {
                const result = await baseQuery({
                    url: API_ENDPOINTS.GITHUB.FOLLOWING_USER(username),
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (result.error) {
                    if (result.error.status === 404) {
                        return {
                            data: false,
                        };
                    }

                    return {
                        error: result.error,
                    };
                }

                return {
                    data: true,
                };
            },
        }),

        followUser: builder.mutation<void, AuthenticatedRequest>({
            query: ({ username, token }) => ({
                url: API_ENDPOINTS.GITHUB.FOLLOWING_USER(username),
                method: 'PUT',
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }),

            invalidatesTags: (_result, _error, { username }) => [
                {
                    type: 'Following',
                    id: username,
                },
            ],
        }),

        getUserFollowers: builder.query<GitHubUser[], string>({
            query: (username) => ({
                url: API_ENDPOINTS.GITHUB.USER_FOLLOWERS(username),
                method: 'GET',
            }),
        }),
    }),
});

export const {
    useSearchUsersQuery,
    useGetUserByUsernameQuery,
    useGetAuthenticatedUserQuery,
    useLazyGetAuthenticatedUserQuery,
    useCheckFollowingUserQuery,
    useFollowUserMutation,
    useGetUserFollowersQuery,
} = githubApi;
