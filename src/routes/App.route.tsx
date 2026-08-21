import { createBrowserRouter } from 'react-router-dom';

import { AppLayout } from '@layouts/App/App.layout';
import { HomePage } from '@pages/Home/Home.page';
import { LoginPage } from '@pages/Login/Login.page';
import { ProfilePage } from '@pages/Profile/Profile.page';

import { GuestRoute } from './Guest.route';
import { ProtectedRoute } from './Protected.route';

export const appRouter = createBrowserRouter([
    {
        element: <AppLayout />,
        children: [
            {
                element: <GuestRoute />,
                children: [
                    {
                        path: '/login',
                        element: <LoginPage />,
                    },
                ],
            },
            {
                path: '/',
                element: <HomePage />,
            },
            {
                element: <ProtectedRoute />,
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
