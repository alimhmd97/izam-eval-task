import React from 'react';
import { useInfinitePokemonList } from '../../hooks/usePokemonList';
import { useLastItemVisible } from '../../hooks/use-infinite-scroll-pagination';
import { pageItemsCount } from '../../utils/consts';
import {
  Box,
  Container,
  Typography,
  CircularProgress,
  Alert,
  AlertTitle,
  Paper
} from '@mui/material';
import { Error as ErrorIcon } from '@mui/icons-material';
import PokemonCard from './_components/pokemon-card';

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

  const pokemons = data?.pages.flatMap((page) => page.results) || [];

  if (error) {
    return (
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: 'grey.50'
        }}
      >
        <Alert
          severity="error"
          icon={<ErrorIcon />}
          sx={{ maxWidth: 400 }}
        >
          <AlertTitle>Error Loading Pokemon</AlertTitle>
          Please try again later.
        </Alert>
      </Box>
    );
  }

  return (
    <Box sx={{ minHeight: '100vh' }}>
      <Typography
        variant="h3"
        component="h1"
        align="center"
        sx={{
          mb: 4,
          fontWeight: 'bold',
          color: 'text.primary'
        }}
      >
        Pokemon Collection
      </Typography>

      {isLoading ? (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            py: 10
          }}
        >
          <CircularProgress size={60} />
        </Box>
      ) : (
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 3,
            justifyContent: 'center'
          }}
        >
          {pokemons.map((pokemon, index) => {
            const isLastElement = index === pokemons.length - 1;

            return (
              <Box
                key={index}
                ref={isLastElement ? lastItemRef : undefined}
                sx={{
                  flex: '0 0 auto',
                  width: {
                    xs: '100%',
                    sm: 'calc(50% - 12px)',
                    md: 'calc(33.333% - 16px)',
                    lg: 'calc(25% - 18px)',
                    xl: 'calc(20% - 19.2px)'
                  },
                  maxWidth: {
                    xs: '100%',
                    sm: 'calc(50% - 12px)',
                    md: 'calc(33.333% - 16px)',
                    lg: 'calc(25% - 18px)',
                    xl: 'calc(20% - 19.2px)'
                  }
                }}
              >

                <PokemonCard
                  imageUrl={pokemon.url}
                  index={index}
                  name={pokemon.name}
                />
              </Box>
            );
          })}
        </Box>
      )}

      {isFetchingNextPage && (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            py: 4,
            gap: 2
          }}
        >
          <CircularProgress size={24} />
          <Typography variant="body2" color="text.secondary">
            Loading more Pokemon...
          </Typography>
        </Box>
      )}

      {!hasNextPage && data && data.pages.length > 0 && (
        <Box
          sx={{
            textAlign: 'center',
            py: 4
          }}
        >
          <Typography variant="body1" color="text.secondary">
            You've seen all Pokemon!
          </Typography>
        </Box>
      )}
    </Box>
  );
};
