import React from 'react';

import { Button } from 'aaaa';
import styled from 'styled-components';

import { Typography } from 'antd';
import { HeaderLoginButtonId, HeaderLogoutButtonId } from 'constants/auth.ids';
import { lighten } from 'polished';
import { theme } from 'context/theme';

const { Text } = Typography;

const NavBar = styled.nav`
  padding: 8px 20px;
  background-color: #fff;
  margin-bottom: 30px;
  overflow: auto;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 0 0 ${lighten(0.4, theme.color.dark)},
    0 8px 0 0 ${lighten(0.425, theme.color.dark)};
`;
const Left = styled.div`
  height: 48px;

  float: left;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  h3 {
    margin-bottom: 0px;
  }
`;
const Logo = styled.img`
  height: 32px;
  margin-right: 8px;
`;

const Right = styled.div`
  float: right;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    margin-bottom: 5px;
  }
`;

const Header: React.FC<{}> = () => {
  return (
    <NavBar>
      <Left>
        {/*TODO: this needs to be a link to the home page*/}
        <Logo src={require('assets/logos/cem.svg')} />
        <Typography.Title level={3}>CEM</Typography.Title>
      </Left>
      <div>
        <Text strong={true}>
          For informational purposes only and not intended for diagnostic use.
        </Text>
      </div>
      <Right>
        <Button key='0' id={HeaderLogoutButtonId}>
          Nice
        </Button>
      </Right>
    </NavBar>
  );
};
export default Header;
