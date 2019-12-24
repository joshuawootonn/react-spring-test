import React, { ReactElement, ReactNode } from 'react';
import styled, { css } from 'styled-components';

import { Spin as AntdSpin } from 'antd';
import { SpinProps as AntdSpinProps } from 'antd/es/spin';

import OneEye from './Spin/oneEye';
import TwoEyes from './Spin/twoEyes';

const StyledSpin = styled(AntdSpin)<AntdSpinProps>`
  font-weight: bolder;
  height: 100%;
  position: relative;
`;

type LoaderVariants = 'OneEye' | 'TwoEyes';

const defaultSpinProps: { size: 'default' | 'small' | 'large'; variant: LoaderVariants } = {
  variant: 'TwoEyes',
  size: 'default',
};

type SpinProps = {
  size: 'default' | 'small' | 'large';
  variant: LoaderVariants;
} & typeof defaultSpinProps;

/**
 * TODO: move this to the React.FC type... currently this breaks
 * check this link for fix: https://github.com/DefinitelyTyped/DefinitelyTyped/issues/30695
 */
export const Spin = (props: SpinProps & AntdSpinProps) => {
  const Loaders: { [key in LoaderVariants]: ReactElement } = {
    OneEye: <OneEye size={props.size} />,
    TwoEyes: <TwoEyes size={props.size} />,
  };

  return <StyledSpin {...props} indicator={Loaders[props.variant]} />;
};
Spin.defaultProps = defaultSpinProps;

export default Spin;
