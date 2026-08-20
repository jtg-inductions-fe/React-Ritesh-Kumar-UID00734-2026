import type { GitHubUserSearchItem } from '@services/github/github.service.types';

export type SearchAutocompleteOption = Pick<
    GitHubUserSearchItem,
    'id' | 'login' | 'avatar_url'
>;

export interface SearchAutocompleteProps {
    value: string;
    options: SearchAutocompleteOption[];
    loading: boolean;
    open: boolean;
    onInputChange: (
        event: React.SyntheticEvent,
        value: string,
        reason: string,
    ) => void;
    onChange: (
        event: React.SyntheticEvent,
        option: SearchAutocompleteOption | null,
    ) => void;
    onOpen: () => void;
    onClose: () => void;
    onKeyDown: (event: React.KeyboardEvent<HTMLDivElement>) => void;
}
