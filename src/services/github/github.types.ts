export interface GitHubUser {
    id: number;
    login: string;
    avatar_url: string;
    location?: string | null;
}

export interface GitHubUserSearchResponse {
    total_count: number;
    incomplete_results: boolean;
    items: GitHubUser[];
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
