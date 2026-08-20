import type { GitHubUserDetails } from '@services/github/github.service.types';

const AUTH_USER_KEY = 'github_user';
const AUTH_TOKEN_KEY = 'github_token';

export const saveAuthData = (user: GitHubUserDetails, token: string): void => {
    localStorage.setItem(AUTH_USER_KEY, JSON.stringify(user));
    localStorage.setItem(AUTH_TOKEN_KEY, token);
};

export const getStoredUser = (): GitHubUserDetails | null => {
    const storedUser = localStorage.getItem(AUTH_USER_KEY);

    if (!storedUser) {
        return null;
    }

    try {
        return JSON.parse(storedUser) as GitHubUserDetails;
    } catch {
        return null;
    }
};

export const getStoredToken = (): string | null =>
    localStorage.getItem(AUTH_TOKEN_KEY);

export const clearAuthData = (): void => {
    localStorage.removeItem(AUTH_USER_KEY);
    localStorage.removeItem(AUTH_TOKEN_KEY);
};
