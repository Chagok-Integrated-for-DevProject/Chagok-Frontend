import { palette } from "styles/palette";

export type TPOST_TAG = {
  tagName: string;
  color: string;
};

export const POST_TAGS: TPOST_TAG[] = [
  {
    tagName: "HOLA",
    color: `${palette.hola}`,
  },
  {
    tagName: "INFLEARN",
    color: `${palette.inflearn}`,
  },
  {
    tagName: "OKKY",
    color: `${palette.okky}`,
  },
  {
    tagName: "PROJECT",
    color: `${palette.bgMainOrange}`,
  },
  {
    tagName: "STUDY",
    color: `${palette.bgMainOrange}`,
  },
];
