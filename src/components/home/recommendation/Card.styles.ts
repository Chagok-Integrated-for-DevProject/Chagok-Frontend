import { css } from "@emotion/react";
import { palette } from "styles/globalStyles";

export const CardStyles = css`
  display: block;
  width: 100%;
  height: 100%;

  padding: 2.5rem 2.2rem;
  border-radius: 0.8rem;

  background-color: #fff;

  transition: 0.2s;

  .title {
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 1.875rem;

    padding: 2rem 0;

    word-break: keep-all;

    transition: 0.2s;
  }

  .classificationTag {
    padding: 0.5rem 1.7rem;
    border: 0;
    border-radius: 1rem;
    margin-right: 1rem;

    font-size: 0.75rem;
    font-weight: 700;
    line-height: 1.125rem;

    background-color: #ff6b00;
    color: ${palette.white};

    transition: 0.2s;
  }

  .detailBtn {
    border-radius: ${palette.black};
    border-radius: 3rem;

    font-weight: 400;
    font-size: 1.25rem;

    padding: 0.5rem 1rem;
  }

  &:hover {
    background-color: #ff6b00;

    .title {
      font-size: 1.315625rem;
      line-height: 1.940625rem;

      color: ${palette.white};
    }

    .classificationTag {
      font-size: 0.72375rem;
      line-height: 1.085625rem;
      font-weight: 700;

      background-color: ${palette.white};
      color: #ff6b00;
    }

    .detailBtn {
      border: 1px solid #ff6b00;
      background-color: ${palette.white};
      color: #ff6b00;
      font-weight: 700;
    }
  }
`;