import {
    Container,
    Box,
    Alert,

} from '@mui/material';
import { usePokemonListWithPagination } from '../../hooks/usePokemonList';
import { usePagination } from '../../hooks/usePagination';
import { PaginationControls } from '../../components/PaginationControls';
import PokemonCard from './_components/pokemon-card';
import CardSkeleton from './_components/card-Skeleton';

export default function PokimonsControlledPagination() {
    const { currentPageSize, offset, currentPage } = usePagination(0);
    const {
        data,
        error,
        isLoading,
        totalCount: fetchedTotalCount
    } = usePokemonListWithPagination(offset, currentPageSize);


    if (error) {
        return (
            <Container maxWidth="lg" sx={{ py: 4 }}>
                <Alert severity="error">
                    Error loading Pokemon: {error.message}
                </Alert>
            </Container>
        );
    }

    return (
        <Container maxWidth="xl" >

            <Box sx={{ mb: 3 }}>


                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: 2,
                    }}
                >
                    {data?.results.map((pokemon, index) => (
                        <Box
                            key={pokemon.name}

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
                            <PokemonCard
                                imageUrl={pokemon.url}
                                index={(index + 1) + (currentPage - 1) * currentPageSize}
                                name={pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
                            />
                        </Box>
                    ))}
                </Box>
                {isLoading &&
                    <Box
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: 2,
                        }}
                    >
                        {Array.from({ length: currentPageSize }).map((_, index) => (
                            <CardSkeleton key={index} />
                        ))}
                    </Box>
                }
            </Box>

            <PaginationControls
                totalCount={fetchedTotalCount || 0}
                pageSize={currentPageSize}
                showPageSizeSelector={false}
            />
        </Container>
    );
}
