export interface GitHubUserSearchItem {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    user_view_type: string;
    site_admin: boolean;
    score: number;
}

export interface GitHubUserSearchResponse {
    total_count: number;
    incomplete_results: boolean;
    items: GitHubUserSearchItem[];
}

export interface GitHubUserDetails {
    id: number;
    login: string;
    avatar_url: string;
    html_url: string;
    name: string | null;
    location: string | null;
    bio: string | null;
    blog: string;
    email: string | null;
    followers: number;
    following: number;
}
