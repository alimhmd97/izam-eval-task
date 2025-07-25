import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PokemonsPage } from '../pages/PokemonsPage';
import { PokemonDetailPage } from '../pages/PokemonDetailPage';

export const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/pokemons" element={<PokemonsPage />} />
        <Route path="/pokemon/:id" element={<PokemonDetailPage />} />
      </Routes>
    </Router>
  );
}; 