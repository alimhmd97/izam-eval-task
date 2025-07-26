import { Box, Card, Skeleton } from '@mui/material'
import React from 'react'

export default function CardSkeleton() {
    return (
        <Box
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
            <Card sx={{ mb: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', justifyContent: 'center' }}>
                <Skeleton variant="text" width="80%" height={200} />
                <Skeleton variant="text" width="60%" height={24} />
                <Skeleton variant="text" width="40%" height={20} />
            </Card>
        </Box>
    )
}
