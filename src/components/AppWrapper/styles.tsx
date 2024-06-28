import styled from "styled-components";


export const Wrapper = styled.div`
  width: 100%;
  height: auto;
  min-height: 100vh;
  max-width: 100%;
  padding: 16px;
  margin: 0 auto;
  box-shadow: ${({ theme }) => theme.shadow.wrapper};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  &>div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    max-width: 80%;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    max-width: 65%;
  }
`;
