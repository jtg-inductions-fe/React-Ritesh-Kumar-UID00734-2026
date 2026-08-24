import { createBrowserRouter } from 'react-router-dom';

import { HomePage } from '@pages/Home/Home.page';
import { LoginPage } from '@pages/Login/Login.page';

import { GuestRoute } from './Guest.route';

export const openRoutes = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />,
    },
    {
        element: <GuestRoute />,
        children: [
            {
                path: '/login',
                element: <LoginPage />,
            },
        ],
    },
]);
