import { useState } from 'react';

import { Alert, Snackbar } from '@mui/material';

import { useNavigate } from 'react-router-dom';

import { Login } from '@components/Login/Login.component';
import type { LoginFormValues } from '@components/Login/Login.types';
import { setCredentials } from '@features/auth/authSlice';
import { useLazyGetAuthenticatedUserQuery } from '@services/github/github.service';
import { useAppDispatch } from '@store';
import { saveAuthData } from '@utils/authStorage';

export const LoginContainer = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const [loginError, setLoginError] = useState<string>();

    const [authenticateUser, { isLoading }] =
        useLazyGetAuthenticatedUserQuery();

    const handleLogin = async ({
        username,
        token,
    }: LoginFormValues): Promise<void> => {
        setLoginError(undefined);

        try {
            const user = await authenticateUser(token).unwrap();

            if (user.login.toLowerCase() !== username.toLowerCase()) {
                setLoginError(
                    'The GitHub username does not match the provided personal access token.',
                );

                return;
            }

            saveAuthData(user, token);

            dispatch(
                setCredentials({
                    user,
                    token,
                }),
            );

            void navigate('/');
        } catch {
            setLoginError('Invalid GitHub username or personal access token.');
        }
    };

    return (
        <>
            <Login loading={isLoading} onSubmit={handleLogin} />

            <Snackbar
                open={Boolean(loginError)}
                autoHideDuration={4000}
                onClose={() => setLoginError(undefined)}
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
