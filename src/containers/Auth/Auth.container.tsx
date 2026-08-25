import { useEffect, useState } from 'react';

import { setCredentials } from '@features';
import { useAppDispatch } from '@store';
import { getStoredToken, getStoredUser } from '@utils';

import type { AuthContainerProps } from './Auth.types';

export const AuthContainer = ({ children }: AuthContainerProps) => {
    const dispatch = useAppDispatch();
    const [isHydrated, setIsHydrated] = useState(false);

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

        setIsHydrated(true);
    }, [dispatch]);

    if (!isHydrated) {
        return null;
    }

    return children;
};
