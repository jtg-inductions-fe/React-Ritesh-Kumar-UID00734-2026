import { Autocomplete, ListItem, Popper } from '@mui/material';
import { styled } from '@mui/material/styles';

import type { SearchAutocompleteUser } from './SearchAutocomplete.types';

export const StyledAutocomplete = styled(Autocomplete<SearchAutocompleteUser>)(
    ({ theme }) => ({
        width: '100%',

        '& .MuiOutlinedInput-root': {
            backgroundColor: theme.palette.background.paper,
            borderRadius: theme.shape.borderRadius * 4,

            '& fieldset': {
                borderColor: theme.palette.divider,
            },

            '&:hover fieldset': {
                borderColor: theme.palette.primary.main,
            },

            '&.Mui-focused fieldset': {
                borderColor: theme.palette.primary.main,
            },
        },
    }),
);

export const StyledPopper = styled(Popper)(({ theme }) => ({
    '& .MuiAutocomplete-paper': {
        marginTop: theme.spacing(2),
        backgroundColor: theme.palette.background.paper,
        border: `1px solid ${theme.palette.divider}`,
        borderRadius: theme.shape.borderRadius * 2,
        overflow: 'hidden',
    },

    '& .MuiAutocomplete-listbox': {
        maxHeight: theme.spacing(150),
        padding: theme.spacing(1),
    },
}));

export const StyledOption = styled(ListItem)(({ theme }) => ({
    gap: theme.spacing(2),
    padding: theme.spacing(2),
    borderRadius: theme.shape.borderRadius,

    '&:not(:last-child)': {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },

    '&[aria-selected="true"]': {
        backgroundColor: theme.palette.action.selected,
    },

    '&:hover': {
        backgroundColor: theme.palette.action.hover,
    },

    '& .MuiAvatar-root': {
        width: theme.spacing(10),
        height: theme.spacing(10),
    },
}));
