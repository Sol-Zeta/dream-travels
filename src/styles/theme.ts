import { DefaultTheme } from "styled-components";

const breakpoints = {
  sm: "576px",
  md: "768px",
  lg: "992px",
  xl: "1200px",
};

const theme: DefaultTheme = {
  breakpoints,
  colors: {
    primary: "#333",
    secondary: "#444",
    hover: "#e0e0e0",
    border: "#dcdcdc",
    black: "#121212",
    white: "#ffffff",
    red: "#C93957",
    grayLighter: "#D8D8D8",
    grayExtraLight: "#F3F3F3",
    highlight: "#238636",
    background: "#f5f5f5",
    text: "#000",
  },
  border: {
    primary: "1px solid #D8D8D8",
  },
  borderRadius: {
    md: "16px",
    lg: "100px",
  },
  fontSize: {
    xl: "2em",
    lg: "1.5em",
    md: "1em",
    sm: ".75",
  },
  padding: {
    "3xl": "24px",
  },
  shadow: {
    wrapper: "0px 0px 9px 5px rgba(0,0,0,0.06)",
  },
  spacing: {
    sm: "10px",
    md: "16px",
    lg: "24px",
  },
  transition: "0.3s",
};

export default theme;
