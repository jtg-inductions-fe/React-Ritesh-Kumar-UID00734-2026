import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';

export const LoginPageRoot = styled('section')(({ theme }) => ({
    width: '100%',
    minHeight: '100vh',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    padding: theme.spacing(3),
}));

export const LoginRoot = styled('section')(({ theme }) => ({
    width: '100%',
    maxWidth: theme.breakpoints.values.sm,

    padding: theme.spacing(6),

    backgroundColor: theme.palette.background.paper,
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: theme.shape.borderRadius * 2,

    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(3),
}));

export const LoginHeader = styled('header')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(1),
}));

export const LoginForm = styled('form')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(3),
}));

export const LoginActions = styled('div')(({ theme }) => ({
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: theme.spacing(1),
}));

export const LoginTextField = styled(TextField)(({ theme }) => ({
    '& .MuiOutlinedInput-root': {
        '& .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.divider,
        },

        '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.text.secondary,
        },

        '&.Mui-error.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.error.main,
        },

        '& input:-webkit-autofill': {
            WebkitBoxShadow: `0 0 0 1000px ${theme.palette.background.paper} inset`,
            WebkitTextFillColor: theme.palette.text.primary,
            caretColor: theme.palette.text.primary,
        },
    },
}));
