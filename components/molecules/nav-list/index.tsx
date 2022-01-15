import { useStyletron } from 'baseui';
import React from 'react';
import { Axis } from '../../../enums';
import { NavItem } from '../../atoms/nav-item';

export function NavList(props: { axis: Axis }) {
  const [css] = useStyletron();
  const { axis } = props;
  const isHorizontal = axis === Axis.HORIZONTAL;

  return (
    <ul className={css({
      display: 'flex',
      justifyContent: isHorizontal ? 'flex-start' : 'center',
      flexDirection: isHorizontal ? 'row' : 'column',
      margin: '0',
      padding: '0',
    })}
    >
      <NavItem axis={axis} title="Feature" slug="feature" />
    </ul>
  );
}
