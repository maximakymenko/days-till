import { createGlobalStyle } from 'styled-components';

export const theme = {
  primaryColorDark: '#313638',
  primaryColorLight: '#E8E9EB',
  primaryYellow: '#FCF66A',
  fontFamily: "'Nunito', sans-serif",
  primaryShadow: '0 1px 16px 0 rgba(0, 0, 0, 0.5)',

  fs1: '36px',
  fs2: '24px',
  fs3: '16px',
  'fs3-1': '14px',
  fs4: '12px',

  mobile: '576px',
};

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Nunito:400,700');

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: ${theme.fontFamily};
    font-size: ${theme.fs3};
    color: ${theme.primaryColorLight};
    background: ${theme.primaryColorDark};
  }
`;
