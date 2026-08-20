import { Box } from '@mui/material';

import type { AppLayoutProps } from './App.types';

export const AppLayout = ({ children }: AppLayoutProps) => (
    <Box component="main" maxWidth={1440} minHeight="100vh" margin="0 auto">
        {children}
    </Box>
);
