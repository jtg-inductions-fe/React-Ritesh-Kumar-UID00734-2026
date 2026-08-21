import { useLocation, useNavigate } from 'react-router-dom';

import { Header } from '@components/Header/Header';
import { clearCredentials } from '@features/auth/authSlice';
import { useAppDispatch, useAppSelector } from '@store';
import { clearAuthData } from '@utils/authStorage';

export const HeaderLayout = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useAppDispatch();

    const user = useAppSelector((state) => state.auth.user);
    const isAuthenticated = useAppSelector(
        (state) => state.auth.isAuthenticated,
    );

    const isLoginPage = location.pathname === '/login';

    const handleBrandClick = () => {
        void navigate('/');
    };

    const handleLogin = () => {
        void navigate('/login');
    };

    const handleHome = () => {
        void navigate('/');
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
            isAuthenticated={isAuthenticated}
            isLoginPage={isLoginPage}
            user={user}
            onBrandClick={handleBrandClick}
            onLogin={handleLogin}
            onHome={handleHome}
            onViewProfile={handleViewProfile}
            onLogout={handleLogout}
        />
    );
};
