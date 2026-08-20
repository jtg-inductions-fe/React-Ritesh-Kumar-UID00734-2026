import { type ReactNode, useEffect } from 'react';

import { setCredentials } from '@features/auth/authSlice';
import { useAppDispatch } from '@store';
import { getStoredToken, getStoredUser } from '@utils/authStorage';

interface AuthContainerProps {
    children: ReactNode;
}

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
