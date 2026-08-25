import { useLocation, useNavigate } from 'react-router-dom';

import { Header } from '@components/Header/Header.component';
import { ROUTES } from '@constants';
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

    const isLoginPage = location.pathname === ROUTES.LOGIN;

    const handleBrandClick = () => {
        void navigate(ROUTES.HOME);
    };

    const handleLogin = () => {
        void navigate(ROUTES.LOGIN);
    };

    const handleHome = () => {
        void navigate(ROUTES.HOME);
    };

    const handleViewProfile = () => {
        void navigate(ROUTES.PROFILE);
    };

    const handleLogout = () => {
        clearAuthData();
        dispatch(clearCredentials());

        void navigate(ROUTES.LOGIN);
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
