import '../../styles/globals.css';
import { QueryClientProvider } from '@tanstack/react-query';
import { Analytics } from '@vercel/analytics/react';
import axios from 'axios';
import React from 'react';
import { SWRConfig } from 'swr';

import type { AppProps } from 'next/app';

import RootLayout from 'shared/components/Layouts/RootLayout';
import { GlobalStyle, ThemeProvider, theme } from 'shared/theme';
import { queryClient } from 'shared/utils/Query';

import { Toaster } from 'src/components/ui/toaster';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <SWRConfig
            value={{
              dedupingInterval: 5000,
              fetcher: (url: string) => axios(url).then(r => r.data),
            }}
          >
            <GlobalStyle />
            <RootLayout>
              <Component {...pageProps} />
              <Toaster />
            </RootLayout>
          </SWRConfig>
        </ThemeProvider>
      </QueryClientProvider>
      <Analytics />
    </React.Fragment>
  );
}
