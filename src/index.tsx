import { StrictMode } from 'react';

import { CssBaseline, ThemeProvider } from '@mui/material';

import { createRoot } from 'react-dom/client';

import { theme } from '@theme';

const rootElement = document.getElementById('root') as HTMLElement;

createRoot(rootElement).render(
    <StrictMode>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <h1>Sora</h1>
        </ThemeProvider>
    </StrictMode>,
);
