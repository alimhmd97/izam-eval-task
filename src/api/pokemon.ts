import { Pokemon, PokemonListResponse } from '../types/pokemon';

const BASE_URL = 'https://pokeapi.co/api/v2';

export const pokemonApi = {
  // Get paginated list of Pokemon
  getPokemonList: async (offset: number = 0, limit: number = 20): Promise<PokemonListResponse> => {
    const response = await fetch(`${BASE_URL}/pokemon?offset=${offset}&limit=${limit}`);
    if (!response.ok) {
      throw new Error('Failed to fetch Pokemon list');
    }
    return response.json();
  },

  // Get detailed Pokemon data by name or ID
  getPokemon: async (nameOrId: string | number): Promise<Pokemon> => {
    const response = await fetch(`${BASE_URL}/pokemon/${nameOrId}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch Pokemon: ${nameOrId}`);
    }
    return response.json();
  },

  // Get Pokemon by URL (for pagination)
  getPokemonByUrl: async (url: string): Promise<Pokemon> => {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to fetch Pokemon by URL');
    }
    return response.json();
  }
}; 