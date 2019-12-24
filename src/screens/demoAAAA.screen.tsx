import React, { useEffect } from 'react';

import styled from 'styled-components';

import Flex from 'components/flex';
import Container from 'components/container';

import { Button } from 'aaaa';
import { Typography } from 'antd';

import Tile from 'components/tile';
import { withRouter, RouteComponentProps } from 'react-router';

const { Title, Text } = Typography;

const PageTitle = styled(Title)`
  padding-left: 8px;
`;

const ButtonBox = styled(Flex)`
  button {
    margin-left: 20px;
  }
`;

const DemoAAAAScreen: React.FC<RouteComponentProps> = props => {
  useEffect(() => {
    document.title = 'Demo the Lads';
  }, []);

  return (
    <Container>
      <PageTitle>AAAA Demo</PageTitle>
      <Tile isFullWidth={true}>
        <Title>Button Lads</Title>
        <ButtonBox justify='flex-start' align='flex-start' direction='row'>
          <Title level={4}>Types:</Title>
          <Button type='primary'>Primary</Button>
          <Button>Default</Button>
          <Button type='dashed'>Dashed</Button>
          <Button type='danger'>Danger</Button>
          <Button type='link'>Link</Button>
        </ButtonBox>
        <ButtonBox justify='flex-start' align='flex-start' direction='row'>
          <Title level={4}>Loading:</Title>
          <Button loading={true} type='primary'>
            Primary
          </Button>
          <Button loading={true}>Default</Button>
          <Button loading={true} type='dashed'>
            Dashed
          </Button>
          <Button loading={true} type='danger'>
            Danger
          </Button>
          <Button loading={true} type='link'>
            Link
          </Button>
        </ButtonBox>
        <ButtonBox justify='flex-start' align='flex-start' direction='row'>
          <Title level={4}>Disabled:</Title>
          <Button type='primary' disabled={true}>
            Primary
          </Button>
          <Button disabled={true}>Default</Button>
          <Button type='dashed' disabled={true}>
            Dashed
          </Button>
          <Button type='link' disabled={true}>
            Link
          </Button>
        </ButtonBox>
      </Tile>
    </Container>
  );
};

export default withRouter(DemoAAAAScreen);
