import { useQuery, useInfiniteQuery } from '@tanstack/react-query';
import { pokemonApi } from '../api/pokemon';
import { PokemonListResponse } from '../types/pokemon';

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

export const useInfinitePokemonList = (limit?: number) => {
  const limitValue = limit || 20;
  return useInfiniteQuery({
    queryKey: ['pokemon-list-infinite', limitValue],
    queryFn: async ({ pageParam = 0 }) => {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon?offset=${pageParam}&limit=${limitValue}`
      );

      if (!response.ok) {
        throw new Error('Failed to fetch Pokemon list');
      }

      const data: PokemonListResponse = await response.json();
      return data;
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      if (lastPage.next) {
        const url = new URL(lastPage.next);
        const offset = url.searchParams.get('offset');
        return offset ? parseInt(offset) : undefined;
      }
      return undefined;
    },
    refetchOnWindowFocus: false,
    retry: 3,
    staleTime: 5 * 60 * 1000,
  });
}; 