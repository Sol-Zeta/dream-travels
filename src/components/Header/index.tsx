"use client";
import React from "react";
import Image from "next/image";
import styled from "styled-components";
import appLogo from "@/assets/app-logo.png";
import { ThemeProvider } from "styled-components";
import theme from "@/styles/theme";
import Button, { ButtonVariants } from "@/components/Button";

const AppHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.black};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  padding: 16px;
  overflow: hidden;
`;

const Header = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppHeader>
        <Image
          src={appLogo}
          alt="Dream Travels Logo"
          width={48}
          height={48}
        />
        <Button variant={ButtonVariants.SECONDARY}>Find my next trip</Button>
      </AppHeader>
    </ThemeProvider>
  );
};

export default Header;
