import type { SerializedError } from '@reduxjs/toolkit';

import type { AxiosBaseQueryError } from '@services/api/axios.types';
import type { GitHubUserSearchItem } from '@services/github/github.service.types';

export type SearchAutocompleteOption = Pick<
    GitHubUserSearchItem,
    'id' | 'login' | 'avatar_url'
>;

export interface SearchAutocompleteProps {
    query: string;
    users: SearchAutocompleteOption[];
    loading: boolean;
    error?: AxiosBaseQueryError | SerializedError;
    onQueryChange: (query: string) => void;
}
