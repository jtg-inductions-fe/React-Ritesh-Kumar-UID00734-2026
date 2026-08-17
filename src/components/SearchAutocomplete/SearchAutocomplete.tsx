import { useState } from 'react';

import SearchIcon from '@mui/icons-material/Search';
import type { AutocompleteInputChangeReason } from '@mui/material';
import {
    Alert,
    Avatar,
    CircularProgress,
    Snackbar,
    TextField,
    Typography,
} from '@mui/material';

import type { GitHubUser } from '@services/github/github.types';

import {
    StyledAutocomplete,
    StyledOption,
    StyledPopper,
} from './SearchAutocomplete.styles';

interface SearchAutocompleteProps {
    query: string;
    users: GitHubUser[];
    loading: boolean;
    error?: unknown;
    onQueryChange: (query: string) => void;
    onUserSelect: (username: string) => void;
}

export const SearchAutocomplete = ({
    query,
    users,
    loading,
    error,
    onQueryChange,
    onUserSelect,
}: SearchAutocompleteProps) => {
    const [open, setOpen] = useState(false);

    const handleUserSelect = (username: string) => {
        setOpen(false);
        onUserSelect(username);
    };

    const handleInputChange = (
        value: string,
        reason: AutocompleteInputChangeReason,
    ) => {
        if (reason !== 'input' && reason !== 'clear') {
            return;
        }

        onQueryChange(value);

        setOpen(value.trim().length >= 1);
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key !== 'Enter') {
            return;
        }

        const username = query.trim();

        if (!username) {
            return;
        }

        setOpen(false);
        onUserSelect(username);
    };

    return (
        <>
            <StyledAutocomplete
                options={users}
                forcePopupIcon={false}
                loading={loading}
                inputValue={query}
                open={open}
                noOptionsText="No users found"
                getOptionLabel={(option) => option.login}
                isOptionEqualToValue={(option, value) => option.id === value.id}
                onInputChange={(_, value, reason) => {
                    handleInputChange(value, reason);
                }}
                onChange={(_, value) => {
                    if (value) {
                        handleUserSelect(value.login);
                    }
                }}
                onKeyDown={handleKeyDown}
                onClose={() => {
                    setOpen(false);
                }}
                slots={{
                    popper: StyledPopper,
                }}
                renderOption={(props, user) => (
                    <StyledOption {...props} key={user.id}>
                        <Avatar src={user.avatar_url} alt={user.login} />

                        <Typography variant="body1">{user.login}</Typography>
                    </StyledOption>
                )}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label="Search GitHub users"
                        placeholder="Search users..."
                        slotProps={{
                            input: {
                                ...params.InputProps,
                                endAdornment: (
                                    <>
                                        {loading ? (
                                            <CircularProgress size={20} />
                                        ) : (
                                            <SearchIcon />
                                        )}

                                        {params.InputProps.endAdornment}
                                    </>
                                ),
                            },
                        }}
                    />
                )}
            />

            <Snackbar
                open={Boolean(error)}
                autoHideDuration={4000}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
            >
                <Alert severity="error" variant="filled">
                    Failed to search GitHub users. Please try again.
                </Alert>
            </Snackbar>
        </>
    );
};
