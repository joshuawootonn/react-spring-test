import React from 'react';
import styled, { css, keyframes } from 'styled-components';

import { Button as AntdButton } from 'antd';
import { Spin } from './spin';
import { ButtonProps } from 'antd/es/button';
import { ThemeProps } from '../constants/theme.types';
import { shade } from 'polished';

const StyledButton = styled(AntdButton)<ButtonProps & ThemeProps>`
  font-weight: normal;
  position: relative;
  line-height: 1.5;

  ${props =>
    props.type === 'danger'
      ? css`
          background-color: white;
          color: ${props => props.theme.color.error};
        `
      : ''}
`;

const Loader = styled(Spin)`
  position: absolute !important;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Button: React.FC<ButtonProps> = props => {
  return (
    <StyledButton {...props} loading={false} disabled={props.disabled || !!props.loading}>
      {props.loading && <Loader variant='OneEye' size='default' />}
      {props.children}
    </StyledButton>
  );
};

export default Button;
