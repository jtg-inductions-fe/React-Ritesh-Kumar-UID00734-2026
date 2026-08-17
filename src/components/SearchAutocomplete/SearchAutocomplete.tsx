import SearchIcon from '@mui/icons-material/Search';
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
}

export const SearchAutocomplete = ({
    query,
    users,
    loading,
    error,
    onQueryChange,
}: SearchAutocompleteProps) => (
    <>
        <StyledAutocomplete
            options={users}
            forcePopupIcon={false}
            loading={loading}
            inputValue={query}
            open={query.trim().length >= 1}
            noOptionsText="No users found"
            getOptionLabel={(option) => option.login}
            isOptionEqualToValue={(option, value) => option.id === value.id}
            onInputChange={(_, value) => {
                onQueryChange(value);
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
