import { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { pageItemsCount } from '../utils/consts';

interface UsePaginationOptions {
    defaultPage?: number;
    defaultPageSize?: number;
    pageSizeOptions?: number[];
}

interface UsePaginationReturn {
    currentPage: number;
    currentPageSize: number;
    totalPages: number;
    offset: number;
    handlePageChange: (page: number) => void;
    handlePageSizeChange: (pageSize: number) => void;
    updateURLParams: (page: number, pageSize: number) => void;
}

export const usePagination = (
    totalCount: number,
    options: UsePaginationOptions = {}
): UsePaginationReturn => {
    const {
        defaultPage = 1,
        defaultPageSize = pageItemsCount,
    } = options;

    const [searchParams, setSearchParams] = useSearchParams();

    const initialPage = parseInt(searchParams.get('page') || defaultPage.toString());
    const initialPageSize = parseInt(searchParams.get('pageSize') || defaultPageSize.toString());

    const [currentPage, setCurrentPage] = useState(initialPage);
    const [currentPageSize, setCurrentPageSize] = useState(initialPageSize);

    const totalPages = Math.ceil(totalCount / currentPageSize);
    const offset = (currentPage - 1) * currentPageSize;

    const updateURLParams = (page: number, pageSize: number) => {
        const newSearchParams = new URLSearchParams(searchParams);
        newSearchParams.set('page', page.toString());
        newSearchParams.set('pageSize', pageSize.toString());
        setSearchParams(newSearchParams);
    };

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        updateURLParams(page, currentPageSize);
    };

    const handlePageSizeChange = (pageSize: number) => {
        setCurrentPageSize(pageSize);
        setCurrentPage(1);
        updateURLParams(1, pageSize);
    };

    useEffect(() => {
        const urlPage = parseInt(searchParams.get('page') || defaultPage.toString());
        const urlPageSize = parseInt(searchParams.get('pageSize') || defaultPageSize.toString());

        if (urlPage !== currentPage) {
            setCurrentPage(urlPage);
        }

        if (urlPageSize !== currentPageSize) {
            setCurrentPageSize(urlPageSize);
        }
    }, [searchParams, defaultPage, defaultPageSize]);

    useEffect(() => {
        if (totalPages > 0 && currentPage > totalPages) {
            const validPage = Math.max(1, totalPages);
            setCurrentPage(validPage);
            updateURLParams(validPage, currentPageSize);
        }
    }, [totalPages, currentPage, currentPageSize]);

    return {
        currentPage,
        currentPageSize,
        totalPages,
        offset,
        handlePageChange,
        handlePageSizeChange,
        updateURLParams
    };
}; 