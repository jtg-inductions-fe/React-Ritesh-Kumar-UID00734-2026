import { createBrowserRouter } from 'react-router-dom';

import { AppLayout } from '@layouts/App/App.layout';
import { HomePage } from '@pages/Home/Home.page';
import { LoginPage } from '@pages/Login/Login.page';

import { GuestRoute } from './Guest.route';

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
        ],
    },
]);
