import type { AuthState } from '@features';

import { getStoredToken, getStoredUser } from '@utils';

export interface PreloadedState {
    auth: AuthState;
}

export const getPreloadedState = (): PreloadedState => {
    const user = getStoredUser();
    const token = getStoredToken();

    return {
        auth: {
            user,
            token,
            isAuthenticated: Boolean(user && token),
        },
    };
};
