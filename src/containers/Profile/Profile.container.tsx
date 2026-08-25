import { Stack, Typography } from '@mui/material';

import { UserInfo } from '@components';
import { useAppSelector } from '@store';

export const ProfileContainer = () => {
    const user = useAppSelector((state) => state.auth.user);

    return (
        <Stack width="100%" alignItems="center" padding={12}>
            <Typography variant="h1" width="70%" maxWidth="md">
                My Profile
            </Typography>

            <UserInfo details={user ?? undefined} loading={false} />
        </Stack>
    );
};
