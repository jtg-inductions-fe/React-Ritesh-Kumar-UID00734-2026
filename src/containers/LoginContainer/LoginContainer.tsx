import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { Login } from '@components/Login/Login';
import { setCredentials } from '@features/auth/authSlice';
import { useLazyGetAuthenticatedUserQuery } from '@services/github/githubApi';
import { useAppDispatch } from '@store';
import { saveAuthData } from '@utils/authStorage';

interface LoginFormValues {
    username: string;
    token: string;
}

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

            void navigate('/search');
        } catch {
            setLoginError('Invalid GitHub username or personal access token.');
        }
    };

    return (
        <Login loading={isLoading} error={loginError} onSubmit={handleLogin} />
    );
};
