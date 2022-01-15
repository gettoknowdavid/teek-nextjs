import React from 'react';
import { Block } from 'baseui/block';
import { useStyletron } from 'baseui';
import { Axis } from '../../../enums';
import { NavItem } from '../../atoms/nav-item';
import { NavList } from '../../molecules/nav-list';
import { Logo } from '../../atoms/logo';
import { SignUpButton } from '../../atoms/sign-up-button';

export function Header() {
  const [css, theme] = useStyletron();

  return (
    <Block
      height="60px"
      paddingRight={['10px', '10px', '20px', '100px']}
      paddingLeft={['10px', '10px', '20px', '100px']}
      overrides={{
        Block: {
          style: (props) => ({
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
          }),
        },
      }}
    >
      <Logo />

      <Block className={css({
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        [theme.mediaQuery.small]: { display: 'none' },
        [theme.mediaQuery.medium]: { display: 'none' },
        [theme.mediaQuery.large]: { display: 'flex' },
      })}
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
