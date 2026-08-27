import { Button, Stack, Typography } from '@mui/material';

import { Link } from 'react-router-dom';

import { ROUTES } from '@constants';

export const NotFoundPage = () => (
    <Stack
        flex={1}
        width="100%"
        alignItems="center"
        justifyContent="center"
        gap={3}
        padding={3}
        textAlign="center"
    >
        <Typography
            variant="h1"
            fontWeight={700}
            fontSize="8rem"
            lineHeight={1}
        >
            404
        </Typography>

        <Stack gap={1}>
            <Typography variant="h4" fontWeight={700}>
                Page Not Found
            </Typography>

            <Typography color="text.secondary">
                The page you are looking for does not exist.
            </Typography>
        </Stack>

        <Button
            component={Link}
            to={ROUTES.HOME}
            variant="contained"
            size="large"
        >
            Go to Home
        </Button>
    </Stack>
);
