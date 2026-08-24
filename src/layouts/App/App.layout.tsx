import { Box } from '@mui/material';

import { Outlet } from 'react-router-dom';

import { HeaderLayout } from '@layouts/Header/Header.layout';

export const AppLayout = () => (
    <Box
        component="main"
        maxWidth={(theme) => theme.spacing(360)}
        minHeight="100vh"
        margin="0 auto"
    >
        <HeaderLayout />

        <Outlet />
    </Box>
);
