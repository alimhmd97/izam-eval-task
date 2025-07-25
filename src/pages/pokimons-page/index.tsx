import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { PokemonsInfinitePagination } from './pokemons-infinite-pagination'
import PokimonsControlledPagination from './pokimons-controlled-pagination'
import { Button } from '@mui/material'

type PaginationMode = 'infinite-pagination' | 'controlled-pagination'

export default function Index() {
    const [searchParams, setSearchParams] = useSearchParams()
    const [renderedPage, setRenderedPage] = useState<PaginationMode | undefined>(() => {
        const pageParam = searchParams.get('page')
        return (pageParam as PaginationMode) || undefined
    })

    useEffect(() => {
        if (renderedPage) {
            setSearchParams({ page: renderedPage })
        } else {
            setSearchParams({})
        }
    }, [renderedPage, setSearchParams])

    return (
        <div>
            <Button onClick={() => setRenderedPage(undefined)}>back</Button>
            {renderedPage === 'infinite-pagination' ?
                <PokemonsInfinitePagination /> :
                renderedPage === 'controlled-pagination' ?
                    <PokimonsControlledPagination />
                    : <>
                        <button onClick={() => setRenderedPage('infinite-pagination')}>Infinite Pagination</button>
                        <button onClick={() => setRenderedPage('controlled-pagination')}>Controlled Pagination</button>
                    </>}

        </div>
    )
}
