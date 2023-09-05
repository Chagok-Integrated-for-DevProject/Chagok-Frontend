import { css } from "@emotion/react";
import { breakPoints } from "styles/breakPoints";
import { palette } from "styles/palette";

export const CardStyles = css`
  display: block;
  width: 100%;
  height: 100%;

  padding: 2.5rem 2.2rem;
  border-radius: 0.8rem;

  background-color: ${palette.white};

  transition: 0.2s;

  @media ${breakPoints.xs} {
    padding: 2.3rem 1.6rem;
  }

  .title {
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 1.875rem;

    padding: 2rem 0;

    word-break: keep-all;

    transition: 0.2s;

    @media ${breakPoints.xs} {
      font-size: 1.2rem;
    }
  }

  .classificationTag {
    padding: 0.5rem 1.7rem;
    border: 0;
    border-radius: 1rem;
    margin-right: 1rem;

    font-size: 0.75rem;
    font-weight: 700;
    line-height: 1.125rem;

    background-color: ${palette.bgMainOrange};
    color: ${palette.white};

    transition: 0.2s;

    @media ${breakPoints.xs} {
      font-size: 0.65rem;
      padding: 0.5rem 1rem;
      margin-right: 0.6rem;
    }
  }

  .detailBtn {
    border: 2px solid ${palette.black};
    border-radius: 3rem;

    font-weight: 400;
    font-size: 1.25rem;

    padding: 0.5rem 1rem;

    @media ${breakPoints.xs} {
      font-size: 1rem;
    }
  }

  &:hover {
    background-color: ${palette.bgMainOrange};

    .title {
      color: ${palette.white};
    }

    .classificationTag {
      font-weight: 700;

      background-color: ${palette.white};
      color: ${palette.fontMainOrange};

      @media ${breakPoints.xs} {
        padding: 0.5rem 1rem;
        margin-right: 0.6rem;
      }
    }

    .detailBtn {
      border: 1px solid ${palette.bdMainOrange};
      background-color: ${palette.white};
      color: ${palette.fontMainOrange};
      font-weight: 700;

      cursor: pointer;
    }
  }
`;
