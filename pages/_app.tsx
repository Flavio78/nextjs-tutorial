import Navbar from '@/components/Navbar';
import Footer from '@/layout/Footer';
import Header from '@/layout/Header';
import '@/styles/globals.css';
import '@/styles/layout.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ReactElement, ReactNode } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';

import '@/components/Navbar.css';

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

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  if (Component.getLayout)
    return Component.getLayout(
      <ThemeProvider theme={theme}>
        <>
          <Component {...pageProps} />
        </>
      </ThemeProvider>
    );
  return (
    <ThemeProvider theme={theme}>
      <>
        <Head>
          <title>CodeEvolution</title>
          <meta name="description" content="Free tutorial" />
        </Head>
        <Navbar />
        <Header />
        <Component {...pageProps} />
        <Footer />
      </>
    </ThemeProvider>
  );
}
