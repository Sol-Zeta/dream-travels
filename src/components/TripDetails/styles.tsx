import { Trip } from "@/types/index";
import styled from "styled-components";

export const Container = styled.div`
  /* position: relative; */
`;

export const HeadingImage = styled.div<Trip>`
  width: 100%;
  height: 250px;
  background-image: url(${({ photo_url }) => photo_url});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const ImageContainer = styled.div`
  width: 100%;
  max-height: 20px;
`;

export const ContentContainer = styled.div`
  padding: 20px;
  max-height: 60vh;
  overflow: scroll;
`;

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.xl};
`;

export const ItineraryTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.lg};
  padding-top: ${({ theme }) => theme.spacing.lg};
`;

export const Description = styled.p`
  font-size: ${({ theme }) => theme.fontSize.md};
  line-height: 1.5em;
  padding-top: ${({ theme }) => theme.spacing.lg};
  padding-bottom: ${({ theme }) => theme.spacing.lg};
  border-bottom: ${({ theme }) => theme.border.primary};
`;
