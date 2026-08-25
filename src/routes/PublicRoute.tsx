import { Navigate, Outlet } from 'react-router-dom';

import { ROUTES } from '@constants';
import { useAppSelector } from '@store';

export const PublicRoute = () => {
    const isAuthenticated = useAppSelector(
        (state) => state.auth.isAuthenticated,
    );
    if (isAuthenticated) {
        return <Navigate to={ROUTES.HOME} replace />;
    }

    return <Outlet />;
};
