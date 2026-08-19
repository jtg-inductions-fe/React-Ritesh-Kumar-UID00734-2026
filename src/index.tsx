import { StrictMode } from 'react';

import { CssBaseline, ThemeProvider } from '@mui/material';

import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import { AppContainer } from '@containers/AppContainer/AppContainer';
import { SearchContainer } from '@containers/SearchContainer/SearchContainer';
import { store } from '@store';
import { theme } from '@theme';

const rootElement = document.getElementById('root') as HTMLElement;

createRoot(rootElement).render(
    <StrictMode>
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <AppContainer>
                    <SearchContainer />
                </AppContainer>
            </ThemeProvider>
        </Provider>
    </StrictMode>,
);
