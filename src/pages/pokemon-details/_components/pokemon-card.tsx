import React from 'react'
import { Pokemon } from '../../../types/pokemon'
import { Box, Typography, Chip, LinearProgress } from '@mui/material'
import { Bolt, AttachFile, Scale } from '@mui/icons-material'
import StraightenIcon from '@mui/icons-material/Straighten';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';

export default function PokemonCard({ pokemon }: { pokemon: Pokemon }) {
    console.log(pokemon);

    const getStatName = (statName: string) => {
        switch (statName) {
            case 'hp': return 'HP'
            case 'attack': return 'Attack'
            case 'defense': return 'Defense'
            case 'special-attack': return 'Sp. Attack'
            case 'special-defense': return 'Sp. Defense'
            case 'speed': return 'Speed'
            default: return statName
        }
    }

    const getTypeColor = (typeName: string) => {
        const typeColors: { [key: string]: string } = {
            fire: '#FF6B6B',
            water: '#4ECDC4',
            grass: '#45B7D1',
            electric: '#FFD93D',
            ice: '#A8E6CF',
            fighting: '#FF8B94',
            poison: '#DDA0DD',
            ground: '#DEB887',
            flying: '#B0E0E6',
            psychic: '#FFB6C1',
            bug: '#90EE90',
            rock: '#CD853F',
            ghost: '#DDA0DD',
            dragon: '#FF6B6B',
            dark: '#696969',
            steel: '#C0C0C0',
            fairy: '#FFB6C1',
            normal: '#F5F5DC'
        }
        return typeColors[typeName] || '#FF6B6B'
    }

    return (
        <Box
            sx={{
                maxWidth: '800px',
                height: { sx: '', lg: '750px' },
                backgroundColor: 'white',
                borderRadius: '8px',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                margin: '4rem 1rem'
            }}
        >
            <Box
                sx={{
                    background: 'linear-gradient(90deg, #8B5CF6 0%, #EC4899 100%)',
                    padding: '20px',
                    alignItems: 'center',
                    gap: '8px',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center'
                }}
            >
                <Box sx={{ display: 'flex', margin: 'auto', gap: '1rem', alignItems: 'center' }}>
                    <Bolt sx={{ color: 'white', fontSize: '30px' }} />
                    <Typography
                        variant="h4"
                        sx={{
                            color: 'white',
                            fontWeight: 'bold',
                            textTransform: 'capitalize'
                        }}
                    >
                        {pokemon.name}
                    </Typography>
                </Box>
                <Typography
                    sx={{
                        color: 'white',
                        fontSize: '14px',
                        textAlign: 'center'
                    }}
                >
                    #{pokemon.id.toString().padStart(3, '0')}
                </Typography>
            </Box>

            <Box
                sx={{
                    padding: '24px',
                    flex: 1,
                    display: 'flex',
                    gap: '24px',
                    flexDirection: {
                        xs: 'column',
                        md: 'row'
                    }
                }}
            >
                {/* Left Side */}
                <Box sx={{ flex: 1 }}>
                    <Box
                        sx={{
                            width: '100%',
                            aspectRatio: '1',
                            borderRadius: '50%',
                            backgroundColor: '#f7f8fa',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: '16px',
                        }}
                    >
                        <img
                            src={pokemon.sprites.other['official-artwork'].front_default || pokemon.sprites.front_default}
                            alt={pokemon.name}
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'contain'
                            }}
                        />
                    </Box>

                    {/* Type */}
                    <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
                        <Chip
                            label={pokemon.types[0].type.name}
                            sx={{
                                backgroundColor: getTypeColor(pokemon.types[0].type.name),
                                color: 'white',
                                fontWeight: 'bold',
                                textTransform: 'capitalize'
                            }}
                        />
                    </Box>

                    {/* Height and Weight */}
                    <Box sx={{ display: 'flex', gap: '12px' }}>
                        <Box
                            sx={{
                                flex: 1,
                                backgroundColor: '#fafbfd',
                                borderRadius: '8px',
                                padding: '20px',
                                textAlign: 'center'
                            }}
                        >
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px', marginBottom: '4px' }}>
                                <StraightenIcon sx={{ fontSize: '16px', color: '#6C757D', transform: 'rotate(45deg)' }} />
                                <Typography sx={{ fontSize: '16px', color: '#6C757D' }}>Height</Typography>
                            </Box>
                            <Typography sx={{ fontWeight: '800' }}>
                                {(pokemon.height / 10).toFixed(1)} m
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                flex: 1,
                                backgroundColor: '#fafbfd',
                                borderRadius: '8px',
                                padding: '20px',
                                textAlign: 'center'
                            }}
                        >
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px', marginBottom: '4px' }}>
                                <WorkOutlineIcon sx={{ fontSize: '16px', color: '#6C757D' }} />
                                <Typography sx={{ fontSize: '16px', color: '#6C757D' }}>Weight</Typography>
                            </Box>
                            <Typography sx={{ fontWeight: '800' }}>
                                {(pokemon.weight / 10).toFixed(1)} kg
                            </Typography>
                        </Box>
                    </Box>
                </Box>

                {/* Right Side */}
                <Box sx={{ flex: 1 }}>
                    {/* Base Stats */}
                    <Typography
                        variant="h6"
                        sx={{
                            fontWeight: '800',
                            marginBottom: '16px',
                            color: '#212529'
                        }}
                    >
                        Base Stats
                    </Typography>
                    <Box sx={{ marginBottom: '24px', fontWeight: 'bold' }}>
                        {pokemon.stats.map((stat, index) => (
                            <Box key={index} sx={{ marginBottom: '12px' }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
                                    <Typography sx={{ fontSize: '14px', fontWeight: 'bold', minWidth: '80px', width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                                        <span> {getStatName(stat.stat.name)}:</span>  {stat.base_stat}
                                    </Typography>
                                    <Box sx={{ flex: 1, display: 'flex', alignItems: 'center', gap: '8px' }}>
                                        <Box sx={{ flex: 1, position: 'relative' }}>
                                            <Box
                                                sx={{
                                                    height: '8px',
                                                    backgroundColor: '#E9ECEF',
                                                    borderRadius: '4px',
                                                    overflow: 'hidden'
                                                }}
                                            >
                                                <Box
                                                    sx={{
                                                        height: '100%',
                                                        backgroundColor: '#212529',
                                                        width: `${(stat.base_stat / 255) * 100}%`,
                                                        borderRadius: '4px'
                                                    }}
                                                />
                                            </Box>
                                        </Box>

                                    </Box>
                                </Box>
                            </Box>
                        ))}
                    </Box>

                    {/* Abilities */}
                    <Typography
                        variant="h6"
                        sx={{
                            fontWeight: 'bold',
                            marginBottom: '16px',
                            color: '#212529'
                        }}
                    >
                        Abilities
                    </Typography>
                    <Box sx={{ marginBottom: '24px' }}>
                        {pokemon.abilities.map((ability, index) => (
                            <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                                <Chip
                                    label={ability.ability.name}
                                    sx={{
                                        border: ability.is_hidden ? 'none' : '3px solid #E9ECEF',
                                        backgroundColor: ability.is_hidden ? '#F8F9FA' : "#fff",
                                        color: '#6C757D',
                                        textTransform: 'capitalize',
                                        fontSize: '12px'
                                    }}
                                />
                                {ability.is_hidden && (
                                    <Typography sx={{ fontSize: '12px', color: '#ADB5BD' }}>
                                        (Hidden)
                                    </Typography>
                                )}
                            </Box>
                        ))}
                    </Box>

                    {/* Base Experience */}
                    <Typography
                        variant="h6"
                        sx={{
                            fontWeight: '800',
                            marginBottom: '8px',
                            color: '#212529'
                        }}
                    >
                        Base Experience
                    </Typography>
                    <Typography
                        sx={{
                            color: '#924fd3',
                            fontWeight: 'bold',
                            fontSize: '24px'
                        }}
                    >
                        {pokemon.base_experience} XP
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}

