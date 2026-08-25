import { createBrowserRouter } from 'react-router-dom';

import { HomePage } from '@pages/Home/Home.page';

import { OpenRoute } from './OpenRoute';

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
]);
