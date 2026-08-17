import {
    AlternateEmail,
    Group,
    LocationOn,
    PersonAddAlt,
    Public,
} from '@mui/icons-material';
import { CircularProgress, Snackbar, Typography } from '@mui/material';

import type { GitHubUserDetails } from '@services/github/github.types';

import {
    LinkIcon,
    MetadataIcon,
    UserAvatar,
    UserBio,
    UserDetails,
    UserInfoHeader,
    UserInfoLoading,
    UserInfoRoot,
    UserLink,
    UserLinks,
    UserMetadata,
    UserMetadataItem,
} from './UserInfo.styles';

interface UserInfoProps {
    user?: GitHubUserDetails;
    loading: boolean;
    error?: unknown;
}

export const UserInfo = ({ user, loading, error }: UserInfoProps) => {
    if (loading) {
        return (
            <UserInfoLoading>
                <CircularProgress />
            </UserInfoLoading>
        );
    }

    if (!user) {
        return (
            <Snackbar
                open={Boolean(error)}
                autoHideDuration={4000}
                message="Failed to load user details. Please try again."
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
            />
        );
    }

    return (
        <>
            <UserInfoRoot>
                <UserInfoHeader>
                    <UserAvatar src={user.avatar_url} alt={user.login} />

                    <UserDetails>
                        <Typography variant="h5">
                            {user.name || user.login}
                        </Typography>

                        <Typography variant="body1">@{user.login}</Typography>
                    </UserDetails>
                </UserInfoHeader>

                {user.bio && (
                    <UserBio>
                        <Typography variant="body1">{user.bio}</Typography>
                    </UserBio>
                )}

                <UserMetadata>
                    {user.location && (
                        <UserMetadataItem>
                            <MetadataIcon>
                                <LocationOn />
                            </MetadataIcon>

                            <Typography variant="body2">
                                {user.location}
                            </Typography>
                        </UserMetadataItem>
                    )}

                    <UserMetadataItem>
                        <MetadataIcon>
                            <Group />
                        </MetadataIcon>

                        <Typography variant="body2">
                            {user.followers} followers
                        </Typography>
                    </UserMetadataItem>

                    <UserMetadataItem>
                        <MetadataIcon>
                            <PersonAddAlt />
                        </MetadataIcon>

                        <Typography variant="body2">
                            {user.following} following
                        </Typography>
                    </UserMetadataItem>

                    {user.email && (
                        <UserMetadataItem>
                            <MetadataIcon>
                                <AlternateEmail />
                            </MetadataIcon>

                            <Typography variant="body2">
                                {user.email}
                            </Typography>
                        </UserMetadataItem>
                    )}
                </UserMetadata>

                <UserLinks>
                    {user.blog && (
                        <UserLink
                            href={
                                user.blog.startsWith('http')
                                    ? user.blog
                                    : `https://${user.blog}`
                            }
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <LinkIcon>
                                <Public />
                            </LinkIcon>

                            <Typography variant="body2">{user.blog}</Typography>
                        </UserLink>
                    )}

                    <UserLink
                        href={user.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <LinkIcon>
                            <Public />
                        </LinkIcon>

                        <Typography variant="body2">
                            View GitHub Profile
                        </Typography>
                    </UserLink>
                </UserLinks>
            </UserInfoRoot>

            <Snackbar
                open={Boolean(error)}
                autoHideDuration={4000}
                message="Failed to load user details. Please try again."
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
            />
        </>
    );
};
