'use client'
import * as React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import HomePage from './SIHMainPage'

export default function Home() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme2 = createTheme({
    palette: {
      primary: {
        light: '#757ce8',
        main: '#3f50b5',
        dark: '#002884',
        contrastText: '#fff',
      },
      secondary: {
        light: '#ff7961',
        main: '#f44336',
        dark: '#ba000d',
        contrastText: '#000',
      },
    },
    typography: {
      // Tell MUI what the font-size on the html element is.
      htmlFontSize: 100,
    },
  });

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: 'light',
        },
      },
      ),
    [prefersDarkMode],

  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        <div>
          <HomePage />
        </div>
      </main>
    </ThemeProvider>
  );
}
