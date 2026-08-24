import {
    AlternateEmail,
    Group,
    LocationOn,
    PersonAddAlt,
    Public,
} from '@mui/icons-material';
import {
    Avatar,
    Box,
    Button,
    CircularProgress,
    Divider,
    Link,
    Stack,
    Typography,
} from '@mui/material';

import type { UserInfoProps } from './UserInfo.types';

export const UserInfo = ({
    details,
    loading,
    showFollowButton,
    isFollowing,
    isFollowLoading,
    onFollow,
}: UserInfoProps) => {
    if (loading) {
        return (
            <Stack
                width="70%"
                maxWidth="md"
                minHeight={420}
                marginTop={6}
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

    if (!details) {
        return null;
    }

    return (
        <Box
            component="section"
            width="70%"
            maxWidth="md"
            minHeight={420}
            marginTop={6}
            padding={6}
            bgcolor="background.paper"
            border={1}
            borderColor="divider"
            borderRadius={3}
        >
            <Stack direction="row" gap={7} height="100%">
                <Stack
                    flex={1}
                    alignItems="flex-start"
                    justifyContent="space-between"
                    gap={4}
                >
                    <Stack width="100%" alignItems="flex-start" gap={3}>
                        <Box width="100%" maxWidth={280}>
                            <Avatar
                                src={details.avatar_url}
                                alt={details.login}
                                sx={{
                                    width: '100%',
                                    height: 'auto',
                                    aspectRatio: '1 / 1',
                                    borderRadius: 2,
                                }}
                            />
                        </Box>

                        <Stack gap={1}>
                            <Typography variant="h4" fontWeight={700}>
                                {details.name || details.login}
                            </Typography>

                            <Typography
                                variant="h6"
                                color="text.secondary"
                                fontWeight={400}
                            >
                                @{details.login}
                            </Typography>
                        </Stack>

                        {details.location && (
                            <Stack
                                direction="row"
                                alignItems="center"
                                gap={1}
                                color="text.secondary"
                            >
                                <LocationOn fontSize="small" />

                                <Typography variant="body1">
                                    {details.location}
                                </Typography>
                            </Stack>
                        )}
                    </Stack>

                    {showFollowButton && (
                        <Button
                            variant="contained"
                            size="large"
                            fullWidth
                            disabled={isFollowing || isFollowLoading}
                            onClick={onFollow}
                        >
                            {isFollowLoading ? (
                                <CircularProgress size={24} color="inherit" />
                            ) : isFollowing ? (
                                'Following'
                            ) : (
                                'Follow'
                            )}
                        </Button>
                    )}
                </Stack>

                <Divider orientation="vertical" flexItem />

                <Stack flex={2} minWidth={0} gap={4}>
                    {details.bio && (
                        <Stack gap={1.5}>
                            <Typography
                                variant="overline"
                                color="text.secondary"
                                fontWeight={700}
                            >
                                About
                            </Typography>

                            <Typography
                                variant="body1"
                                color="text.primary"
                                lineHeight={1.8}
                            >
                                {details.bio}
                            </Typography>
                        </Stack>
                    )}

                    <Stack direction="row" gap={2}>
                        <Box
                            flex={1}
                            padding={3}
                            bgcolor="action.hover"
                            border={1}
                            borderColor="divider"
                            borderRadius={2}
                        >
                            <Stack gap={1.5}>
                                <Group color="primary" fontSize="large" />

                                <Typography variant="h4" fontWeight={700}>
                                    {details.followers}
                                </Typography>

                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                >
                                    Followers
                                </Typography>
                            </Stack>
                        </Box>

                        <Box
                            flex={1}
                            padding={3}
                            bgcolor="action.hover"
                            border={1}
                            borderColor="divider"
                            borderRadius={2}
                        >
                            <Stack gap={1.5}>
                                <PersonAddAlt
                                    color="secondary"
                                    fontSize="large"
                                />

                                <Typography variant="h4" fontWeight={700}>
                                    {details.following}
                                </Typography>

                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                >
                                    Following
                                </Typography>
                            </Stack>
                        </Box>
                    </Stack>

                    <Stack gap={2}>
                        <Typography
                            variant="overline"
                            color="text.secondary"
                            fontWeight={700}
                        >
                            Connect
                        </Typography>

                        {details.email && (
                            <Link
                                href={`mailto:${details.email}`}
                                underline="none"
                                color="inherit"
                            >
                                <Stack
                                    direction="row"
                                    alignItems="center"
                                    gap={2}
                                    padding={2}
                                    border={1}
                                    borderColor="divider"
                                    borderRadius={2}
                                    bgcolor="background.default"
                                >
                                    <AlternateEmail
                                        color="primary"
                                        fontSize="large"
                                    />

                                    <Stack minWidth={0}>
                                        <Typography
                                            variant="caption"
                                            color="text.secondary"
                                        >
                                            Email
                                        </Typography>

                                        <Typography
                                            variant="body2"
                                            overflow="hidden"
                                            textOverflow="ellipsis"
                                        >
                                            {details.email}
                                        </Typography>
                                    </Stack>
                                </Stack>
                            </Link>
                        )}

                        {details.blog && (
                            <Link
                                href={
                                    details.blog.startsWith('http')
                                        ? details.blog
                                        : `https://${details.blog}`
                                }
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
                                    border={1}
                                    borderColor="divider"
                                    borderRadius={2}
                                    bgcolor="background.default"
                                >
                                    <Public color="primary" fontSize="large" />

                                    <Stack minWidth={0}>
                                        <Typography
                                            variant="caption"
                                            color="text.secondary"
                                        >
                                            Website
                                        </Typography>

                                        <Typography
                                            variant="body2"
                                            overflow="hidden"
                                            textOverflow="ellipsis"
                                        >
                                            {details.blog}
                                        </Typography>
                                    </Stack>
                                </Stack>
                            </Link>
                        )}

                        <Link
                            href={details.html_url}
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
                                border={1}
                                borderColor="divider"
                                borderRadius={2}
                                bgcolor="background.default"
                            >
                                <Public color="primary" fontSize="large" />

                                <Stack minWidth={0}>
                                    <Typography
                                        variant="caption"
                                        color="text.secondary"
                                    >
                                        GitHub
                                    </Typography>

                                    <Typography variant="body2">
                                        View GitHub Profile
                                    </Typography>
                                </Stack>
                            </Stack>
                        </Link>
                    </Stack>
                </Stack>
            </Stack>
        </Box>
    );
};
