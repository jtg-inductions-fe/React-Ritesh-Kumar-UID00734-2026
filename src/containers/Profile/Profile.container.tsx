import { ArrowBack } from '@mui/icons-material';
import { Button, Stack, Typography } from '@mui/material';

import { useNavigate } from 'react-router-dom';

import { UserInfo } from '@components';
import { ROUTES } from '@constants';
import { useAppSelector } from '@store';

export const ProfileContainer = () => {
    const user = useAppSelector((state) => state.auth.user);
    const navigate = useNavigate();

    const handleBack = () => {
        void navigate(ROUTES.HOME);
    };

    return (
        <Stack width="100%" alignItems="center" padding={12}>
            <Stack
                width="70%"
                maxWidth="md"
                marginBottom={3}
                alignItems="flex-start"
            >
                <Button
                    variant="outlined"
                    startIcon={<ArrowBack />}
                    onClick={handleBack}
                >
                    Back
                </Button>
            </Stack>

            <Typography variant="h1" width="70%" maxWidth="md">
                My Profile
            </Typography>

            <UserInfo details={user ?? undefined} loading={false} />
        </Stack>
    );
};
