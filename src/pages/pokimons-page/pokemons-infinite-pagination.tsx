import React from 'react';
import { useInfinitePokemonList } from '../../hooks/usePokemonList';
import { useLastItemVisible } from '../../hooks/use-infinite-scroll-pagination';
import { pageItemsCount } from '../../utils/consts';

export const PokemonsInfinitePagination: React.FC = () => {
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading
  } = useInfinitePokemonList(pageItemsCount);

  const { lastItemRef } = useLastItemVisible(
    () => {
      if (hasNextPage && !isFetchingNextPage) {
        fetchNextPage();
      }
    },
    {
      rootMargin: '0px 0px 50px 0px',
      threshold: 0.1
    },
    isLoading || isFetchingNextPage,
  );

  const pokimons = data?.pages.flatMap((page) => page.results) || [];

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-4">Error Loading Pokemon</h2>
          <p className="text-gray-600">Please try again later.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Pokemon Collection
        </h1>

        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        ) : (

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {pokimons.map((pokemon, index) => {
              const isLastElement = index === pokimons.length - 1

              return (
                <div
                  key={index}
                  ref={isLastElement ? lastItemRef : undefined}
                >
                  <PokemonListItem pokemon={pokemon} />
                </div>

              )
            }
            )}
          </div>
        )}

        {isFetchingNextPage && (
          <div className="flex justify-center items-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            <span className="ml-3 text-gray-600">Loading more Pokemon...</span>
          </div>
        )}

        {!hasNextPage && data && data.pages.length > 0 && (
          <div className="text-center py-8">
            <p className="text-gray-600">You've seen all Pokemon!</p>
          </div>
        )}
      </div>
    </div>
  );
};

// Component to fetch and display individual Pokemon
const PokemonListItem: React.FC<{ pokemon: { name: string; url: string } }> = ({ pokemon }) => {


  return (
    <div className="bg-white rounded-lg shadow-md p-4 animate-pulse h-[200px]">
      <div className="bg-gray-300 h-32 rounded mb-3 ">{pokemon.name}</div>

    </div>

  )
}; 