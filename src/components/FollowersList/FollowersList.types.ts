import type { GitHubFollower } from '@services/github/github.service.types';

export interface FollowersListProps {
    followers?: GitHubFollower[];
    loading: boolean;
    error: boolean;
}
