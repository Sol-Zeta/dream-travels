import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const Label = styled.label`
  margin-bottom: 5px;
  font-size: 14px;
  color: #333;
`;

export const StyledInput = styled.input`
  border: ${({ theme }) => theme.border.primary};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: 10px 15px;
  outline: none;
  font-size: 16px;
  width: 100%;

  &:focus {
    border-color: #aaa;
  }
`;

export const StyledTextarea = styled.textarea`
  font-family: inherit;
  line-height: 1.5em;
  border: 1px solid #ddd;
  border-radius: 15px;
  padding: 10px 15px;
  outline: none;
  font-size: 16px;
  width: 100%;
  resize: none;

  &:focus {
    border-color: #aaa;
  }
`;
