import styled from "@emotion/styled";
import { palette } from "styles/palette";

export const Wrapper = styled.section`
  padding: 0 2.5rem;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 6rem;
`;

export const Title = styled.h2`
  color: ${palette.black};
  font-size: 1.75rem;
  font-weight: 700;
  line-height: 2.625rem;
`;

export const ScrabViewBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2.5rem;

  font-size: 1.25rem;
`;

export const ScrabCount = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-weight: 700;
`;

export const ViewCount = styled.div`
  color: ${palette.fontGray200};
  font-weight: 400;
`;

export const Hr = styled.div`
  border-top: 1px solid ${palette.bdGray300};
  margin-bottom: 3.44rem;
`;

export const Body = styled.main`
  display: flex;
  gap: 4.5rem;
`;

export const ImageBox = styled.div`
  border-radius: 0.625rem;
  max-width: 369px;
  max-height: 522;
  width: 100%;
  height: 100%;
  overflow: hidden;

  /* FIXME: 추후 삭제 */
  > img {
    transform: scale(1.3);
  }
`;

export const Information = styled.div`
  width: 100%;
  font-size: 1.5rem;
  font-weight: 700;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Summary = styled.div`
  > div {
    display: flex;
    gap: 2.25rem;
    margin-bottom: 3rem;
  }
`;

export const CautionAndApply = styled.div``;

export const Label = styled.label`
  color: #8e8e8e;
  min-width: 6.75rem;
`;

export const Content = styled.span`
  color: ${palette.black};
`;

export const ResourceLink = styled.a`
  color: ${palette.black};

  :hover {
    text-decoration: underline;
  }
`;

export const Organizer = styled.div``;
export const ReceptionPeriod = styled.div``;
export const CompetitionField = styled.div``;
export const Source = styled.div``;

export const Caution = styled.p`
  color: ${palette.fontRed100};
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.875rem;
  mark {
    color: inherit;
    background-color: transparent;
    font-weight: 700;
  }

  margin-bottom: 3rem;
`;
