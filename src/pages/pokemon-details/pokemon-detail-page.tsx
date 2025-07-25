import React from 'react';
import { useParams } from 'react-router-dom';
import { usePokemon } from '../../hooks/usePokemonList';
import PokemonCard from './_components/pokemon-card';
import { Box } from '@mui/material';

export const PokemonDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data: pokemon, isLoading, error } = usePokemon(id || '');

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading pokemon</div>;
  }

  if (!pokemon) {
    return <div>Pokemon not found</div>;
  }

  return (
    <Box sx={{
      background: 'linear-gradient(135deg, #faf4ff 0%, #fbe7f3 100%)',
      minHeight: '100vh',
    }}>
      <PokemonCard pokemon={pokemon} />
    </Box>
  );
}; 