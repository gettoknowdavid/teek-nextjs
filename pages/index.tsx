import React from 'react';
import { Input } from 'baseui/input';
import { useStyletron } from 'baseui';
import { Block } from 'baseui/block';
import { DisplayXSmall } from 'baseui/typography';
import { Container } from '../components/atoms/container';
import Layout from '../layout';

export default function Home() {
  const [css, theme] = useStyletron();

  return (
    <Layout>
      <Container>
        <Block className={css({
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          overflow: 'hidden',
        })}
        >
          <DisplayXSmall>Teek your task.</DisplayXSmall>
        </Block>
      </Container>
    </Layout>
  );
}
