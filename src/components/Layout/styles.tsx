import styled from "styled-components";

export const ContentWrapper = styled.div`
    width: 100%;
`
export const Title = styled.h2`
    font-size: ${({theme}) => theme.fontSize.lg};
    font-weight: normal;
    margin: ${({theme}) => theme.spacing.lg};
    margin-bottom: ${({theme}) => theme.spacing.sm};
`
export const Subtitle = styled.h3`
   font-size: ${({theme}) => theme.fontSize.md };
   font-weight: normal;
   margin-bottom: ${({theme}) => theme.spacing.lg}
`