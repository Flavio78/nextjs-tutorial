import '@/styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { DefaultTheme, ThemeProvider } from 'styled-components';

// Extend the DefaultTheme interface
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary?: string;
    };
  }
}

const theme: DefaultTheme = {
  colors: {
    primary: '#355C7D',
  },
};

import type { AppProps } from 'next/app';
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
