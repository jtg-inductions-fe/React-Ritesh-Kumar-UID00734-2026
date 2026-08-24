import { Box } from '@mui/material';

import type { AppLayoutProps } from './App.types';

export const AppLayout = ({ children }: AppLayoutProps) => (
    <Box
        component="main"
        maxWidth={(theme) => theme.spacing(360)}
        minHeight="100vh"
        margin="0 auto"
    >
        {children}
    </Box>
);
