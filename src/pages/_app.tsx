import Layout from '@@components/Layout';
import { GlobalStyles } from '@@styles/globals';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import type { AppProps } from 'next/app';
import Head from 'next/head';

/**
 * Emotion cache
 */
const cache = createCache({ key: 'next' });

/**
 * Root layout component of Next.js
 */
export default function App({ Component, pageProps }: AppProps) {
  return (
    <CacheProvider value={cache}>
      <Head>
        <meta name="description" content="Made for Cooltix" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {GlobalStyles}
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CacheProvider>
  );
}
