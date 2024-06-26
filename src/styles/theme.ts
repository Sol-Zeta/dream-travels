import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  colors: {
    primary: '#333',
    secondary: '#444',
    hover: '#e0e0e0',
    border: '#dcdcdc',
    black: '#121212',
    white: '#ffffff',
    highlight: '#238636',
    background: '#f5f5f5',
    text: '#000',
  },
  shadow: {
    wrapper: '0px 0px 9px 5px rgba(0,0,0,0.06)',
  },
  borderRadius: '20px',
  spacing: {
    small: '10px',
    medium: '20px',
  },
  transition: '0.3s',
};

export default theme;
