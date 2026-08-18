import { Navigate, Route, Routes } from 'react-router-dom';

import { LoginPage } from '@pages/LoginPage/LoginPage';
import { SearchPage } from '@pages/SearchPage/SearchPage';

export const AppRoutes = () => (
    <Routes>
        <Route path="/search" element={<SearchPage />} />

        <Route path="/" element={<Navigate to="/search" replace />} />
        <Route path="/login" element={<LoginPage />} />
    </Routes>
);
