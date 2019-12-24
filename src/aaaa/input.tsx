import React from 'react';
import styled from 'styled-components';
import { SearchProps } from 'antd/es/input';
import { Input as AntdInput } from 'antd';
import { InputProps } from 'antd/lib/input';

const StyledInput = styled(AntdInput)<SearchProps>`
  font-weight: bolder;
`;

export const Input: React.FC<InputProps> = props => {
  return <StyledInput {...props} />;
};

export default Input;
