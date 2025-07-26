import React, { useState } from 'react';
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
  Switch,
  FormControlLabel,
} from '@mui/material';
import { Error as ErrorIcon } from '@mui/icons-material';
import PokemonCard from './_components/pokemon-card';
import { MUIButton } from '../../components/mui-buttton';
import CardSkeleton from './_components/card-Skeleton';

export const PokemonsInfinitePagination: React.FC = () => {
  const [isSmoothScroll, setIsSmoothScroll] = useState(true);

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
    <Container maxWidth="xl" >
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 2,
        mb: 2
      }}>
        <FormControlLabel
          control={
            <Switch
              checked={isSmoothScroll}
              onChange={(e) => setIsSmoothScroll(e.target.checked)}
              color="primary"
            />
          }
          label={isSmoothScroll ? "Smooth Infinite Scroll" : "Load More Button"}
        />
      </Box>

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
              ref={isLastElement && isSmoothScroll ? lastItemRef : undefined}
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
      {isLoading &&
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 2,
          }}
        >
          {Array.from({ length: 20 }).map((_, index) => (
            <CardSkeleton key={index} />
          ))}
        </Box>
      }
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', py: 2, gap: 2 }}>
        {isFetchingNextPage ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', py: 4, gap: 2 }}><CircularProgress size={30} sx={{ color: 'green' }} /> showing more pokemons</Box>
        ) : isSmoothScroll ? null : <MUIButton onClick={() => fetchNextPage()}>
          Load more
        </MUIButton>}
      </Box>

      <Box sx={{ textAlign: 'center', pb: 5 }}>  Showing {pokemons?.length} pokemons
      </Box>
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
    </Container>
  );
};
