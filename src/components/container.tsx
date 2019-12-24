import React, { FunctionComponent } from 'react';

import styled from 'styled-components';

const Wrapper = styled.div`
  @media (max-width: 1100px) {
    width: calc(100% - 48px);
    margin: 24px 24px;
  }
  @media (min-width: 1100px) {
    max-width: 1100px;
    margin: 24px auto;
  }
`;

const Container: FunctionComponent = props => {
  return <Wrapper>{props.children}</Wrapper>;
};

export default Container;
