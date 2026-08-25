import { createBrowserRouter } from 'react-router-dom';

import { ROUTES } from '@constants';
import { AppLayout } from '@layouts';
import { HomePage, LoginPage, ProfilePage } from '@pages';

import { OpenRoute } from './OpenRoute';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const router = createBrowserRouter([
    {
        element: <AppLayout />,
        children: [
            {
                element: <OpenRoute />,
                children: [
                    {
                        path: ROUTES.HOME,
                        element: <HomePage />,
                    },
                ],
            },
            {
                element: <PublicRoute />,
                children: [
                    {
                        path: ROUTES.LOGIN,
                        element: <LoginPage />,
                    },
                ],
            },
            {
                element: <PrivateRoute />,
                children: [
                    {
                        path: ROUTES.PROFILE,
                        element: <ProfilePage />,
                    },
                ],
            },
        ],
    },
]);
