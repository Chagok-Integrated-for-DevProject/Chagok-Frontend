import { useMutation, useQueryClient } from "@tanstack/react-query";
import { isAxiosError } from "axios";
import { deleteScrap, postScrap } from "lib/apis/scrap";
import type { TContest } from "lib/types/contest";
import type { TPostPreview } from "lib/types/post";
import type { TCategory } from "lib/types/scrap";
import type { TUserInfoReturnType } from "lib/types/userInfo";
import type { Dispatch, SetStateAction } from "react";
import { toast } from "react-toastify";

type TScrapMutateParams = {
  category: TCategory;
  contentId: string;
  jwtToken: string;
  isScrapped: boolean;
};

const postPreviewSample: TPostPreview = {
  title: "",
  nickName: "",
  scrapCount: 0,
  viewCount: 0,
  siteType: "HOLA",
  id: "",
  skills: [],
  createdTime: "",
  preview: "",
  postType: "PROJECT",
};

const contestPreviewSample: TContest = {
  commentCount: 0,
  id: 0,
  endDate: "",
  host: "",
  imageUrl: "",
  scrapCount: 0,
  startDate: "",
  title: "",
};

export const useScrapMutation = (
  token: string,
  scrapCnt?: number,
  setScrapCount?: Dispatch<SetStateAction<number>>,
) => {
  const queryClient = useQueryClient();
  const isLoggedIn = token === "" ? { login: false } : { login: true };
  const userInfoKey = ["member", "info", isLoggedIn];

  const { mutate } = useMutation({
    mutationFn: async ({
      category,
      contentId,
      jwtToken,
      isScrapped,
    }: TScrapMutateParams) =>
      isScrapped
        ? deleteScrap(category, contentId, jwtToken)
        : postScrap(category, contentId, jwtToken),
    onMutate: async ({ category, contentId, isScrapped }) => {
      await queryClient.cancelQueries({ queryKey: userInfoKey });

      const prevUserInfo = queryClient.getQueryData(
        userInfoKey,
      ) as TUserInfoReturnType;
      queryClient.setQueryData(
        userInfoKey,
        (old: TUserInfoReturnType | null | undefined) => {
          if (old) {
            if (category === "project") {
              postPreviewSample.id = contentId;
              old.projectScraps = !isScrapped
                ? [...old.projectScraps, postPreviewSample]
                : old.projectScraps.filter((e) => e.id != contentId);
            } else if (category === "study") {
              postPreviewSample.id = contentId;
              old.studyScraps = !isScrapped
                ? [...old.studyScraps, postPreviewSample]
                : old.studyScraps.filter((e) => e.id != contentId);
            } else if (category === "contest") {
              contestPreviewSample.id = Number(contentId);
              old.contestScraps = !isScrapped
                ? [...old.contestScraps, contestPreviewSample]
                : old.contestScraps.filter((e) => e.id !== +contentId);
            }
            if (typeof scrapCnt === "number" && !!setScrapCount) {
              !isScrapped
                ? setScrapCount(scrapCnt + 1)
                : setScrapCount(scrapCnt - 1);
            }
          }
          return old;
        },
      );

      return { prevUserInfo, isScrapped };
    },
    onError: (err, _, context) => {
      if (isAxiosError(err)) {
        toast.error(err.message);
      }

      queryClient.setQueryData(userInfoKey, context?.prevUserInfo);

      if (typeof scrapCnt === "number" && !!setScrapCount) {
        !context?.isScrapped
          ? setScrapCount(scrapCnt - 1)
          : setScrapCount(scrapCnt + 1);
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: userInfoKey });
    },
  });

  return { mutate };
};
