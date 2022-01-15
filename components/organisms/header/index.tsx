import React from 'react';
import { Block } from 'baseui/block';
import { Axis } from '../../../enums';
import { NavItem } from '../../atoms/nav-item';
import { NavList } from '../../molecules/nav-list';
import { Logo } from '../../atoms/logo';
import { SignUpButton } from '../../atoms/sign-up-button';

export function Header() {
  return (
    <Block
      overrides={{
        Block: {
          style: (props) => ({
            height: '60px',
            position: 'sticky',
            top: '0px',
            backgroundColor: '#1D1E26',
            margin: '0, auto',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            color: props.$theme.colors.mono100,
            transitionProperty: 'all',
            transitionDuration: props.$theme.animation.timing700,
            [props.$theme.mediaQuery.small]: { paddingRight: '10px', paddingLeft: '10px' },
            [props.$theme.mediaQuery.medium]: { paddingRight: '20px', paddingLeft: '20px' },
            [props.$theme.mediaQuery.large]: { paddingRight: '100px', paddingLeft: '100px' },
          }),
        },
      }}
    >

      <Logo />

      <Block
        width="100%"
        display={['none', 'none', 'none', 'flex']}
        justifyContent="space-between"
        alignItems="center"
      >
        <Block display={['none', 'none', 'none', 'block']}>
          <NavList axis={Axis.HORIZONTAL} />
        </Block>

        <Block display="flex" alignItems="center" maxWidth="160px" width="100%" height="60px">
          <NavItem axis={Axis.HORIZONTAL} title="Login" onClick={() => null} />
          <SignUpButton onClick={() => null} />
        </Block>
      </Block>
    </Block>
  );
}
