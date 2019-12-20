// tslint:disable: object-literal-sort-keys
import * as React from 'react';
import { ThemeProvider } from 'styled-components';

export const theme = {
  colors: {
    bottomBackgrund: '#1D2538',
    topBackground: '#38425B',
    border: '#212C40',
  },
  fonts: ['sans-serif', 'Roboto'],
  fontSizes: {
    small: '1em',
    medium: '2em',
    large: '3em',
  },
  codeTheme: {
    fontSize: '1.1em',
    fontDefaultColor: 'white',
  },
};

export type Theme = typeof theme;

export const WithTheme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
