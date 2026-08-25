import { createBrowserRouter } from 'react-router-dom';

import { ROUTES } from '@constants';
import { AppLayout } from '@layouts/App/App.layout';
import { HomePage } from '@pages/Home/Home.page';
import { LoginPage } from '@pages/Login/Login.page';

import { OpenRoute } from './OpenRoute';
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
        ],
    },
]);
