import React from 'react';
import PropTypes from 'prop-types';
import { Block } from 'baseui/block';
import { Header } from '../components/organisms/header';

type Props = { children: React.ReactNode }

export default function Layout({ children }: Props) {
  return (
    <Block overrides={{
      Block: {
        style: () => ({
          backgroundColor: '#1D1E26',
          maxWidth: '1440px',
          margin: '0px auto',
          position: 'relative',
        }),
      },
    }}
    >
      <Header />
      <Block overrides={{
        Block: {
          style: () => ({
            maxWidth: '1440px',
            height: '100%',
            margin: '0px auto',
          }),
        },
      }}
      >
        {children}
      </Block>
    </Block>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
