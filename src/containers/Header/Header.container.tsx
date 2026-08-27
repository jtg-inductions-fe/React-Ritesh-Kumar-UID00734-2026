import { useState } from 'react';

import {
    Avatar,
    Box,
    Button,
    IconButton,
    Stack,
    Typography,
} from '@mui/material';

import { Link, useLocation, useNavigate } from 'react-router-dom';

import logo from '@assets/images/logo.svg';
import { UserMenu } from '@components';
import { ROUTES } from '@constants';
import { clearCredentials } from '@features';
import { useAppDispatch, useAppSelector } from '@store';
import { clearAuthData } from '@utils';

import { HeaderAppBar } from './Header.styles';

export const HeaderContainer = () => {
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useAppDispatch();

    const user = useAppSelector((state) => state.auth.user);
    const isAuthenticated = useAppSelector(
        (state) => state.auth.isAuthenticated,
    );

    const isLoginPage = location.pathname === ROUTES.LOGIN;

    const handleAvatarClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        clearAuthData();
        dispatch(clearCredentials());

        void navigate(ROUTES.LOGIN);
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
                    user={user}
                    onClose={handleMenuClose}
                    onLogout={handleLogout}
                />
            )}
        </HeaderAppBar>
    );
};
