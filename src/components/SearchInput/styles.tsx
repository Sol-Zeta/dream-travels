import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  border: ${({ theme }) => theme.border.primary};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  overflow: hidden;
  width: 90%;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    max-width: 350px;
  }
`;

export const Input = styled.input.attrs({
  type: "text",
  placeholder: "Search trips",
})`
  background: transparent;
  border: none;
  padding: 10px 15px;
  flex: 1;
  outline: none;
  font-size: 16px;
  border-radius: 25px 0 0 25px;
`;
