import type { ReactNode } from 'react';

import { HeaderContainer } from '@containers/HeaderContainer/HeaderContainer';

import { AppContainerRoot } from './AppContainer.styles';

interface AppContainerProps {
    children: ReactNode;
}

export const AppContainer = ({ children }: AppContainerProps) => (
    <AppContainerRoot>
        <HeaderContainer />
        {children}
    </AppContainerRoot>
);
