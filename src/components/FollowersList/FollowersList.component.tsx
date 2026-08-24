import {
    Alert,
    Avatar,
    Box,
    CircularProgress,
    Link,
    Stack,
    Typography,
} from '@mui/material';

import type { FollowersListProps } from './FollowersList.types';

export const FollowersList = ({
    followers,
    loading,
    error,
}: FollowersListProps) => {
    if (loading) {
        return (
            <Stack
                width="70%"
                maxWidth="md"
                padding={6}
                alignItems="center"
                justifyContent="center"
                bgcolor="background.paper"
                border={1}
                borderColor="divider"
                borderRadius={3}
            >
                <CircularProgress />
            </Stack>
        );
    }

    if (error) {
        return (
            <Box width="70%" maxWidth="md">
                <Alert severity="error">
                    Failed to load followers. Please try again.
                </Alert>
            </Box>
        );
    }

    if (!followers?.length) {
        return (
            <Stack
                width="70%"
                maxWidth="md"
                padding={6}
                alignItems="center"
                bgcolor="background.paper"
                border={1}
                borderColor="divider"
                borderRadius={3}
            >
                <Typography color="text.secondary">
                    This user has no followers.
                </Typography>
            </Stack>
        );
    }

    return (
        <Stack width="70%" maxWidth="md" gap={2} marginY={6}>
            <Typography variant="h4" fontWeight={700}>
                Followers
            </Typography>

            <Stack gap={1.5}>
                {followers.map((follower) => (
                    <Link
                        key={follower.id}
                        href={follower.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        underline="none"
                        color="inherit"
                    >
                        <Stack
                            direction="row"
                            alignItems="center"
                            gap={2}
                            padding={2}
                            bgcolor="action.hover"
                            border={1}
                            borderColor="divider"
                            borderRadius={2}
                            sx={{
                                transition: 'background-color 0.2s ease',
                                '&:hover': {
                                    bgcolor: 'action.selected',
                                },
                            }}
                        >
                            <Avatar
                                src={follower.avatar_url}
                                alt={follower.login}
                            />

                            <Typography variant="body1" fontWeight={600}>
                                @{follower.login}
                            </Typography>
                        </Stack>
                    </Link>
                ))}
            </Stack>
        </Stack>
    );
};
