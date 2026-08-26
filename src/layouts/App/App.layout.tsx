import { Stack } from '@mui/material';

import { Outlet } from 'react-router-dom';

import { HeaderContainer } from '@containers';

export const AppLayout = () => (
    <Stack
        component="main"
        maxWidth={(theme) => theme.spacing(360)}
        minHeight="100vh"
        margin="0 auto"
    >
        <HeaderContainer />

        <Stack flex={1}>
            <Outlet />
        </Stack>
    </Stack>
);
