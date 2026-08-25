import { useState } from 'react';

import {
    Alert,
    Button,
    CircularProgress,
    Snackbar,
    Stack,
    TextField,
    Typography,
} from '@mui/material';

import { useNavigate } from 'react-router-dom';

import { ROUTES } from '@constants';
import { setCredentials } from '@features/auth/authSlice';
import { useLazyGetAuthenticatedUserQuery } from '@services/github/github.service';
import { useAppDispatch } from '@store';
import { saveAuthData } from '@utils/authStorage';

import type { LoginErrors, LoginFormValues } from './Login.types';

export const LoginContainer = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const [username, setUsername] = useState('');
    const [token, setToken] = useState('');
    const [errors, setErrors] = useState<LoginErrors>({});
    const [loginError, setLoginError] = useState<string>();

    const [authenticateUser, { isLoading }] =
        useLazyGetAuthenticatedUserQuery();

    const validate = (): LoginErrors => {
        const validationErrors: LoginErrors = {};

        if (!username.trim()) {
            validationErrors.username = 'Username is required.';
        }

        if (!token.trim()) {
            validationErrors.token = 'Personal access token is required.';
        }

        return validationErrors;
    };

    const handleUsernameChange = (
        event: React.ChangeEvent<HTMLInputElement>,
    ) => {
        const value = event.target.value;

        setUsername(value);

        if (errors.username) {
            setErrors((currentErrors) => ({
                ...currentErrors,
                username: undefined,
            }));
        }
    };

    const handleTokenChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;

        setToken(value);

        if (errors.token) {
            setErrors((currentErrors) => ({
                ...currentErrors,
                token: undefined,
            }));
        }
    };

    const handleLogin = async ({
        username: loginUsername,
        token: loginToken,
    }: LoginFormValues): Promise<void> => {
        setLoginError(undefined);

        try {
            const user = await authenticateUser(loginToken).unwrap();

            if (user.login.toLowerCase() !== loginUsername.toLowerCase()) {
                setLoginError(
                    'The GitHub username does not match the provided personal access token.',
                );

                return;
            }

            saveAuthData(user, loginToken);

            dispatch(
                setCredentials({
                    user,
                    token: loginToken,
                }),
            );

            void navigate(ROUTES.HOME);
        } catch {
            setLoginError('Invalid GitHub username or personal access token.');
        }
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const validationErrors = validate();

        setErrors(validationErrors);

        if (Object.keys(validationErrors).length > 0) {
            return;
        }

        void handleLogin({
            username: username.trim(),
            token: token.trim(),
        });
    };

    const handleCloseError = () => {
        setLoginError(undefined);
    };

    return (
        <>
            <Stack
                component="section"
                width="100%"
                flex={1}
                alignItems="center"
                justifyContent="center"
                padding={3}
            >
                <Stack
                    width="100%"
                    maxWidth="sm"
                    padding={6}
                    gap={3}
                    bgcolor="background.paper"
                    border={1}
                    borderColor="divider"
                    borderRadius={2}
                >
                    <Stack gap={1}>
                        <Typography variant="h4">Login</Typography>

                        <Typography variant="body2" color="text.secondary">
                            Sign in using your GitHub username and personal
                            access token.
                        </Typography>
                    </Stack>

                    <Stack
                        component="form"
                        gap={3}
                        onSubmit={handleSubmit}
                        noValidate
                    >
                        <TextField
                            label="GitHub Username"
                            placeholder="Enter your GitHub username"
                            value={username}
                            onChange={handleUsernameChange}
                            error={Boolean(errors.username)}
                            helperText={errors.username}
                            fullWidth
                            autoComplete="username"
                        />

                        <TextField
                            label="Personal Access Token"
                            placeholder="Enter your GitHub personal access token"
                            type="password"
                            value={token}
                            onChange={handleTokenChange}
                            error={Boolean(errors.token)}
                            helperText={errors.token}
                            fullWidth
                            autoComplete="current-password"
                        />

                        <Stack alignItems="flex-end">
                            <Button
                                type="submit"
                                variant="contained"
                                disabled={isLoading}
                                startIcon={
                                    isLoading ? (
                                        <CircularProgress
                                            size={18}
                                            color="inherit"
                                        />
                                    ) : undefined
                                }
                            >
                                {isLoading ? 'Logging in...' : 'Login'}
                            </Button>
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>

            <Snackbar
                open={Boolean(loginError)}
                autoHideDuration={4000}
                onClose={handleCloseError}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
            >
                <Alert severity="error" variant="filled">
                    {loginError}
                </Alert>
            </Snackbar>
        </>
    );
};
