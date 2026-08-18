import { StrictMode } from 'react';

import { CssBaseline, ThemeProvider } from '@mui/material';

import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { AppContainer } from '@containers/AppContainer/AppContainer';
import { AuthContainer } from '@containers/AuthContainer/AuthContainer';
import { AppRoutes } from '@routes/AppRoutes';
import { store } from '@store';
import { theme } from '@theme';

const rootElement = document.getElementById('root') as HTMLElement;

createRoot(rootElement).render(
    <StrictMode>
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <CssBaseline />

                <BrowserRouter>
                    <AuthContainer>
                        <AppContainer>
                            <AppRoutes />
                        </AppContainer>
                    </AuthContainer>
                </BrowserRouter>
            </ThemeProvider>
        </Provider>
    </StrictMode>,
);
