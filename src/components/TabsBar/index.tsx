"use client";
import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { ThemeProvider } from "styled-components";
import theme from "@/styles/theme";
import { tabsRoutes } from "./utils";

const NavBar = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  height: 40px;
  background-color: #f5f5f5;
  border-radius: ${({ theme }) => theme.borderRadius.large};
  border: ${({ theme }) => theme.border.tabsBar};
  padding: 0;
  overflow: hidden;
`;

const NavItem = styled(Link)`
  flex: 1;
  text-align: center;
  padding: 10px 20px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.black};
  text-decoration: inherit;
  transition: background-color 0.3s, color 0.3s;
  background-color: ${({ theme }) => theme.colors.white};

  &:hover {
    background-color: ${({ theme }) => theme.colors.grayExtraLight};
  }

  &:not(:last-child) {
    border-right: ${({ theme }) => theme.border.tabsBar};
  }
`;

const NavigationBar: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavBar>
        {tabsRoutes.map(route => (
          <NavItem href={route.path} >{route.title}</NavItem>
        ))}
      </NavBar>
    </ThemeProvider>
  );
};

export default NavigationBar;
