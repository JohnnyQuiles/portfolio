import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material';

const PURPLE = '#6750A4';
const BLUE = '#EDF2F4';

const THEME = createTheme({
    palette: {
        primary: {
            main:BLUE,
        },
        secondary: {
            main: PURPLE,
        },
    },

    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: '25px',
                    fontSize: '.75rem',
                },
            },
        },
    },
});

function CustomThemeProvider(props) {
    const { children } = props;

    return (
        <ThemeProvider theme={THEME}>
            {children}
        </ThemeProvider>
    );
}

export default CustomThemeProvider;