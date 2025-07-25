import React from 'react';
import { Button, ButtonProps, SxProps, Theme } from '@mui/material';

interface MUIButtonProps extends ButtonProps {
    children: React.ReactNode;
    sx?: SxProps<Theme>;
}

export const MUIButton: React.FC<MUIButtonProps> = ({ children, sx, ...props }) => {
    return (
        <Button
            variant="contained"
            sx={{
                boxShadow: 1,
                backgroundColor: '#4CAF50',
                color: 'white',
                '&:hover': {
                    backgroundColor: '#45a049',
                },
                margin: '8px',
                borderRadius: '3px',
                textTransform: 'capitalize',
                fontWeight: 600,
                padding: '5px 10px',
                ...sx
            }}
            {...props}
        >
            {children}
        </Button>
    );
}; 