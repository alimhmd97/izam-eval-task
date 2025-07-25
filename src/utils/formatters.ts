// Format Pokemon name to title case
export const formatPokemonName = (name: string): string => {
  return name.charAt(0).toUpperCase() + name.slice(1).replace(/-/g, ' ');
};

// Format Pokemon ID with leading zeros
export const formatPokemonId = (id: number): string => {
  return `#${id.toString().padStart(3, '0')}`;
};

// Format weight from hectograms to kilograms
export const formatWeight = (weight: number): string => {
  return `${(weight / 10).toFixed(1)} kg`;
};

// Format height from decimeters to meters
export const formatHeight = (height: number): string => {
  return `${(height / 10).toFixed(1)} m`;
};

// Get Pokemon type color
export const getTypeColor = (type: string): string => {
  const typeColors: Record<string, string> = {
    normal: '#A8A878',
    fire: '#F08030',
    water: '#6890F0',
    electric: '#F8D030',
    grass: '#78C850',
    ice: '#98D8D8',
    fighting: '#C03028',
    poison: '#A040A0',
    ground: '#E0C068',
    flying: '#A890F0',
    psychic: '#F85888',
    bug: '#A8B820',
    rock: '#B8A038',
    ghost: '#705898',
    dragon: '#7038F8',
    dark: '#705848',
    steel: '#B8B8D0',
    fairy: '#EE99AC'
  };
  
  return typeColors[type.toLowerCase()] || '#777777';
}; 