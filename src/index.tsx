import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { CssBaseline, ThemeProvider } from '@mui/material';

import { Provider } from 'react-redux';

import { SearchContainer } from '@containers/Search/Search.container';
import { AppLayout } from '@layouts/App/App.layout';
import { store } from '@store';
import { theme } from '@theme';

const rootElement = document.getElementById('root') as HTMLElement;

createRoot(rootElement).render(
    <StrictMode>
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <AppLayout>
                    <SearchContainer />
                </AppLayout>
            </ThemeProvider>
        </Provider>
    </StrictMode>,
);
