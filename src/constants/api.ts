export const API_ENDPOINTS = {
    GITHUB: {
        SEARCH_USERS: '/search/users',
        USER_DETAILS: (username: string) => `/users/${username}`,
    },
} as const;
