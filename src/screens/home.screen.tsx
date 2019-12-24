import React from 'react';

import styled from 'styled-components';

import Content1 from '../containers/content1.container';
import Content2 from '../containers/content2.container';
import Content3 from '../containers/content3.container';

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export interface Props {}

const HomeScreen: React.FC<Props> = (props: Props) => {
  return (
    <Container>
      <Wrapper>
        <Content1 />
        <Content2 />
        <Content3 />
      </Wrapper>
    </Container>
  );
};

export default HomeScreen;
