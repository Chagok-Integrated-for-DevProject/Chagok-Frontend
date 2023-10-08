import { useMutation, useQueryClient } from "@tanstack/react-query";
import { isAxiosError } from "axios";
import { deleteScrap, postScrap } from "lib/apis/scrap";
import type { TContest } from "lib/types/contest";
import type { TPostPreview } from "lib/types/post";
import type { TCategory } from "lib/types/scrap";
import type { TUserInfoReturnType } from "lib/types/userInfo";
import { useLayoutEffect, useState } from "react";
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

export const useScrapMutation = (token: string, scrapCnt?: number) => {
  const queryClient = useQueryClient();
  const isLoggedIn = token === "" ? { login: false } : { login: true };
  const userInfoKey = ["member", "info", isLoggedIn];
  const [localScrapCnt, setLocalScrapCnt] = useState(scrapCnt || 0);

  useLayoutEffect(() => {
    if (scrapCnt) {
      setLocalScrapCnt(scrapCnt);
    }
  }, [scrapCnt]);

  const { mutate } = useMutation({
    mutationFn: async ({
      category,
      contentId,
      isScrapped,
    }: TScrapMutateParams) =>
      isScrapped
        ? deleteScrap(category, contentId)
        : postScrap(category, contentId),
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
            if (typeof scrapCnt === "number" && !!setLocalScrapCnt) {
              !isScrapped
                ? setLocalScrapCnt(localScrapCnt + 1)
                : setLocalScrapCnt(localScrapCnt - 1);
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

      if (typeof scrapCnt === "number" && !!setLocalScrapCnt) {
        !context?.isScrapped
          ? setLocalScrapCnt(localScrapCnt - 1)
          : setLocalScrapCnt(localScrapCnt + 1);
      }
    },
    onSuccess: (_, vars) => {
      !vars.isScrapped
        ? toast.success("북마크에 추가되었습니다.")
        : toast.success("북마크가 취소되었습니다.");
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: userInfoKey });
    },
  });

  return { mutate, localScrapCnt };
};
