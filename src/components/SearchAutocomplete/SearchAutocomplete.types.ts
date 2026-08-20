import type { SerializedError } from '@reduxjs/toolkit';

import type { AxiosBaseQueryError } from '@services/api/axios.types';

export interface SearchAutocompleteProps {
    query: string;
    users: SearchAutocompleteUser[];
    loading: boolean;
    error?: AxiosBaseQueryError | SerializedError;
    onQueryChange: (query: string) => void;
}

export interface SearchAutocompleteUser {
    id: number;
    login: string;
    avatar_url: string;
}
