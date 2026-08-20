import { createBrowserRouter } from 'react-router-dom';

import { HomePage } from '@pages/Home/Home.page';

export const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />,
    },
]);
