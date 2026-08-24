import { ArrowBack } from '@mui/icons-material';
import { Button, Stack, Typography } from '@mui/material';

import { FollowersList } from '@components/FollowersList/FollowersList.component';
import { UserInfo } from '@components/UserInfo/UserInfo.component';
import { useGetUserFollowersQuery } from '@services/github/github.service';
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

    const handleBack = () => {
        window.history.back();
    };

    return (
        <Stack width="100%" alignItems="center" padding={12}>
            <Stack
                width="70%"
                maxWidth="md"
                alignItems="flex-start"
                marginBottom={2}
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
