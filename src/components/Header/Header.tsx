import { useState } from 'react';

import { Avatar, Button, IconButton, Typography } from '@mui/material';

import { useNavigate } from 'react-router-dom';

import logo from '@assets/images/logo.svg';

import {
    HeaderActions,
    HeaderAppBar,
    HeaderBrandButton,
    HeaderBrandText,
    HeaderLogo,
    HeaderRoot,
} from './Header.styles';
import { UserMenu } from './UserMenu/UserMenu';

interface HeaderUser {
    username: string;
    name?: string | null;
    email?: string | null;
    avatarUrl?: string;
}

interface HeaderProps {
    variant: 'login' | 'app';
    isAuthenticated: boolean;
    user?: HeaderUser;
    onLogin: () => void;
    onViewProfile: () => void;
    onLogout: () => void;
}

export const Header = ({
    variant,
    isAuthenticated,
    user,
    onLogin,
    onViewProfile,
    onLogout,
}: HeaderProps) => {
    const navigate = useNavigate();

    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

    const isMenuOpen = Boolean(anchorEl);
    const showActions = variant === 'app';

    const handleBrandClick = () => {
        void navigate('/search');
    };

    const handleAvatarClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <HeaderRoot>
            <HeaderAppBar position="static">
                <HeaderBrandButton type="button" onClick={handleBrandClick}>
                    <HeaderLogo src={logo} alt="" />

                    <HeaderBrandText>
                        <Typography
                            variant="h6"
                            component="span"
                            fontWeight={700}
                        >
                            Sora
                        </Typography>

                        <Typography
                            variant="caption"
                            component="span"
                            color="text.secondary"
                        >
                            Explore the GitHub Community
                        </Typography>
                    </HeaderBrandText>
                </HeaderBrandButton>

                {showActions && (
                    <HeaderActions>
                        {isAuthenticated ? (
                            <IconButton onClick={handleAvatarClick}>
                                <Avatar
                                    src={user?.avatarUrl}
                                    alt={user?.username}
                                />
                            </IconButton>
                        ) : (
                            <Button variant="contained" onClick={onLogin}>
                                Login
                            </Button>
                        )}
                    </HeaderActions>
                )}
            </HeaderAppBar>

            {isAuthenticated && user && (
                <UserMenu
                    anchorEl={anchorEl}
                    open={isMenuOpen}
                    username={user.username}
                    name={user.name}
                    email={user.email}
                    avatarUrl={user.avatarUrl}
                    onClose={handleMenuClose}
                    onViewProfile={onViewProfile}
                    onLogout={onLogout}
                />
            )}
        </HeaderRoot>
    );
};
