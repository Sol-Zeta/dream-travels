import React from "react";
import styled from "styled-components";
import { tabsRoutes } from "./utils";
import Tab from "./Tab";
import { useRouter } from "next/router";

const StyledTabsBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  height: 40px;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  border: ${({ theme }) => theme.border.primary};
  padding: 0;
  overflow: hidden;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  margin-top: ${({ theme }) => theme.spacing.lg};
`;

const TabsBar: React.FC = () => {
  const router = useRouter();

  return (
    <StyledTabsBar data-testid='tabs-bar'>
      {tabsRoutes.map((route) => (
        <Tab
          key={route.value}
          href={route.path}
          title={route.title}
          isActive={router.pathname === route.value}
        />
      ))}
    </StyledTabsBar>
  );
};

export default TabsBar;
