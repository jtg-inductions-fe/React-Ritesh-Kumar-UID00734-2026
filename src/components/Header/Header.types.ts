import type { GitHubUserDetails } from '@services/github/github.service.types';

export type HeaderUser = Pick<
    GitHubUserDetails,
    'login' | 'name' | 'email' | 'avatar_url'
>;

export interface HeaderProps {
    isAuthenticated: boolean;
    user: HeaderUser | null;
    onBrandClick: () => void;
    onLogin: () => void;
    onViewProfile: () => void;
    onLogout: () => void;
}
