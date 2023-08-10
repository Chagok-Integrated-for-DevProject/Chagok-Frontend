import isPropValid from "@emotion/is-prop-valid";
import styled from "@emotion/styled";
import Image from "next/image";

interface IArrowStyle {
  isOpen: boolean;
}

export const Details = styled.details``;

export const Summary = styled.summary`
  max-width: 8rem;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;

  ::-webkit-details-marker,
  ::marker {
    display: none;
  }

  cursor: pointer;

  span {
    display: inline-block;
    text-align: center;
    width: 5rem;
  }
`;

export const Arrow = styled(Image, {
  // Customizing prop forwarding
  shouldForwardProp: (prop) => isPropValid(prop) && prop !== "isOpen",
})`
  transform: rotate(
    ${({ isOpen }: IArrowStyle) => (isOpen ? "180deg" : "0deg")}
  );
`;

export const CrawlingDataBox = styled.div``;
