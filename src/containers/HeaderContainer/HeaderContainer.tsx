import { useLocation, useNavigate } from 'react-router-dom';

import { Header } from '@components/Header/Header';
import { clearCredentials } from '@features/auth/authSlice';
import { useAppDispatch, useAppSelector } from '@store';
import { clearAuthData } from '@utils/authStorage';

export const HeaderContainer = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useAppDispatch();

    const user = useAppSelector((state) => state.auth.user);
    const isAuthenticated = useAppSelector(
        (state) => state.auth.isAuthenticated,
    );

    const variant = location.pathname === '/login' ? 'login' : 'app';

    const handleLogin = () => {
        void navigate('/login');
    };

    const handleViewProfile = () => {
        void navigate('/profile');
    };

    const handleLogout = () => {
        clearAuthData();
        dispatch(clearCredentials());
        void navigate('/login');
    };

    return (
        <Header
            variant={variant}
            isAuthenticated={isAuthenticated}
            user={
                user
                    ? {
                          username: user.login,
                          name: user.name,
                          email: user.email,
                          avatarUrl: user.avatar_url,
                      }
                    : undefined
            }
            onLogin={handleLogin}
            onViewProfile={handleViewProfile}
            onLogout={handleLogout}
        />
    );
};
