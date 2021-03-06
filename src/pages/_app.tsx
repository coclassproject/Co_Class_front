import React from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import GlobalStyle from 'src/theme/globalStyle';
import { ThemeProvider } from '@emotion/react';
import { lightTheme } from 'src/theme';

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=yes,viewport-fit=cover"
      />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@1.0/nanumsquare.css"
      />
      <title>Co Class</title>
    </Head>
    <GlobalStyle />
    <ThemeProvider theme={lightTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  </>
);

export default App;
