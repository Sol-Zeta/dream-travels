import styled from "styled-components";

export const AppHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.black};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: 16px;
  overflow: hidden;
`;