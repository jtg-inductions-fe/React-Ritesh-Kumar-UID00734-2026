import { useState } from 'react';

import { Alert, Button, Snackbar, Typography } from '@mui/material';

import {
    LoginActions,
    LoginForm,
    LoginHeader,
    LoginPageRoot,
    LoginRoot,
    LoginTextField,
} from './Login.styles';

interface LoginFormValues {
    username: string;
    token: string;
}

interface LoginProps {
    loading?: boolean;
    error?: string;
    onSubmit: (values: LoginFormValues) => Promise<void> | void;
}

interface LoginErrors {
    username?: string;
    token?: string;
}

export const Login = ({ loading = false, error, onSubmit }: LoginProps) => {
    const [username, setUsername] = useState('');
    const [token, setToken] = useState('');

    const [errors, setErrors] = useState<LoginErrors>({});

    const validate = (): LoginErrors => {
        const validationErrors: LoginErrors = {};

        const trimmedUsername = username.trim();
        const trimmedToken = token.trim();

        if (!trimmedUsername) {
            validationErrors.username = 'Username is required.';
        } else if (trimmedUsername.length < 3) {
            validationErrors.username =
                'Username must be at least 3 characters.';
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

        const result = onSubmit({
            username: username.trim(),
            token: token.trim(),
        });

        if (result instanceof Promise) {
            result.catch(() => {});
        }
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
        <LoginPageRoot>
            <LoginRoot>
                <LoginHeader>
                    <Typography variant="h4">Login</Typography>

                    <Typography variant="body2" color="text.secondary">
                        Sign in using your GitHub username and personal access
                        token.
                    </Typography>
                </LoginHeader>

                <LoginForm onSubmit={handleSubmit} noValidate>
                    <LoginTextField
                        label="GitHub Username"
                        placeholder="Enter your GitHub username"
                        value={username}
                        onChange={handleUsernameChange}
                        error={Boolean(errors.username)}
                        helperText={errors.username}
                        fullWidth
                        autoComplete="username"
                    />

                    <LoginTextField
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

                    <LoginActions>
                        <Button
                            type="submit"
                            variant="contained"
                            disabled={loading}
                        >
                            {loading ? 'Logging in...' : 'Login'}
                        </Button>
                    </LoginActions>
                </LoginForm>
            </LoginRoot>

            <Snackbar
                open={Boolean(error)}
                autoHideDuration={4000}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
            >
                <Alert severity="error" variant="filled">
                    {error}
                </Alert>
            </Snackbar>
        </LoginPageRoot>
    );
};
