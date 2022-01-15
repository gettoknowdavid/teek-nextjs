import React from 'react';
import { Block } from 'baseui/block';
import { HeadingSmall } from 'baseui/typography';
import { useStyletron } from 'baseui';
import { Button } from 'baseui/button';
import { Axis } from '../../../enums';
import { NavItem } from '../../atoms/nav-item';
import { NavList } from '../../molecules/nav-list';

function SignUpButton(props: { onClick: () => unknown }) {
  return (
    <Button
      {...props}
      overrides={{
        BaseButton: {
          style: ({ $theme }) => ({
            fontSize: '14px',
            width: '100%',
            paddingTop: '6px',
            paddingRight: '12px',
            paddingBottom: '6px',
            paddingLeft: '12px',
            backgroundColor: 'transparent',
            color: $theme.colors.mono100,
            borderTopRightRadius: '8px',
            borderBottomRightRadius: '8px',
            borderBottomLeftRadius: '8px',
            borderTopLeftRadius: '8px',
            borderTopWidth: '1px',
            borderTopStyle: 'solid',
            borderTopColor: $theme.colors.mono300,
            borderRightWidth: '1px',
            borderRightStyle: 'solid',
            borderRightColor: $theme.colors.mono300,
            borderBottomWidth: '1px',
            borderBottomStyle: 'solid',
            borderBottomColor: $theme.colors.mono300,
            borderLeftWidth: '1px',
            borderLeftStyle: 'solid',
            borderLeftColor: $theme.colors.mono300,
            transitionProperty: 'all',
            transitionDuration: $theme.animation.timing700,
            ':hover': {
              background: $theme.gradients.main,
              color: 'white',
              borderTopColor: 'transparent',
              borderRightColor: 'transparent',
              borderBottomColor: 'transparent',
              borderLeftColor: 'transparent',
            },
          }),
        },
      }}
    >
      Sign up
    </Button>
  );
}

function Logo() {
  return (
    <Block
      marginRight={['0px', '0px', '0px', '50px']}
      display="flex"
      justifyContent="flex-start"
      alignItems="flex-end"
    >
      <HeadingSmall overrides={{
        Block: {
          style: () => ({
            fontWeight: '800',
            fontSize: '26px',
            lineHeight: '26px',
            paddingBottom: 0,
            marginTop: 0,
            marginBottom: 0,
          }),
        },
      }}
      >
        teek
      </HeadingSmall>
      <Block overrides={{
        Block: {
          style: () => ({
            height: '10px',
            width: '10px',
            marginLeft: '2px',
            marginBottom: '3px',
            borderRadius: '50%',
            background: 'linear-gradient(43deg,rgb(201, 44, 172) 0%,rgba(172, 49, 187, 1) 28%,rgba(253, 208, 173, 1) 87%)',
          }),
        },
      }}
      />
    </Block>
  );
}

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
