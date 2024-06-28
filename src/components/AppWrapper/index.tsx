import React from "react";
import { Wrapper } from "./styles";

interface WrapperProps {
  children: React.ReactNode;
}

const AppWrapper = ({ children }: WrapperProps) => {
  return <Wrapper>{children}</Wrapper>;
};

export default AppWrapper;
