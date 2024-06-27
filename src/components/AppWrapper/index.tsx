"use client";
import React from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import theme from "@/styles/theme";
import { ValueOf } from "next/dist/shared/lib/constants";

interface WrapperProps {
  children: React.ReactNode;
}

const Wrapper = styled.div`
  width: 70%;
  height: 100vh;
  max-width: 1024px;
  padding: 16px;
  box-shadow: ${({ theme }) => theme.shadow.wrapper};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AppWrapper = ({ children }: WrapperProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>{children}</Wrapper>
    </ThemeProvider>
  );
};

export default AppWrapper;
