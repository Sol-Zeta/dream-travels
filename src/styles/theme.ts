import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  colors: {
    primary: '#333',
    secondary: '#444',
    hover: '#e0e0e0',
    border: '#dcdcdc',
    black: '#121212',
    white: '#ffffff',
    grayLighter: '#D8D8D8',
    grayExtraLight: '#F3F3F3',
    highlight: '#238636',
    background: '#f5f5f5',
    text: '#000',
  },
  border: {
    tabsBar: '1px solid #D8D8D8'
  },
  shadow: {
    wrapper: '0px 0px 9px 5px rgba(0,0,0,0.06)',
  },
  borderRadius: {
    small: '16px',
    large: '100px',
  },
  spacing: {
    small: '10px',
    medium: '20px',
  },
  transition: '0.3s',
};

export default theme;
