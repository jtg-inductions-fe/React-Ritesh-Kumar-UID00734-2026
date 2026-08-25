import { useState } from 'react';

import {
    Avatar,
    Box,
    Button,
    IconButton,
    Stack,
    Typography,
} from '@mui/material';

import { Link } from 'react-router-dom';

import logo from '@assets/images/logo.svg';
import { UserMenu } from '@components';
import { ROUTES } from '@constants';

import { HeaderAppBar } from './Header.styles';
import type { HeaderProps } from './Header.types';

export const Header = ({
    isAuthenticated,
    isLoginPage,
    user,
    onViewProfile,
    onLogout,
}: HeaderProps) => {
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

    const handleAvatarClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <HeaderAppBar position="static">
            <Stack
                component={Link}
                to={ROUTES.HOME}
                direction="row"
                alignItems="center"
                gap={2}
                color="inherit"
                sx={{
                    textDecoration: 'none',
                }}
            >
                <Box
                    component="img"
                    src={logo}
                    alt="Sora"
                    width={(theme) => theme.spacing(9)}
                    height={(theme) => theme.spacing(9)}
                    display="block"
                />

                <Stack justifyContent="center" gap={1}>
                    <Typography variant="h6" component="span" fontWeight={700}>
                        Sora
                    </Typography>

                    <Typography
                        variant="caption"
                        component="span"
                        color="text.secondary"
                    >
                        Explore the GitHub Community
                    </Typography>
                </Stack>
            </Stack>

            {isAuthenticated ? (
                <IconButton onClick={handleAvatarClick}>
                    <Avatar src={user?.avatar_url} alt={user?.login} />
                </IconButton>
            ) : isLoginPage ? (
                <Button component={Link} to={ROUTES.HOME} variant="contained">
                    Home
                </Button>
            ) : (
                <Button component={Link} to={ROUTES.LOGIN} variant="contained">
                    Login
                </Button>
            )}

            {isAuthenticated && user && (
                <UserMenu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    username={user.login}
                    name={user.name}
                    email={user.email}
                    avatarUrl={user.avatar_url}
                    onClose={handleMenuClose}
                    onViewProfile={onViewProfile}
                    onLogout={onLogout}
                />
            )}
        </HeaderAppBar>
    );
};
