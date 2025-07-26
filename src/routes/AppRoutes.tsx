// AppRoutes.tsx
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, HashRouter } from 'react-router-dom';
import LoadingPage from '../components/LoadingPage';

const PokemonsPage = lazy(() => import('../pages/pokimons-page'));
const PokemonDetailPage = lazy(() => import('../pages/pokemon-details/pokemon-detail-page'));

export const AppRoutes: React.FC = () => {
  return (
    <HashRouter>
      <Suspense fallback={<LoadingPage />}>
        <Routes>
          <Route path="/" element={<PokemonsPage />} />
          <Route path="/pokemon/:id" element={<PokemonDetailPage />} />
        </Routes>
      </Suspense>
    </HashRouter>
  );
};
