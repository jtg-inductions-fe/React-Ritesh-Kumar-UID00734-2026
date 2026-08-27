import type { GitHubUserDetails } from '@_types';

export interface UserInfoProps {
    details?: Pick<
        GitHubUserDetails,
        | 'id'
        | 'login'
        | 'avatar_url'
        | 'html_url'
        | 'name'
        | 'location'
        | 'bio'
        | 'blog'
        | 'email'
        | 'followers'
        | 'following'
    >;
    loading: boolean;
}
