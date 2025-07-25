import React from 'react'
import { PaginationMode } from '.'
import { Box, Typography } from '@mui/material'
import BoltRoundedIcon from '@mui/icons-material/BoltRounded';
import { MUIButton } from '../../components/mui-buttton';
export default function PokemonsPage({ setRenderedPage }: { setRenderedPage: (page: PaginationMode | undefined) => void }) {
    return (
        <Box sx={{
            width: "100%",
            display: 'flex',
            justifyContent: 'flex-start',
            flexWrap: 'wrap',
            flexDirection: 'column',
            alignContent: 'center',

            padding: '3rem',
            gap: '1rem',

        }}>

            <Typography display={'flex'} justifyContent={'center'} alignItems={'center'} textAlign={'center'} variant='h4' fontWeight={700}>
                <BoltRoundedIcon sx={{ fontSize: 35, color: '#dbcc3e' }} /> Pokedex
            </Typography>
            <Typography variant='body2'>Discover and explore pokemon with infinite scroll </Typography>
            <div>
                <MUIButton sx={{ color: 'black', background: 'white' }} onClick={() => setRenderedPage('infinite-pagination')}>Infinite Scroll</MUIButton>
                <MUIButton sx={{ color: 'white', background: 'black' }} onClick={() => setRenderedPage('controlled-pagination')}>Page Controls</MUIButton></div>

        </Box>
    )
}
