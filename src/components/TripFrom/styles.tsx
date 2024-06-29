import styled from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  overflow: scroll;
  height: 100%;
`;

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ButtonContainer = styled.div`
  justify-self: end;
`;

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-weight: normal;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;
