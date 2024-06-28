import { styled } from "styled-components";

export const CardContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 400px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  border: ${({ theme }) => theme.border.primary};
  overflow: hidden;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: row;
    height: 210px;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  flex: 1;
  width: 100%;
  overflow: hidden;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 50%;
  }
`

export const TextContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: ${({ theme }) => theme.padding["3xl"]};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 50%; 
    padding: ${({ theme }) => theme.padding['3xl']};
  }

  h2 {
    padding-bottom: ${({ theme }) => theme.spacing.md};
  }
`;

export const CallToActionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  justify-self: end;
  margin-top: ${({ theme }) => theme.padding['3xl']};
  div:nth-child(2) {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: ${({ theme }) => theme.spacing.md};
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: row;
    justify-content: space-between;
    div:nth-child(2) {
      gap: ${({ theme }) => theme.spacing.md};
      margin-top: 0;
      width: inherit;
    }
  }
`;