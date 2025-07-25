import React from 'react';
import { useParams } from 'react-router-dom';
import { usePokemon } from '../hooks/usePokemonList';

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
    <div>
      <h1>{pokemon.name}</h1>
      <p>ID: {pokemon.id}</p>
    </div>
  );
}; 