import { Box } from '@mui/material';

import { Outlet } from 'react-router-dom';

import { HeaderLayout } from '@layouts/Header/Header.layout';

export const AppLayout = () => (
    <Box component="main" maxWidth={1440} minHeight="100vh" margin="0 auto">
        <HeaderLayout />

        <Outlet />
    </Box>
);
