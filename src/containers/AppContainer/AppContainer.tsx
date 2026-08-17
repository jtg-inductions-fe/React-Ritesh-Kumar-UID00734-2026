import type { ReactNode } from 'react';

import { AppContainerRoot } from './AppContainer.styles';

interface AppContainerProps {
    children: ReactNode;
}

export const AppContainer = ({ children }: AppContainerProps) => (
    <AppContainerRoot>{children}</AppContainerRoot>
);
