import { useState } from 'react';

import {
    Box,
    Button,
    CircularProgress,
    Stack,
    TextField,
    Typography,
} from '@mui/material';

import type { LoginErrors, LoginProps } from './Login.types';

export const Login = ({ loading = false, onSubmit }: LoginProps) => {
    const [username, setUsername] = useState('');
    const [token, setToken] = useState('');
    const [errors, setErrors] = useState<LoginErrors>({});

    const validate = (): LoginErrors => {
        const validationErrors: LoginErrors = {};

        const trimmedUsername = username.trim();
        const trimmedToken = token.trim();

        if (!trimmedUsername) {
            validationErrors.username = 'Username is required.';
        }

        if (!trimmedToken) {
            validationErrors.token = 'Personal access token is required.';
        }

        return validationErrors;
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const validationErrors = validate();

        setErrors(validationErrors);

        if (Object.keys(validationErrors).length > 0) {
            return;
        }

        void onSubmit({
            username: username.trim(),
            token: token.trim(),
        });
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

    return (
        <Box
            component="section"
            width="100%"
            minHeight="100vh"
            display="flex"
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
                        Sign in using your GitHub username and personal access
                        token.
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
                            disabled={loading}
                            startIcon={
                                loading ? (
                                    <CircularProgress
                                        size={18}
                                        color="inherit"
                                    />
                                ) : undefined
                            }
                        >
                            {loading ? 'Logging in...' : 'Login'}
                        </Button>
                    </Stack>
                </Stack>
            </Stack>
        </Box>
    );
};
