import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { CssBaseline, ThemeProvider } from '@mui/material';

import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import { AppLayout } from '@layouts/App/App.layout';
import { openRoutes } from '@routes/OpenRoute';
import { store } from '@store';
import { theme } from '@theme';

const rootElement = document.getElementById('root') as HTMLElement;

createRoot(rootElement).render(
    <StrictMode>
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <CssBaseline />

                <AppLayout>
                    <RouterProvider router={openRoutes} />
                </AppLayout>
            </ThemeProvider>
        </Provider>
    </StrictMode>,
);
