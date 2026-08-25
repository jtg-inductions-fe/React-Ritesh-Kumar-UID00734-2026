import type { GitHubAuthenticatedUser } from '@_types/github.types';

export type HeaderUser = Pick<
    GitHubAuthenticatedUser,
    'login' | 'name' | 'email' | 'avatar_url'
>;

export interface HeaderProps {
    isAuthenticated: boolean;
    isLoginPage: boolean;
    user: GitHubAuthenticatedUser | null;
    onBrandClick: () => void;
    onLogin: () => void;
    onHome: () => void;
    onViewProfile: () => void;
    onLogout: () => void;
}
