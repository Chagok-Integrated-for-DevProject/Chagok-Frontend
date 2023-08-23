import type { TPostPreview } from "lib/types/post";

export const pickHottestThree = (...dataes: TPostPreview[]) => {
  return dataes
    .sort((a, b) => {
      const aHotIdx = a.viewCount + a.scrapCount;
      const bHotIdx = b.viewCount + b.scrapCount;

      if (aHotIdx > bHotIdx) {
        return 1;
      } else {
        return -1;
      }
    })
    .slice(0, 3);
};
