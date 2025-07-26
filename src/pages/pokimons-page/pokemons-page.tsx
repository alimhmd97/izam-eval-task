import React from 'react'
import { PaginationMode } from '.'
import { Box, Typography } from '@mui/material'
import BoltRoundedIcon from '@mui/icons-material/BoltRounded';
import { MUIButton } from '../../components/mui-buttton';
import { useSearchParams } from 'react-router-dom';

export default function PokemonsPage({ setRenderedPage }: { setRenderedPage: (page: PaginationMode | undefined) => void }) {
    const [searchParams] = useSearchParams();
    const currentPage = searchParams.get('pageType') as PaginationMode;

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
                <MUIButton
                    sx={{
                        color: currentPage === 'infinite-pagination' ? 'white' : 'black',
                        background: currentPage === 'infinite-pagination' ? 'black' : 'white'
                    }}
                    onClick={() => setRenderedPage('infinite-pagination')}
                >
                    Infinite Scroll
                </MUIButton>
                <MUIButton
                    sx={{
                        color: currentPage === 'controlled-pagination' ? 'white' : 'black',
                        background: currentPage === 'controlled-pagination' ? 'black' : 'white'
                    }}
                    onClick={() => setRenderedPage('controlled-pagination')}
                >
                    Page Controls
                </MUIButton>
            </div>

        </Box>
    )
}
