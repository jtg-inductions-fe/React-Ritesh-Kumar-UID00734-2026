import type { GitHubAuthenticatedUser } from '@_types';

export interface UserMenuProps {
    anchorEl: HTMLElement | null;
    open: boolean;
    user: GitHubAuthenticatedUser;
    onClose: () => void;
    onViewProfile: () => void;
    onLogout: () => void;
}
