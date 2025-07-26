import React, { useState } from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface PokemonCardProps {
    imageUrl: string;
    index: number;
    name: string;
}

export default function PokemonCard({ imageUrl, index, name }: PokemonCardProps) {
    const [imageError, setImageError] = useState(false);

    const formatIndex = (index: number) => {
        return `#${index.toString().padStart(3, '0')}`;
    };

    const handleImageError = () => {
        setImageError(true);
    };

    const navigate = useNavigate();
    return (
        <Card
            onClick={() => {
                navigate(`/pokemon/${name}`)
            }}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: 2,
                borderRadius: 2,
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
                cursor: 'pointer',
                backgroundColor: '#ffffff',

                '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.15)',
                },
            }}
        >
            <CardContent sx={{ padding: '0 !important', textAlign: 'center', width: '100%' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%', justifyContent: 'space-between' }}>
                    <Box sx={{
                        width: '200px',
                        minHeight: '160px',
                        marginBottom: '8px',
                        backgroundColor: '#f0f0f0',
                    }}>
                        <img
                            src={imageError ? 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/8.png' : imageUrl}
                            alt={name}
                            loading="lazy"
                            onError={handleImageError}
                            style={{
                                width: '100%',
                                objectFit: 'fill',
                                marginBottom: '8px',
                            }}
                        />
                    </Box>
                    <Box>
                        <Typography
                            variant="h6"
                            sx={{
                                fontWeight: 700,
                                textAlign: 'center',
                                marginBottom: '4px',
                                color: '#333333',
                                fontSize: '1rem',
                            }}
                        >
                            {name}
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{
                                textAlign: 'center',
                                color: '#666666',
                                fontWeight: 500,
                                fontSize: '0.875rem',
                            }}
                        >
                            {formatIndex(index)}
                        </Typography>
                    </Box>
                </Box>
            </CardContent>
        </Card>
    );
}
