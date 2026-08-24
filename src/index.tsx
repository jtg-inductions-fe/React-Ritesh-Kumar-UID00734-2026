import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { CssBaseline, ThemeProvider } from '@mui/material';

import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import { AuthContainer } from '@containers/Auth/Auth.container';
import { AppLayout } from '@layouts/App/App.layout';
import { openRoutes } from '@routes/OpenRoute';
import { store } from '@store';
import { theme } from '@theme';

const rootElement = document.getElementById('root') as HTMLElement;

createRoot(rootElement).render(
    <StrictMode>
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <AuthContainer>
                    <CssBaseline />
                    <AppLayout>
                        <RouterProvider router={openRoutes} />
                    </AppLayout>
                </AuthContainer>
            </ThemeProvider>
        </Provider>
    </StrictMode>,
);
