import { Close, Logout, Person } from '@mui/icons-material';
import {
    Avatar,
    Box,
    Button,
    IconButton,
    Popover,
    Typography,
} from '@mui/material';

import type { UserMenuProps } from './UserMenu.types';

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
        <Popover
            open={open}
            anchorEl={anchorEl}
            onClose={onClose}
            elevation={0}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            slotProps={{
                paper: {
                    style: {
                        backgroundColor: 'transparent',
                        boxShadow: 'none',
                    },
                },
            }}
        >
            <Box
                width={320}
                marginTop={4}
                bgcolor="background.default"
                border={1}
                borderColor="divider"
                borderRadius={2}
                overflow="hidden"
                padding={3}
            >
                <Box display="flex" justifyContent="flex-end">
                    <IconButton size="small" onClick={onClose}>
                        <Close fontSize="small" />
                    </IconButton>
                </Box>

                <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    gap={1}
                    textAlign="center"
                    overflow="hidden"
                >
                    <Avatar
                        src={avatarUrl}
                        alt={`${username}'s profile`}
                        sx={{
                            width: 64,
                            height: 64,
                        }}
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
                </Box>

                <Box
                    display="flex"
                    flexDirection="column"
                    gap={1}
                    marginTop={2}
                >
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
                </Box>
            </Box>
        </Popover>
    );
};
