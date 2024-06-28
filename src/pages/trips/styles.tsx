import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: ${({ theme }) => theme.spacing.lg};
`;
