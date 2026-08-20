import SearchIcon from '@mui/icons-material/Search';
import { Avatar, CircularProgress, TextField, Typography } from '@mui/material';

import {
    StyledAutocomplete,
    StyledOption,
    StyledPopper,
} from './SearchAutocomplete.styles';
import type { SearchAutocompleteProps } from './SearchAutocomplete.types';

export const SearchAutocomplete = ({
    value,
    options,
    loading,
    open,
    onInputChange,
    onChange,
    onOpen,
    onClose,
    onKeyDown,
}: SearchAutocompleteProps) => (
    <StyledAutocomplete
        options={options}
        forcePopupIcon={false}
        loading={loading}
        inputValue={value}
        open={open}
        noOptionsText="No users found"
        getOptionLabel={(option) => option.label}
        isOptionEqualToValue={(option, selectedOption) =>
            option.id === selectedOption.id
        }
        onInputChange={onInputChange}
        onChange={onChange}
        onOpen={onOpen}
        onClose={onClose}
        onKeyDown={onKeyDown}
        slots={{
            popper: StyledPopper,
        }}
        renderOption={(props, option) => (
            <StyledOption {...props} key={option.id}>
                <Avatar src={option.avatarUrl} alt={option.label} />

                <Typography variant="body1">{option.label}</Typography>
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
