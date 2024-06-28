"use client";
import React from "react";
import styled from "styled-components";

interface WrapperProps {
  children: React.ReactNode;
}

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  max-width: 70%;
  padding: 16px;
  margin: 0 auto;
  box-shadow: ${({ theme }) => theme.shadow.wrapper};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AppWrapper = ({ children }: WrapperProps) => {
  return <Wrapper>{children}</Wrapper>;
};

export default AppWrapper;
