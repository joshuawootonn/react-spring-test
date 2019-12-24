import Flex from '../components/flex';
import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { useSpring, animated as a, interpolate } from 'react-spring';
import FollowingEye from '../components/followingEye';

const Wrapper = styled(Flex)`
  height: 100vh;
`;

const Content1: React.FC<{}> = () => {
  return (
    <Wrapper justify='center' align='center' direction='column'>
      <FollowingEye />
    </Wrapper>
  );
};

export default Content1;
