import React, { FunctionComponent } from 'react';

import styled from 'styled-components';

export interface Props {
  justify: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';
  align: 'flex-start' | 'center' | 'flex-end' | 'baseline' | 'stretch';
  direction?: 'row' | 'column';
  height?: string;
}
const Flex = styled.div<Props>`
  width: 100%;
  display: flex;
  flex-direction: ${(props: Props) => (props.direction ? props.direction : 'row')};
  justify-content: ${(props: Props) => props.justify};
  align-items: ${(props: Props) => props.align};
  height: ${(props: Props) => (props.height ? props.height : 'auto')};
`;

export default Flex;
