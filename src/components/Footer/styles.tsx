import styled from "styled-components";

export const AppFooter = styled.footer`
  max-width: inherit;
  text-align: center;
  color: ${({ theme }) => theme.colors.black};
  padding: 32px;
  a {
    color: inherit;
    text-decoration: inherit;
    font-weight: bold;
    &:hover {
      color: ${({ theme }) => theme.colors.highlight};
    }
  }
`;
