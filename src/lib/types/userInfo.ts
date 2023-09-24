import type { TContest } from "./contest";
import type { TPostPreview } from "./post";

/* eslint-disable @typescript-eslint/no-explicit-any */
export type TNickNameCheck = {
  body: any;
  statusCode: string;
  statusCodeValue: number;
};

export type TUserInfoReturnType = {
  contestScraps: TContest[];
  email: string;
  nickName: string;
  profileImg: string;
  projectScraps: TPostPreview[];
  skills: string[];
  social: string;
  studyScraps: TPostPreview[];
};
