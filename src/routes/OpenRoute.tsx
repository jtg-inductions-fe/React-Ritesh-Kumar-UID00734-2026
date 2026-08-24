import { createBrowserRouter } from 'react-router-dom';

import { HomePage } from '@pages/Home/Home.page';

export const openRoutes = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />,
    },
]);
