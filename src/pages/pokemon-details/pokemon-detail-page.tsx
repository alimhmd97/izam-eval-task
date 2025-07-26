import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { usePokemon } from '../../hooks/usePokemonList';
import PokemonCard from './_components/pokemon-card';
import PokemonCardSkeleton from './_components/pokemon-card-skeleton';
import { Box } from '@mui/material';
import { MUIButton } from '../../components/mui-buttton';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
export const PokemonDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data: pokemon, isLoading, error } = usePokemon(id || '');
  const navigate = useNavigate();
  if (isLoading) {
    return (
      <Box sx={{
        background: 'linear-gradient(135deg, #faf4ff 0%, #fbe7f3 100%)',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <MUIButton onClick={() => navigate('/')} sx={{
          position: 'absolute', top: '1rem', left: { xs: '1rem', md: '5%' },
          background: 'white', color: "black", display: 'flex', alignItems: 'center', gap: '8px'
        }}>
          <KeyboardBackspaceIcon />  Back to list
        </MUIButton>
        <PokemonCardSkeleton />
      </Box>
    );
  }

  if (error) {
    return <div>Error loading pokemon</div>;
  }

  if (!pokemon) {
    return <div>Pokemon not found</div>;
  }

  return (
    <Box sx={{
      background: 'linear-gradient(135deg, #faf4ff 0%, #fbe7f3 100%)',
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <MUIButton onClick={() => navigate('/')} sx={{
        position: 'absolute', top: '1rem', left: { xs: '1rem', md: '5%' },
        background: 'white', color: "black", display: 'flex', alignItems: 'center', gap: '8px'
      }}>
        <KeyboardBackspaceIcon />  Back to list
      </MUIButton>
      <PokemonCard pokemon={pokemon} />
    </Box>
  );
}; 