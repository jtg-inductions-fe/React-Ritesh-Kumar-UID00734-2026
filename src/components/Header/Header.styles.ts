import { AppBar, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const HeaderRoot = styled(Box)(() => ({
    width: '100%',
}));

export const HeaderAppBar = styled(AppBar)(({ theme }) => ({
    width: '100%',

    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: theme.spacing(2, 3),
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary,
    border: `1px solid ${theme.palette.divider}`,
    borderTop: 'none',
    borderBottomLeftRadius: theme.shape.borderRadius * 2,
    borderBottomRightRadius: theme.shape.borderRadius * 2,
}));

export const HeaderBrandButton = styled('button')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(1.5),
    border: 'none',
    background: 'transparent',
    color: 'inherit',
    cursor: 'pointer',
    textAlign: 'left',
    '&:focus-visible': {
        outline: `2px solid ${theme.palette.primary.main}`,
        borderRadius: theme.shape.borderRadius,
    },
}));

export const HeaderBrand = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(1.5),
}));

export const HeaderLogo = styled('img')(() => ({
    width: 36,
    height: 36,
    display: 'block',
    objectFit: 'contain',
}));

export const HeaderBrandText = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: theme.spacing(0.25),
}));

export const HeaderActions = styled(Box)(() => ({
    display: 'flex',
    alignItems: 'center',
}));
