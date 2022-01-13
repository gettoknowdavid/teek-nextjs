import React from 'react';
import { Input } from 'baseui/input';
import { useStyletron } from 'baseui';
import { Block } from 'baseui/block';
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
          <Input
            placeholder="Type something and press enter..."
            overrides={{
              Input: {
                style: ({ $theme }) => ({
                  fontSize: $theme.typography.ParagraphSmall.fontSize,
                  '::placeholder': { color: $theme.colors.mono600, fontWeight: '300' },
                }),
              },
              Root: {
                style: () => ({
                  borderTopWidth: 0,
                  borderRightWidth: 0,
                  borderBottomWidth: 0,
                  borderLeftWidth: 0,
                  borderTopRightRadius: '8px',
                  borderTopLeftRadius: '8px',
                  borderBottomRightRadius: '8px',
                  borderBottomLeftRadius: '8px',
                  maxWidth: '600px',
                }),
              },
            }}
          />
        </Block>
      </Container>
    </Layout>
  );
}
