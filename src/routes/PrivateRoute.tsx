import { Navigate, Outlet } from 'react-router-dom';

import { ROUTES } from '@constants';
import { useAppSelector } from '@store';

export const PrivateRoute = () => {
    const isAuthenticated = useAppSelector(
        (state) => state.auth.isAuthenticated,
    );
    if (!isAuthenticated) {
        return <Navigate to={ROUTES.LOGIN} replace />;
    }

    return <Outlet />;
};
