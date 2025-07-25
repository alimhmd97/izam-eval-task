import React from 'react';
import { Link } from 'react-router-dom';
import { Pokemon } from '../types/pokemon';
import { formatPokemonName, formatPokemonId, getTypeColor } from '../utils/formatters';

interface PokemonCardProps {
  pokemon: Pokemon;
}

export const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon }) => {
  const imageUrl = pokemon.sprites.other['official-artwork'].front_default || pokemon.sprites.front_default;

  return (
    <Link to={`/pokemon/${pokemon.id}`} className="block">
      <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 p-4">
        <div className="relative">
          <img
            src={imageUrl}
            alt={pokemon.name}
            className="w-full h-32 object-contain"
            onError={(e) => {
              e.currentTarget.src = pokemon.sprites.front_default;
            }}
          />
          <span className="absolute top-0 right-0 bg-gray-800 text-white text-xs px-2 py-1 rounded">
            {formatPokemonId(pokemon.id)}
          </span>
        </div>
        
        <div className="mt-3">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            {formatPokemonName(pokemon.name)}
          </h3>
          
          <div className="flex flex-wrap gap-1">
            {pokemon.types.map((type) => (
              <span
                key={type.type.name}
                className="px-2 py-1 text-xs font-medium text-white rounded"
                style={{ backgroundColor: getTypeColor(type.type.name) }}
              >
                {formatPokemonName(type.type.name)}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}; 