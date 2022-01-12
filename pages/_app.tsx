import React from 'react';
import App, { AppProps } from 'next/app';
import { Provider as StyletronProvider } from 'styletron-react';
import { BaseProvider } from 'baseui';
import { AppContext } from 'next/dist/pages/_app';
import { ApolloProvider } from '@apollo/client';
import TeekTheme from '../theme';
import styletron from '../styletron';
import { useApollo } from '../lib/apollo';

import 'normalize.css';
import '../styles/globals.css';

function TeekApp(props: AppProps) {
  const { Component, pageProps } = props;
  const { initialApolloState } = pageProps;
  const apolloClient = useApollo(initialApolloState);

  return (
    <ApolloProvider client={apolloClient}>
      <StyletronProvider value={styletron}>
        <BaseProvider theme={TeekTheme}>
          <Component {...pageProps} />
        </BaseProvider>
      </StyletronProvider>
    </ApolloProvider>
  );
}

export default TeekApp;

TeekApp.getInitialProps = async (context: AppContext) => {
  const appProps = await App.getInitialProps(context);
  return { ...appProps };
};
