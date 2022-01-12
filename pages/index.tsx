import React from 'react';
import { Block } from 'baseui/block';
import { DisplayLarge, DisplaySmall } from 'baseui/typography';
import { Button } from 'baseui/button';
import { useTeekDispatch, useTeekSelector } from '../hooks';
import { selectGlobal } from '../redux/selectors';
import { toggleDrawer } from '../redux/slices/global.slice';
import { Container } from '../components/atoms/container';

export default function Home() {
  const dispatch = useTeekDispatch();
  const { drawerIsOpen } = useTeekSelector(selectGlobal);

  return (
    <Container paddingTop="10px">
      <DisplayLarge>This is Home</DisplayLarge>
      {drawerIsOpen
        ? (<DisplaySmall>The drawer is open</DisplaySmall>)
        : (<DisplaySmall>The drawer is not open!</DisplaySmall>)}
      <Button
        onClick={() => dispatch(toggleDrawer())}
        overrides={{
          BaseButton: {
            style: ({ $theme }) => ({
              backgroundColor: !drawerIsOpen ? $theme.colors.positive : $theme.colors.mono900,
            }),
          },
        }}
      >
        Toggle Drawer
      </Button>
    </Container>
  );
}
