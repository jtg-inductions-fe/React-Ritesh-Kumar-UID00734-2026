import { styled } from '@mui/material/styles';

export const SearchSection = styled('section')(({ theme }) => ({
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(12, 2),
}));

export const SearchHeading = styled('h1')(({ theme }) => ({
    width: '70%',
    maxWidth: theme.breakpoints.values.md,
    marginBottom: theme.spacing(4),
    color: theme.palette.text.primary,
}));

export const SearchInputContainer = styled('div')(({ theme }) => ({
    width: '70%',
    maxWidth: theme.breakpoints.values.md,
}));
