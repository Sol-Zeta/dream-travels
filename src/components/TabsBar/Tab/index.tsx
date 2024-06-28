import React from "react";
import Link from "next/link";
import styled from "styled-components";

interface StyledTabProps {
    isActive: boolean;
}

interface TabProps extends StyledTabProps {
  href: string;
  title: string;
}

const StyledTab = styled(Link)<StyledTabProps>`
  flex: 1;
  text-align: center;
  padding: 10px 20px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.black};
  text-decoration: inherit;
  transition: background-color 0.3s, color 0.3s;
  background-color: ${({ isActive, theme }) =>
    isActive ? theme.colors.grayExtraLight : theme.colors.white};

  &:hover {
    background-color: ${({ theme }) => theme.colors.grayExtraLight};
  }

  &:not(:last-child) {
    border-right: ${({ theme }) => theme.border.tabsBar};
  }
`;

const Tab: React.FC<TabProps> = ({ href, title, isActive }) => {
  return (
    <StyledTab href={href} isActive={isActive}>
      {title}
    </StyledTab>
  );
};

export default Tab;
