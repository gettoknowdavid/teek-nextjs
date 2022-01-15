import { useStyletron } from 'baseui';
import { useRouter } from 'next/router';
import { ParagraphSmall } from 'baseui/typography';
import React from 'react';
import { Axis } from '../../../enums';

export function NavItem(props: {
    axis: Axis, onClick?: () => unknown, slug?: string, title: string
}) {
  const [css, theme] = useStyletron();
  const router = useRouter();

  const {
    axis, onClick, slug, title,
  } = props;

  return (
    <button
      type="button"
      onClick={slug ? () => router.push(`/${slug}`) : onClick}
      className={css({
        listStyle: 'none',
        cursor: 'pointer',
        position: 'relative',
        maxWidth: '100px',
        width: '100%',
        display: 'flex',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: axis === Axis.HORIZONTAL ? '0px' : '20px',
        marginRight: axis === Axis.VERTICAL ? '0px' : '10px',
        marginBottom: axis === Axis.HORIZONTAL ? '0px' : '20px',
        marginLeft: axis === Axis.VERTICAL ? '0px' : '0px',
      })}
    >
      <ParagraphSmall
        margin={0}
        color="mono100"
        className={css({
          fontWeight: '500',
          transitionProperty: 'all',
          transitionDuration: theme.animation.timing900,
          ':hover': { color: 'rgba(253, 208, 173, 1)' },
          [theme.mediaQuery.small]: { fontSize: '22px' },
          [theme.mediaQuery.medium]: { fontSize: '24px' },
          [theme.mediaQuery.large]: { fontSize: '14px' },
        })}
      >
        {title}
      </ParagraphSmall>
    </button>
  );
}

NavItem.defaultProps = { slug: null, onClick: null };
