import React, { useEffect, useState } from 'react';
import {
  Pagination,
  PaginationItem,
  Box,
  Typography,
  FormControl,
  Select,
  MenuItem,
  SelectChangeEvent
} from '@mui/material';
import { useSearchParams, useNavigate, useLocation } from 'react-router-dom';

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

  const handlePageSizeChange = (event: SelectChangeEvent<number>) => {
    const newPageSize = event.target.value as number;
    setCurrentPageSize(newPageSize);
    setCurrentPage(1);
    updateURLParams(1, newPageSize);
    onPageSizeChange?.(newPageSize);
  };

  useEffect(() => {
    const urlPage = parseInt(searchParams.get('page') || '1');
    const urlPageSize = parseInt(searchParams.get('pageSize') || pageSize.toString());

    if (urlPage !== currentPage) {
      setCurrentPage(urlPage);
    }

    if (urlPageSize !== currentPageSize) {
      setCurrentPageSize(urlPageSize);
    }
  }, [searchParams, pageSize]);

  if (totalCount === 0) {
    return null;
  }

  return (
    <Box
      className={className}
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 2,
        py: 2,
        px: 1
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 2,
          flexWrap: 'wrap'
        }}
      >
        {showPageSizeSelector && (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Typography variant="body2" color="text.secondary">
              Items per page:
            </Typography>
            <FormControl size="small" sx={{ minWidth: 80 }}>
              <Select
                value={currentPageSize}
                onChange={handlePageSizeChange}
                displayEmpty
              >
                {pageSizeOptions.map((size) => (
                  <MenuItem key={size} value={size}>
                    {size}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        )}

        {showTotalCount && (
          <Typography variant="body2" color="text.secondary">
            {`${Math.min((currentPage - 1) * currentPageSize + 1, totalCount)}-${Math.min(currentPage * currentPageSize, totalCount)} of ${totalCount}`}
          </Typography>
        )}
      </Box>

      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={handlePageChange}
        color="primary"
        size="medium"
        showFirstButton
        showLastButton
        renderItem={(item) => (
          <PaginationItem
            {...item}
            sx={{
              '&.Mui-selected': {
                backgroundColor: 'primary.main',
                color: 'primary.contrastText',
                '&:hover': {
                  backgroundColor: 'primary.dark',
                },
              },
            }}
          />
        )}
      />
    </Box>
  );
}; 