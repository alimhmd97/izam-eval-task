import React from 'react';
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
import { useNavigate } from 'react-router-dom';

export default function PokimonsControlledPagination() {
    const { currentPageSize, offset } = usePagination(0);
    const navigate = useNavigate()
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

            {/* Pokemon List */}
            <Box sx={{ mb: 3 }}>
                {isLoading ? (
                    // Loading skeletons
                    Array.from({ length: currentPageSize }).map((_, index) => (
                        <Card key={index} sx={{ mb: 2 }}  >
                            <CardContent>
                                <Skeleton variant="text" width="60%" height={24} />
                                <Skeleton variant="text" width="40%" height={20} />
                            </CardContent>
                        </Card>
                    ))
                ) : (
                    // Pokemon cards
                    data?.results.map((pokemon, index) => (
                        <Card onClick={() => {
                            navigate(`/pokemon/${pokemon?.name}`)
                        }} key={pokemon.name} sx={{ mb: 2 }}>
                            <CardContent>
                                <Typography variant="h6" component="h2" gutterBottom>
                                    {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    ID: {offset + index + 1}
                                </Typography>
                            </CardContent>
                        </Card>
                    ))
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
