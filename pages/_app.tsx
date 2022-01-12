import React from 'react';
import { AppProps } from 'next/app';
import { Provider as StyletronProvider } from 'styletron-react';
import { BaseProvider } from 'baseui';
import TeekTheme from '../theme';
import styletron from '../styletron';

import 'normalize.css';
import '../styles/globals.css';

function TeekApp(props: AppProps) {
  const { Component, pageProps } = props;
  return (
    <StyletronProvider value={styletron}>
      <BaseProvider theme={TeekTheme}>
        <Component {...pageProps} />
      </BaseProvider>
    </StyletronProvider>
  );
}

export default TeekApp;
