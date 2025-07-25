import { useQuery } from '@tanstack/react-query';
import { pokemonApi } from '../api/pokemon';
import { Pokemon } from '../types/pokemon';

export const usePokemonList = (offset: number = 0, limit: number = 20) => {
  return useQuery({
    queryKey: ['pokemon-list', offset, limit],
    queryFn: () => pokemonApi.getPokemonList(offset, limit),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};

export const usePokemon = (nameOrId: string | number) => {
  return useQuery({
    queryKey: ['pokemon', nameOrId],
    queryFn: () => pokemonApi.getPokemon(nameOrId),
    enabled: !!nameOrId,
    staleTime: 10 * 60 * 1000, // 10 minutes
  });
};

export const usePokemonByUrl = (url: string) => {
  return useQuery({
    queryKey: ['pokemon-by-url', url],
    queryFn: () => pokemonApi.getPokemonByUrl(url),
    enabled: !!url,
    staleTime: 10 * 60 * 1000, // 10 minutes
  });
}; 