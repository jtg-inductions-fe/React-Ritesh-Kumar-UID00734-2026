import { Navigate, Outlet } from 'react-router-dom';

import { useAppSelector } from '@store';

export const PublicRoute = () => {
    const isAuthenticated = useAppSelector(
        (state) => state.auth.isAuthenticated,
    );

    if (isAuthenticated) {
        return <Navigate to="/" replace />;
    }

    return <Outlet />;
};
