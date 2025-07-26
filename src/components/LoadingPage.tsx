import React from 'react';
import { Box, Typography, CircularProgress, Fade } from '@mui/material';
import { keyframes } from '@mui/system';

const pulse = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.7;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

const float = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
`;

const LoadingPage: React.FC = () => {
    return (
        <Box
            sx={{
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            {/* Animated background elements */}
            <Box
                sx={{
                    position: 'absolute',
                    top: '20%',
                    left: '10%',
                    width: 100,
                    height: 100,
                    borderRadius: '50%',
                    background: 'rgba(255, 255, 255, 0.1)',
                    animation: `${pulse} 2s ease-in-out infinite`,
                }}
            />
            <Box
                sx={{
                    position: 'absolute',
                    top: '60%',
                    right: '15%',
                    width: 80,
                    height: 80,
                    borderRadius: '50%',
                    background: 'rgba(255, 255, 255, 0.1)',
                    animation: `${pulse} 2.5s ease-in-out infinite`,
                }}
            />
            <Box
                sx={{
                    position: 'absolute',
                    bottom: '20%',
                    left: '20%',
                    width: 60,
                    height: 60,
                    borderRadius: '50%',
                    background: 'rgba(255, 255, 255, 0.1)',
                    animation: `${pulse} 1.8s ease-in-out infinite`,
                }}
            />

            {/* Main content */}
            <Fade in={true} timeout={1000}>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: 3,
                        zIndex: 1,
                    }}
                >
                    {/* Animated logo/icon */}
                    <Box
                        sx={{
                            width: 120,
                            height: 120,
                            borderRadius: '50%',
                            background: 'rgba(255, 255, 255, 0.2)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            backdropFilter: 'blur(10px)',
                            border: '2px solid rgba(255, 255, 255, 0.3)',
                            animation: `${float} 3s ease-in-out infinite`,
                            mb: 2,
                        }}
                    >
                        <CircularProgress
                            size={60}
                            thickness={4}
                            sx={{
                                color: 'white',
                                '& .MuiCircularProgress-circle': {
                                    strokeLinecap: 'round',
                                },
                            }}
                        />
                    </Box>

                    {/* Title */}
                    <Typography
                        variant="h3"
                        component="h1"
                        sx={{
                            fontWeight: 700,
                            textAlign: 'center',
                            mb: 1,
                            textShadow: '0 2px 4px rgba(0,0,0,0.3)',
                        }}
                    >
                        Loading...
                    </Typography>

                    {/* Subtitle */}
                    <Typography
                        variant="h6"
                        sx={{
                            opacity: 0.8,
                            textAlign: 'center',
                            maxWidth: 400,
                            lineHeight: 1.5,
                        }}
                    >
                        Please wait
                    </Typography>

                    {/* Progress dots */}
                    <Box
                        sx={{
                            display: 'flex',
                            gap: 1,
                            mt: 3,
                        }}
                    >
                        {[0, 1, 2].map((index) => (
                            <Box
                                key={index}
                                sx={{
                                    width: 8,
                                    height: 8,
                                    borderRadius: '50%',
                                    background: 'white',
                                    animation: `${pulse} 1.4s ease-in-out infinite`,
                                    animationDelay: `${index * 0.2}s`,
                                }}
                            />
                        ))}
                    </Box>
                </Box>
            </Fade>
        </Box>
    );
};

export default LoadingPage; 