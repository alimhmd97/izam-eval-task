import React from 'react'
import { Box, Skeleton } from '@mui/material'

export default function PokemonCardSkeleton() {
    return (
        <Box
            sx={{
                minWidth: { xs: '80%', md: '800px' },
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
            {/* Header Section */}
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
                    <Skeleton variant="circular" width={30} height={30} sx={{ bgcolor: 'rgba(255,255,255,0.3)' }} />
                    <Skeleton variant="text" width={200} height={40} sx={{ bgcolor: 'rgba(255,255,255,0.3)' }} />
                </Box>
                <Skeleton variant="text" width={80} height={20} sx={{ bgcolor: 'rgba(255,255,255,0.3)' }} />
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
                    {/* Pokemon Image */}
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
                        <Skeleton variant="circular" width="80%" height="80%" />
                    </Box>

                    {/* Type Chip */}
                    <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
                        <Skeleton variant="rounded" width={100} height={32} />
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
                            <Skeleton variant="text" width="60%" height={20} sx={{ marginBottom: '4px' }} />
                            <Skeleton variant="text" width="40%" height={24} />
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
                            <Skeleton variant="text" width="60%" height={20} sx={{ marginBottom: '4px' }} />
                            <Skeleton variant="text" width="40%" height={24} />
                        </Box>
                    </Box>
                </Box>

                {/* Right Side */}
                <Box sx={{ flex: 1 }}>
                    {/* Base Stats */}
                    <Skeleton variant="text" width={120} height={32} sx={{ marginBottom: '16px' }} />
                    <Box sx={{ marginBottom: '24px' }}>
                        {[1, 2, 3, 4, 5, 6].map((index) => (
                            <Box key={index} sx={{ marginBottom: '12px' }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
                                    <Skeleton variant="text" width={80} height={20} />
                                    <Box sx={{ flex: 1, display: 'flex', alignItems: 'center', gap: '8px' }}>
                                        <Skeleton variant="rounded" width="100%" height={8} />
                                    </Box>
                                </Box>
                            </Box>
                        ))}
                    </Box>

                    {/* Abilities */}
                    <Skeleton variant="text" width={100} height={32} sx={{ marginBottom: '16px' }} />
                    <Box sx={{ marginBottom: '24px' }}>
                        {[1, 2, 3].map((index) => (
                            <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                                <Skeleton variant="rounded" width={120} height={32} />
                                {index === 3 && <Skeleton variant="text" width={60} height={16} />}
                            </Box>
                        ))}
                    </Box>

                    {/* Base Experience */}
                    <Skeleton variant="text" width={150} height={32} sx={{ marginBottom: '8px' }} />
                    <Skeleton variant="text" width={100} height={32} />
                </Box>
            </Box>
        </Box>
    )
} 