import { createBrowserRouter } from 'react-router-dom';

import { HomePage } from '@pages/Home/Home.page';
import { LoginPage } from '@pages/Login/Login.page';

import { PublicRoute } from './PublicRoute';

export const openRoutes = createBrowserRouter([
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
]);
