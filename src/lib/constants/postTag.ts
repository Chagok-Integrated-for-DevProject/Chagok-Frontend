import { palette } from "styles/palette";

type TPOST_TAG = {
  tagName: string;
  color: string;
};

export const POST_TAGS: TPOST_TAG[] = [
  {
    tagName: "홀라",
    color: `${palette.hola}`,
  },
  {
    tagName: "인프런",
    color: `${palette.inflearn}`,
  },
  {
    tagName: "OKKY",
    color: `${palette.okky}`,
  },
  {
    tagName: "사이드 프로젝트",
    color: `${palette.bgMainOrange}`,
  },
  {
    tagName: "스터디",
    color: `${palette.bgMainOrange}`,
  },
];
