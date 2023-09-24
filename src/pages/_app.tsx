import { GlobalStyles } from '@@styles/globals';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import type { AppProps } from 'next/app';

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
      {GlobalStyles}
      <Component {...pageProps} />
    </CacheProvider>
  );
}
