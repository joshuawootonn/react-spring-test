import Flex from '../components/flex';
import { ReactComponent as Badger } from '../assets/logos/home_badger.svg';
import { Typography } from 'antd';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled(Flex)`
  height: 100vh;
`;

const Content3: React.FC<{}> = () => (
  <Wrapper justify='center' align='center' direction='column'>
    <Badger style={{ width: '300px', marginBottom: '50px' }} />
    <Typography.Title>React Spring</Typography.Title>
  </Wrapper>
);

export default Content3;
