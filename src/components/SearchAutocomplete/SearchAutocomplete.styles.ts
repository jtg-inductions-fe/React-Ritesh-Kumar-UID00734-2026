import { Autocomplete, ListItem, Popper } from '@mui/material';
import { styled } from '@mui/material/styles';

import type { GitHubUser } from '@services/github/github.types';

export const StyledAutocomplete = styled(Autocomplete<GitHubUser>)(
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
        maxHeight: 600,
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
        width: 40,
        height: 40,
    },
}));
