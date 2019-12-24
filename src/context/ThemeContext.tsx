import React, { ReactNode, ReactElement } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { ThemeProps } from '../constants/theme.types';

const GlobalStyle = createGlobalStyle<ThemeProps>`
  @import url('https://fonts.googleapis.com/css?family=Rubik&display=swap');
  
  body {
    box-sizing: border-box;
    background:  ${props => props.theme.color.grey};
    position: relative;
    overflow-x: hidden;
    font-family: 'Rubik',serif !important;
  }
`;

interface Props {
  children: ReactElement | ReactElement[] | ReactNode;
}

const ThemeWrapper = (props: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        {props.children}
      </>
    </ThemeProvider>
  );
};

export default ThemeWrapper;
