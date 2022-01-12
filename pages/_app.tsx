import React from 'react';
import App, { AppProps } from 'next/app';
import { Provider as StyletronProvider } from 'styletron-react';
import { BaseProvider } from 'baseui';
import { AppContext } from 'next/dist/pages/_app';
import { ApolloProvider } from '@apollo/client';
import { persistStore } from 'redux-persist';
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import TeekTheme from '../theme';
import styletron from '../styletron';
import { useApollo } from '../lib/apollo';
import teekStore from '../redux/store';

import 'normalize.css';
import '../styles/globals.css';

function TeekApp(props: AppProps) {
  const { Component, pageProps } = props;
  const { initialApolloState, initialReduxState } = pageProps;
  const apolloClient = useApollo(initialApolloState);
  const reduxStore = teekStore(initialReduxState);
  const reduxPersistor = persistStore(reduxStore);

  return (
    <ReduxProvider store={reduxStore}>
      <PersistGate persistor={reduxPersistor} loading={(<div>loading...</div>)}>
        <ApolloProvider client={apolloClient}>
          <StyletronProvider value={styletron}>
            <BaseProvider theme={TeekTheme}>
              <Component {...pageProps} />
            </BaseProvider>
          </StyletronProvider>
        </ApolloProvider>
      </PersistGate>
    </ReduxProvider>
  );
}

export default TeekApp;

TeekApp.getInitialProps = async (context: AppContext) => {
  const appProps = await App.getInitialProps(context);
  const store = teekStore({});
  const { getState } = store;
  return { ...appProps, pageProps: { initialReduxState: getState() } };
};
