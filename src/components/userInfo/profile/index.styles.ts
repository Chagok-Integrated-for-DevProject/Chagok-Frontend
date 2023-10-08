import styled from "@emotion/styled";
import { breakPoints } from "styles/breakPoints";
import { palette } from "styles/palette";

export const ProfileWrapper = styled.section`
  padding-bottom: 5rem;

  h2 {
    margin-bottom: 2.75rem;
  }
`;

export const ImageController = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 3rem;
  margin-bottom: 6rem;
`;

export const ImageBox = styled.div`
  width: 11.375rem;
  height: 11.375rem;

  border-radius: 100%;
  overflow: hidden;

  > img {
    width: 100%;
    height: 100%;
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

export const NameController = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;

  padding-bottom: 5rem;

  @media ${breakPoints.sm} {
    flex-direction: column;
  }
`;

export const Left = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 3rem;
`;

export const Input = styled.input`
  width: 22.75rem;
  font-size: 1.5rem;
  padding: 0.5rem;
  border-radius: 0.625rem;
  border: 1px solid #757575;
`;
export const Right = styled.table`
  tr td:first-of-type {
    border-right: 3rem solid transparent;
    border-bottom: 1rem solid transparent;
  }
`;

export const Text = styled.span`
  color: ${palette.fontGray300};
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 2.25rem;
`;

export const ProfileController = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 4rem;
`;
