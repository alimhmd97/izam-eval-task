import {
    Container,
    Card,
    CardContent,
    Typography,
    Box,
    Skeleton,
    Alert,

} from '@mui/material';
import { usePokemonListWithPagination } from '../../hooks/usePokemonList';
import { usePagination } from '../../hooks/usePagination';
import { PaginationControls } from '../../components/PaginationControls';
import PokemonCard from './_components/pokemon-card';

export default function PokimonsControlledPagination() {
    const { currentPageSize, offset } = usePagination(0);
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
        <Container maxWidth="lg" sx={{ py: 4 }}>
            <Typography variant="h4" component="h1" gutterBottom>
                Pokemon List (Controlled Pagination)
            </Typography>

            <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                This page demonstrates the reusable pagination component with URL parameter synchronization.
                Try changing the page or page size - the URL will update automatically!
            </Typography>

            <Box sx={{ mb: 3 }}>
                {isLoading ? (
                    <Box
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: 2,
                        }}
                    >
                        {Array.from({ length: currentPageSize }).map((_, index) => (
                            <Box
                                key={index}
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
                                <Card sx={{ mb: 2 }}>
                                    <CardContent>
                                        <Skeleton variant="text" width="60%" height={24} />
                                        <Skeleton variant="text" width="40%" height={20} />
                                    </CardContent>
                                </Card>
                            </Box>
                        ))}
                    </Box>
                ) : (
                    // Pokemon cards
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
                                    index={offset + index + 1}
                                    name={pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
                                />
                            </Box>
                        ))}
                    </Box>
                )}
            </Box>

            {/* Pagination Controls */}
            <PaginationControls
                totalCount={fetchedTotalCount || 0}
                pageSize={currentPageSize}
                onPageChange={(page) => {
                    // The pagination hook handles URL updates automatically
                }}
                onPageSizeChange={(pageSize) => {
                    // The pagination hook handles URL updates automatically
                }}
            />
        </Container>
    );
}
