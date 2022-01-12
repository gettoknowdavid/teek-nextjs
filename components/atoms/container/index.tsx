import React from 'react';
import { Block, BlockProps } from 'baseui/block';

export function Container(props: BlockProps) {
  const { paddingRight, paddingLeft } = props;
  return (
    <Block
      {...props}
      paddingRight={paddingRight || ['10px', '10px', '20px', '80px']}
      paddingLeft={paddingLeft || ['10px', '10px', '20px', '80px']}
    />
  );
}
