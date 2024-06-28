import styled from "styled-components";

export const ItineraryContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 20px;
  padding-left: 50px;
  line-height: 1.6;
`;

export const DayContainer = styled.li`
  position: relative;
  &::before {
    content: "\25CF";
    margin-right: -10px;
    font-size: 20px;
    position: absolute;
    left: -30px;
  }
  &::after {
    position: absolute;
    left: -30px;
    top: 0;
    content: "";
    border-left: 2px solid black;
    margin-left: 5px;
    height: calc(100% + 30px);
  }
  &:first-of-type:after {
    top: 20px;
  }
  &:last-of-type:after {
    top: calc(-100% - 15px);
  }
`;

export const DayHeading = styled.p`
  margin: 0;
  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: bold;
`;

export const DayDescription = styled.p`
  margin: 5px 0 0;
  color: #555;
`;
