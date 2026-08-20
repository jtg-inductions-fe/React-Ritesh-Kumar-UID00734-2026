export interface SearchAutocompleteOption {
    id: number;
    label: string;
    avatarUrl: string;
}

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
        value: SearchAutocompleteOption | null,
    ) => void;
    onOpen: () => void;
    onClose: () => void;
    onKeyDown: React.KeyboardEventHandler<HTMLDivElement>;
}
