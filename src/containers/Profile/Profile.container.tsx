import { Stack, Typography } from '@mui/material';

import { FollowersList, UserInfo } from '@components';
import { useGetUserFollowersQuery } from '@services';
import { useAppSelector } from '@store';

export const ProfileContainer = () => {
    const user = useAppSelector((state) => state.auth.user);

    const username = user?.login ?? '';

    const {
        data: followers,
        isLoading,
        isFetching,
        isError,
    } = useGetUserFollowersQuery(username, {
        skip: !username,
    });

    return (
        <Stack width="100%" alignItems="center" padding={12}>
            <Typography variant="h1" width="70%" maxWidth="md">
                My Profile
            </Typography>

            <UserInfo
                details={user ?? undefined}
                loading={false}
                showFollowButton={false}
            />

            <FollowersList
                followers={followers}
                loading={isLoading || isFetching}
                error={isError}
            />
        </Stack>
    );
};
