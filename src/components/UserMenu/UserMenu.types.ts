export interface UserMenuProps {
    anchorEl: HTMLElement | null;
    open: boolean;
    username: string;
    name?: string | null;
    email?: string | null;
    avatarUrl?: string;
    onClose: () => void;
    onViewProfile: () => void;
    onLogout: () => void;
}
