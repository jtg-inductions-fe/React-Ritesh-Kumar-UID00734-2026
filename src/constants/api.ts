export const API_ENDPOINTS = {
    GITHUB: {
        SEARCH_USERS: '/search/users',
        USER_DETAILS: (username: string) =>
            `/users/${encodeURIComponent(username)}`,
        AUTHENTICATED_USER: '/user',
        FOLLOWING_USER: (username: string) =>
            `/user/following/${encodeURIComponent(username)}`,
        USER_FOLLOWERS: (username: string) =>
            `/users/${encodeURIComponent(username)}/followers`,
    },
} as const;
