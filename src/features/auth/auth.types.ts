import type { GitHubAuthenticatedUser } from '@_types';

export interface AuthState {
    user: GitHubAuthenticatedUser | null;
    token: string | null;
    isAuthenticated: boolean;
}

export interface SetCredentialsPayload {
    user: GitHubAuthenticatedUser;
    token: string;
}
