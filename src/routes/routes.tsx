import { createBrowserRouter } from 'react-router-dom';

import { AppLayout } from '@layouts/App/App.layout';
import { HomePage } from '@pages/Home/Home.page';
import { LoginPage } from '@pages/Login/Login.page';
import { ProfilePage } from '@pages/Profile/Profile.page';

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
                        path: '/',
                        element: <HomePage />,
                    },
                ],
            },
            {
                element: <PublicRoute />,
                children: [
                    {
                        path: '/login',
                        element: <LoginPage />,
                    },
                ],
            },
            {
                element: <PrivateRoute />,
                children: [
                    {
                        path: '/profile',
                        element: <ProfilePage />,
                    },
                ],
            },
        ],
    },
]);
