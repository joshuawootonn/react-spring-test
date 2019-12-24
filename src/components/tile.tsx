import React, { FunctionComponent } from 'react';

import styled, { keyframes } from 'styled-components';
import { Theme } from 'constants/theme.types';
import { theme } from 'context/theme';
import { lighten } from 'polished';

import { Skeleton, Table } from 'antd';

interface ThemeProps {
  theme: Theme;
}

const Wrapper = styled.div<{ isFullWidth: boolean; marginBottom: boolean }>`
  width: ${props => (props.isFullWidth ? '100%' : 'auto')};
  border-radius: ${(props: ThemeProps) => props.theme.defaults.borderRadius};
  box-shadow: -4px 4px 0 0 ${lighten(0.4, theme.color.dark)},
    -8px 8px 0 0 ${lighten(0.425, theme.color.dark)};
  border: solid 2px #e8e8e8;
  margin-bottom: ${props => (props.marginBottom ? '16px' : '0')};
`;

const Content = styled.div`
  display: flex;
  border-radius: ${(props: ThemeProps) => props.theme.defaults.borderRadius};
  background: #ffffff;
  border: ${(props: ThemeProps) => props.theme.defaults.border};

  position: relative;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 16px;
`;

const Tile: FunctionComponent<{ isFullWidth?: boolean; marginBottom?: boolean }> = props => {
  return (
    <Wrapper isFullWidth={Boolean(props.isFullWidth)} marginBottom={Boolean(props.marginBottom)}>
      <Content>{props.children}</Content>
    </Wrapper>
  );
};
export default Tile;
