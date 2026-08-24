import { createBrowserRouter } from 'react-router-dom';

import { AppLayout } from '@layouts/App/App.layout';
import { HomePage } from '@pages/Home/Home.page';
import { LoginPage } from '@pages/Login/Login.page';

import { PublicRoute } from './PublicRoute';

export const openRoutes = createBrowserRouter([
    {
        element: <AppLayout />,
        children: [
            {
                path: '/',
                element: <HomePage />,
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
        ],
    },
]);
