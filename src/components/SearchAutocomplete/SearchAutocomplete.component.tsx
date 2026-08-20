import SearchIcon from '@mui/icons-material/Search';
import { Avatar, CircularProgress, TextField, Typography } from '@mui/material';

import {
    StyledAutocomplete,
    StyledOption,
    StyledPopper,
} from './SearchAutocomplete.styles';
import type { SearchAutocompleteProps } from './SearchAutocomplete.types';

export const SearchAutocomplete = ({
    query,
    users,
    loading,
    onQueryChange,
}: SearchAutocompleteProps) => (
    <StyledAutocomplete
        options={users}
        forcePopupIcon={false}
        loading={loading}
        inputValue={query}
        open={query.trim().length >= 1}
        noOptionsText="No users found"
        getOptionLabel={(option) => option.login}
        isOptionEqualToValue={(option, value) => option.id === value.id}
        onInputChange={(_, value, reason) => {
            if (
                reason === 'selectOption' ||
                reason === 'reset' ||
                reason === 'blur'
            ) {
                return;
            }

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
);
