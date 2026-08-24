import { Box } from '@mui/material';

import { Outlet } from 'react-router-dom';

import { HeaderContainer } from '@containers/Header/Header.container';

export const AppLayout = () => (
    <Box
        component="main"
        maxWidth={(theme) => theme.spacing(360)}
        minHeight="100vh"
        margin="0 auto"
    >
        <HeaderContainer />

        <Outlet />
    </Box>
);
