import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { PokemonsInfinitePagination } from './pokemons-infinite-pagination'
import PokimonsControlledPagination from './pokimons-controlled-pagination'
import { Box, Container } from '@mui/material'
import PokemonsPage from './pokemons-page'

export type PaginationMode = 'infinite-pagination' | 'controlled-pagination'

export default function Index() {
    const [searchParams, setSearchParams] = useSearchParams()
    const [renderedPage, setRenderedPage] = useState<PaginationMode | undefined>(() => {
        const pageParam = searchParams.get('pageType')
        return (pageParam as PaginationMode) || 'infinite-pagination'
    })

    useEffect(() => {
        if (renderedPage) {
            setSearchParams({ pageType: renderedPage })
        } else {
            setSearchParams({})
        }
    }, [renderedPage])

    return (
        <Box sx={{
            minHeight: '100vh',
            background: 'linear-gradient(135deg, #eefcf3 0%, #d4fbe8 100%)',
        }}>
            <Container maxWidth='xl'>
                <PokemonsPage setRenderedPage={setRenderedPage} />
                {renderedPage === 'infinite-pagination' ?
                    <PokemonsInfinitePagination /> :
                    renderedPage === 'controlled-pagination' ?
                        <PokimonsControlledPagination />
                        :
                        ''}
            </Container>
        </Box>
    )
}
