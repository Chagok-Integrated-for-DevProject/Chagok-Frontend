import styled from "@emotion/styled";

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

export const Arrow = styled.div`
  transform: rotate(
    ${({ isOpen }: IArrowStyle) => (isOpen ? "180deg" : "0deg")}
  );
`;

export const CrawlingDataBox = styled.div`
  * {
    line-height: normal;
  }
  h2 {
    font-size: 1.5rem;
    margin-block: 1rem 0.5rem;
  }
  p {
    margin-bottom: 0.5rem;
  }
`;
