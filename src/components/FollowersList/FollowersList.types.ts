import type { GitHubUser } from '@_types';

export interface FollowersListProps {
    followers?: GitHubUser[];
    loading: boolean;
    error: boolean;
}
