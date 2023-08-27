import type { TPostPreview } from "lib/types/post";

export const pickLatestThree = (...dataes: TPostPreview[]) => {
  return dataes
    .sort((a, b) => {
      const aDates = new Date(a.createdTime);
      const bDates = new Date(b.createdTime);

      if (aDates > bDates) {
        return -1;
      } else {
        return +1;
      }
    })
    .slice(0, 3);
};
