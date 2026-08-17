import { styled } from '@mui/material/styles';

export const UserInfoRoot = styled('section')(({ theme }) => ({
    width: '70%',
    maxWidth: theme.breakpoints.values.md,
    minHeight: 220,
    marginTop: theme.spacing(6),
    padding: theme.spacing(4),

    backgroundColor: theme.palette.background.paper,
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: theme.shape.borderRadius * 2,

    boxSizing: 'border-box',
}));

export const UserInfoLoading = styled(UserInfoRoot)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
});

export const UserInfoHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(2),
}));

export const UserAvatar = styled('img')({
    width: 80,
    height: 80,
    borderRadius: '50%',
    objectFit: 'cover',
});

export const UserDetails = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(0.5),
}));

export const UserBio = styled('div')(({ theme }) => ({
    marginTop: theme.spacing(3),
}));

export const UserMetadata = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(1.5),
    marginTop: theme.spacing(3),
}));

export const UserMetadataItem = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(1),

    color: theme.palette.text.secondary,
}));

export const MetadataIcon = styled('span')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    color: theme.palette.text.secondary,

    '& svg': {
        fontSize: theme.typography.pxToRem(18),
    },
}));

export const UserLinks = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(1),
    marginTop: theme.spacing(3),
}));

export const UserLink = styled('a')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(1),

    width: 'fit-content',

    color: theme.palette.secondary.main,
    textDecoration: 'none',

    '&:hover': {
        textDecoration: 'underline',
    },
}));

export const LinkIcon = styled('span')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',

    '& svg': {
        fontSize: theme.typography.pxToRem(18),
    },
}));
