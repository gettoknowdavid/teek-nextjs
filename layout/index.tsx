import React from 'react';
import PropTypes from 'prop-types';
import { Block } from 'baseui/block';

type Props = { children: React.ReactNode }

export default function Layout({ children }: Props) {
  return (
    <Block>
      <Block>
        {children}
      </Block>
    </Block>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
