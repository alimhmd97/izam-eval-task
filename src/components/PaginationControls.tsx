import React, { useEffect, useState } from 'react';
import {
  Pagination,
  PaginationItem,
  Box,
  Typography,

} from '@mui/material';
import { useSearchParams } from 'react-router-dom';
import { NavigateNext, NavigateBefore } from '@mui/icons-material';

interface PaginationControlsProps {
  totalCount: number;
  pageSize?: number;
  pageSizeOptions?: number[];
  onPageChange?: (page: number) => void;
  onPageSizeChange?: (pageSize: number) => void;
  showPageSizeSelector?: boolean;
  showTotalCount?: boolean;
  className?: string;
}

export const PaginationControls: React.FC<PaginationControlsProps> = ({
  totalCount,
  pageSize = 20,
  pageSizeOptions = [10, 20, 50, 100],
  onPageChange,
  onPageSizeChange,
  showPageSizeSelector = true,
  showTotalCount = true,
  className
}) => {
  const [searchParams, setSearchParams] = useSearchParams();


  const initialPage = parseInt(searchParams.get('page') || '1');
  const initialPageSize = parseInt(searchParams.get('pageSize') || pageSize.toString());

  const [currentPage, setCurrentPage] = useState(initialPage);
  const [currentPageSize, setCurrentPageSize] = useState(initialPageSize);

  const totalPages = Math.ceil(totalCount / currentPageSize);

  const updateURLParams = (page: number, size: number) => {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set('page', page.toString());
    newSearchParams.set('pageSize', size.toString());
    setSearchParams(newSearchParams);
  };

  const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
    updateURLParams(page, currentPageSize);
    onPageChange?.(page);
  };

  if (totalCount === 0) {
    return null;
  }

  return (
    <Box
      className={className}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: 2,
        py: 2,
        px: 1
      }}
    >


      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={handlePageChange}
        color="primary"
        size="medium"
        renderItem={(item) => {
          if (item.type === 'previous') {
            return (
              <PaginationItem
                {...item}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 0.5,
                  '& .MuiPaginationItem-icon': {
                    marginRight: 0,
                  },
                }}
              >
                <NavigateBefore />
                Back
              </PaginationItem>
            );
          }
          if (item.type === 'next') {
            return (
              <PaginationItem
                {...item}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 0.5,
                  '& .MuiPaginationItem-icon': {
                    marginLeft: 0,
                  },
                }}
              >
                Next
                <NavigateNext />
              </PaginationItem>
            );
          }
          return (
            <PaginationItem
              {...item}
              sx={{
                borderRadius: '8px',
                '&.Mui-selected': {
                  backgroundColor: '#000000',
                  color: '#ffffff',
                  '&:hover': {
                    backgroundColor: '#333333',
                  },
                },
                '&:not(.Mui-selected)': {
                  '&:hover': {
                    backgroundColor: 'rgba(0, 0, 0, 0.04)',
                  },
                },
              }}
            />
          );
        }}
      />
      {showTotalCount && (
        <Typography variant="body2" color="text.secondary">
          Page {currentPage} {`of ${Math.ceil(totalCount / currentPageSize)}`} ({currentPageSize}Pokemon shown)
        </Typography>
      )}
    </Box>
  );
}; 