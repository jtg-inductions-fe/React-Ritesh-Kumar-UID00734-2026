import type { GitHubUserDetails } from '@services/github/github.types';

export interface AuthState {
    user: GitHubUserDetails | null;
    token: string | null;
    isAuthenticated: boolean;
}
