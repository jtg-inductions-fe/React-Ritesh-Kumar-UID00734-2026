import { createBrowserRouter } from 'react-router-dom';

import { HomePage } from '@pages/Home/Home.page';
import { LoginPage } from '@pages/Login/Login.page';

import { OpenRoute } from './OpenRoute';
import { PublicRoute } from './PublicRoute';

export const router = createBrowserRouter([
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
]);
