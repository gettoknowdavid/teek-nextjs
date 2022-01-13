import React from 'react';
import { Block, BlockProps } from 'baseui/block';

export function Container(props: BlockProps) {
  const { backgroundColor, paddingRight, paddingLeft } = props;
  return (
    <Block
      {...props}
      backgroundColor={backgroundColor || '#1D1E26'}
      paddingRight={paddingRight || ['10px', '10px', '20px', '80px']}
      paddingLeft={paddingLeft || ['10px', '10px', '20px', '80px']}
    />
  );
}
