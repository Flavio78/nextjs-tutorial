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
import type { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';

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

type AppPropsWithLayout<P> = AppProps<P> & {
  Component: NextPageWithLayout<P>;
};

export default function App({
  Component,
  pageProps,
}: AppPropsWithLayout<{ session: Session }>) {
  if (Component.getLayout)
    return Component.getLayout(
      <ThemeProvider theme={theme}>
        <SessionProvider session={pageProps.session}>
          <Component {...pageProps} />
        </SessionProvider>
      </ThemeProvider>
    );
  return (
    <ThemeProvider theme={theme}>
      <SessionProvider session={pageProps.session}>
        <Head>
          <title>CodeEvolution</title>
          <meta name="description" content="Free tutorial" />
        </Head>
        <Navbar />
        <Header />
        <Component {...pageProps} />
        <Footer />
      </SessionProvider>
    </ThemeProvider>
  );
}
