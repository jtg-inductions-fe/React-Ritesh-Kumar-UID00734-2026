export const API_ENDPOINTS = {
    GITHUB: {
        SEARCH_USERS: '/search/users',
        USER_DETAILS: (username: string) => `/users/${username}`,
        AUTHENTICATED_USER: '/user',
    },
} as const;
