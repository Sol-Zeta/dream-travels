import React from "react";
import Link from "next/link";
import styled from "styled-components";
const AppFooter = styled.footer`
  max-width: inherit;
  text-align: center;
  color: ${({ theme }) => theme.colors.black};
  padding: 16px 32px 32px;
  a {
    color: inherit;
    text-decoration: inherit;
    font-weight: bold;
    &:hover {
      color: ${({ theme }) => theme.colors.highlight};
    }
  }
`;

const Footer = () => {
  return (
      <AppFooter>
        <p>
          Developed by{" "}
          <Link href="https://github.com/Sol-Zeta" target="_blank">
            Soledad Pattoglio
          </Link>
        </p>
      </AppFooter>
  );
};

export default Footer;