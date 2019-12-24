import React from 'react';
import styled, { css } from 'styled-components';
import { Tag as AntdTag } from 'antd';
import { TagProps } from 'antd/lib/tag';
import { ThemeProps } from '../constants/theme.types';

const StyledTag = styled(AntdTag)<TagProps & ThemeProps>`
  font-weight: normal;
  border-radius: 0 !important;
`;

export const Tag: React.FC<TagProps> = props => {
  return <StyledTag {...props} />;
};

export default Tag;
