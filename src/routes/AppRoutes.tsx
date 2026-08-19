import { Navigate, Route, Routes } from 'react-router-dom';

import { LoginPage } from '@pages/LoginPage/LoginPage';
import { SearchPage } from '@pages/SearchPage/SearchPage';

import { GuestRoute } from './GuestRoute';

export const AppRoutes = () => (
    <Routes>
        <Route element={<GuestRoute />}>
            <Route path="/login" element={<LoginPage />} />
        </Route>

        <Route path="/search" element={<SearchPage />} />

        <Route path="/" element={<Navigate to="/search" replace />} />
    </Routes>
);
