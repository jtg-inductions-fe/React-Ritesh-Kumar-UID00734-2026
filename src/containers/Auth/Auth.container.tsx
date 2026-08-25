import { useEffect } from 'react';

import { setCredentials } from '@features/auth/authSlice';
import { useAppDispatch } from '@store';
import { getStoredToken, getStoredUser } from '@utils/authStorage';

import type { AuthContainerProps } from './Auth.types';

export const AuthContainer = ({ children }: AuthContainerProps) => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        const user = getStoredUser();
        const token = getStoredToken();

        if (user && token) {
            dispatch(
                setCredentials({
                    user,
                    token,
                }),
            );
        }
    }, [dispatch]);

    return children;
};
