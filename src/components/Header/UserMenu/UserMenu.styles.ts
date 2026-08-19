import { Avatar, Box, Popover } from '@mui/material';
import { styled } from '@mui/material/styles';

export const UserMenuRoot = styled(Popover)(({ theme }) => ({
    '& .MuiPaper-root': {
        width: 320,
        marginTop: theme.spacing(4),
        backgroundColor: theme.palette.background.default,
        border: `1px solid ${theme.palette.divider}`,
        borderRadius: theme.shape.borderRadius * 2,
        overflow: 'hidden',
    },
}));

export const UserMenuContent = styled(Box)(({ theme }) => ({
    width: '100%',
    padding: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2),
}));

export const UserMenuHeader = styled(Box)(() => ({
    display: 'flex',
    justifyContent: 'flex-end',
}));

export const UserMenuInfo = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: theme.spacing(1),
    textAlign: 'center',
    overflow: 'hidden',
}));

export const UserMenuAvatar = styled(Avatar)(() => ({
    width: 64,
    height: 64,
}));

export const UserMenuActions = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(1),
}));
