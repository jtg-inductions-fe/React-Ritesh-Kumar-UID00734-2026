import { Close, Logout, Person } from '@mui/icons-material';
import { Button, IconButton, Typography } from '@mui/material';

import {
    UserMenuActions,
    UserMenuAvatar,
    UserMenuContent,
    UserMenuHeader,
    UserMenuInfo,
    UserMenuRoot,
} from './UserMenu.styles';

interface UserMenuProps {
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

export const UserMenu = ({
    anchorEl,
    open,
    username,
    name,
    email,
    avatarUrl,
    onClose,
    onViewProfile,
    onLogout,
}: UserMenuProps) => {
    const handleViewProfile = () => {
        onClose();
        onViewProfile();
    };

    const handleLogout = () => {
        onClose();
        onLogout();
    };

    return (
        <UserMenuRoot
            open={open}
            anchorEl={anchorEl}
            onClose={onClose}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
        >
            <UserMenuContent>
                <UserMenuHeader>
                    <IconButton size="small" onClick={onClose}>
                        <Close fontSize="small" />
                    </IconButton>
                </UserMenuHeader>

                <UserMenuInfo>
                    <UserMenuAvatar
                        src={avatarUrl}
                        alt={`${username}'s profile`}
                    />

                    <Typography variant="subtitle1" fontWeight={600}>
                        {username}
                    </Typography>

                    {name && (
                        <Typography variant="body2" color="text.secondary">
                            {name}
                        </Typography>
                    )}

                    {email && (
                        <Typography variant="body2" color="text.secondary">
                            {email}
                        </Typography>
                    )}
                </UserMenuInfo>

                <UserMenuActions>
                    <Button
                        fullWidth
                        variant="outlined"
                        startIcon={<Person />}
                        onClick={handleViewProfile}
                    >
                        View Profile
                    </Button>

                    <Button
                        fullWidth
                        variant="contained"
                        startIcon={<Logout />}
                        onClick={handleLogout}
                    >
                        Logout
                    </Button>
                </UserMenuActions>
            </UserMenuContent>
        </UserMenuRoot>
    );
};
