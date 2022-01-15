import React from 'react';
import { useStyletron } from 'baseui';
import TeekTheme from '../../../theme';

export function SignUpButton(props: { onClick: () => unknown }) {
  const [css, theme] = useStyletron();
  return (
    <button
      {...props}
      type="button"
      className={css({
        fontSize: '14px',
        width: '100%',
        paddingTop: '6px',
        paddingRight: '12px',
        paddingBottom: '6px',
        paddingLeft: '12px',
        backgroundColor: 'transparent',
        color: theme.colors.mono100,
        borderTopRightRadius: '8px',
        borderBottomRightRadius: '8px',
        borderBottomLeftRadius: '8px',
        borderTopLeftRadius: '8px',
        borderTopWidth: '1px',
        borderTopStyle: 'solid',
        borderTopColor: theme.colors.mono300,
        borderRightWidth: '1px',
        borderRightStyle: 'solid',
        borderRightColor: theme.colors.mono300,
        borderBottomWidth: '1px',
        borderBottomStyle: 'solid',
        borderBottomColor: theme.colors.mono300,
        borderLeftWidth: '1px',
        borderLeftStyle: 'solid',
        borderLeftColor: theme.colors.mono300,
        transitionProperty: 'all',
        transitionDuration: theme.animation.timing700,
        ':hover': {
          background: TeekTheme.gradients.main,
          color: 'white',
          borderTopColor: 'transparent',
          borderRightColor: 'transparent',
          borderBottomColor: 'transparent',
          borderLeftColor: 'transparent',
        },
      })}
    >
      Sign up
    </button>
  );
}
