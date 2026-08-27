import { Logout, Person } from '@mui/icons-material';
import {
    Avatar,
    Button,
    Divider,
    Popover,
    Stack,
    Typography,
} from '@mui/material';

import { Link } from 'react-router-dom';

import { ROUTES } from '@constants';

import type { UserMenuProps } from './UserMenu.types';

export const UserMenu = ({
    anchorEl,
    open,
    user,
    onClose,
    onLogout,
}: UserMenuProps) => {
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
                    sx: {
                        backgroundColor: 'transparent',
                        boxShadow: 'none',
                    },
                },
            }}
        >
            <Stack
                width={(theme) => theme.spacing(80)}
                marginTop={4}
                padding={4}
                gap={3}
                bgcolor="background.paper"
                border={1}
                borderColor="divider"
                borderRadius={3}
            >
                <Stack direction="row" alignItems="center" gap={2}>
                    <Avatar
                        src={user.avatar_url}
                        alt={`${user.login}'s profile`}
                        sx={{
                            width: (theme) => theme.spacing(16),
                            height: (theme) => theme.spacing(16),
                        }}
                    />

                    <Stack minWidth={0} gap={0.5}>
                        <Typography variant="subtitle1" fontWeight={700} noWrap>
                            {user.name}
                        </Typography>

                        <Typography
                            variant="body2"
                            color="text.secondary"
                            noWrap
                        >
                            @{user.login}
                        </Typography>

                        {user.email && (
                            <Typography
                                variant="caption"
                                color="text.secondary"
                                noWrap
                            >
                                {user.email}
                            </Typography>
                        )}
                    </Stack>
                </Stack>

                <Divider />

                <Stack gap={1.5}>
                    <Button
                        component={Link}
                        to={ROUTES.PROFILE}
                        variant="outlined"
                        startIcon={<Person />}
                        onClick={onClose}
                    >
                        View Profile
                    </Button>

                    <Button
                        variant="contained"
                        startIcon={<Logout />}
                        onClick={handleLogout}
                    >
                        Logout
                    </Button>
                </Stack>
            </Stack>
        </Popover>
    );
};
