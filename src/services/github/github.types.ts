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
