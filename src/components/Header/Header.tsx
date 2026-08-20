import { useState } from 'react';

import { Avatar, Box, Button, IconButton, Typography } from '@mui/material';

import logo from '@assets/images/logo.svg';

import { HeaderAppBar } from './Header.styles';
import type { HeaderProps } from './Header.types';
import { UserMenu } from './UserMenu/UserMenu';

export const Header = ({
    isAuthenticated,
    user,
    onBrandClick,
    onLogin,
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
            <Box
                component="button"
                type="button"
                display="flex"
                alignItems="center"
                gap={2}
                border={0}
                bgcolor="transparent"
                color="inherit"
                textAlign="left"
                onClick={onBrandClick}
            >
                <Box
                    component="img"
                    src={logo}
                    alt=""
                    width={36}
                    height={36}
                    display="block"
                />

                <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    gap={1}
                >
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
                </Box>
            </Box>

            {isAuthenticated ? (
                <IconButton onClick={handleAvatarClick}>
                    <Avatar src={user?.avatar_url} alt={user?.login} />
                </IconButton>
            ) : (
                <Button variant="contained" onClick={onLogin}>
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
