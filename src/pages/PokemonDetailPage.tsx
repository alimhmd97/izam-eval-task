import React from 'react';
import { useParams } from 'react-router-dom';

export const PokemonDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div>
     
    </div>
  );
}; 