export interface UserDetails {
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

export interface UserInfoProps {
    details?: UserDetails;
    loading: boolean;
}
