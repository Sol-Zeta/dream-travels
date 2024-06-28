import styled from "styled-components";

export const Container = styled.button`
  border: none;
  display: flex;
  align-items: center;
  gap: 12px;
  background: none;
  padding-top: ${({ theme }) => theme.spacing.md};
`;
