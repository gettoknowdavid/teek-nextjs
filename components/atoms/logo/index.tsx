import { Block } from 'baseui/block';
import { HeadingSmall } from 'baseui/typography';
import React from 'react';

export function Logo() {
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
