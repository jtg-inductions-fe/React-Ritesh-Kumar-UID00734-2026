import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { CssBaseline, ThemeProvider } from '@mui/material';

import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import { AuthContainer } from '@containers/Auth/Auth.container';
import { appRouter } from '@routes/App.route';
import { store } from '@store';
import { theme } from '@theme';

const rootElement = document.getElementById('root') as HTMLElement;

createRoot(rootElement).render(
    <StrictMode>
        <Provider store={store}>
            <AuthContainer>
                <ThemeProvider theme={theme}>
                    <CssBaseline />

                    <RouterProvider router={appRouter} />
                </ThemeProvider>
            </AuthContainer>
        </Provider>
    </StrictMode>,
);
