import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface PokemonCardProps {
    imageUrl: string;
    index: number;
    name: string;
}

export default function PokemonCard({ imageUrl, index, name }: PokemonCardProps) {
    const formatIndex = (index: number) => {
        return `#${index.toString().padStart(3, '0')}`;
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
            <CardContent sx={{ padding: 0, textAlign: 'center', width: '100%' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%', justifyContent: 'space-between' }}>
                    <img
                        src={imageUrl}
                        alt={name}
                        loading="lazy"
                        style={{
                            width: '120px',
                            height: '120px',
                            objectFit: 'contain',
                            marginBottom: '8px',
                        }}
                    />
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
