import { useMutation, useQueryClient } from "@tanstack/react-query";
import { isAxiosError } from "axios";
import {
  deleteProfileImg,
  updateNickname,
  updateProfileImg,
  updateSkills,
} from "lib/apis/userInfo";
import type { TUserInfoReturnType } from "lib/types/userInfo";
import { toast } from "react-toastify";

const userInfoKey = ["member", "info", { login: true }];

export const useUpdateNickNameMutation = (onSuccessFn?: () => void) => {
  const queryClient = useQueryClient();

  type TMutateParams = {
    nickName: string;
    jwtToken: string;
  };

  const { mutate } = useMutation({
    mutationFn: ({ nickName, jwtToken }: TMutateParams) =>
      updateNickname(nickName, jwtToken),
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onMutate: async ({ nickName, jwtToken }: TMutateParams) => {
      await queryClient.cancelQueries({ queryKey: userInfoKey });
      const prevUserInfo = queryClient.getQueryData(userInfoKey);

      queryClient.setQueryData(
        userInfoKey,
        (prevUserInfo?: TUserInfoReturnType) => {
          if (prevUserInfo) {
            prevUserInfo.nickName = nickName;
          }
          return prevUserInfo;
        },
      );

      return { prevUserInfo };
    },
    onError: (err, _newUserInfo, context) => {
      queryClient.setQueryData(userInfoKey, context?.prevUserInfo);

      if (isAxiosError(err) && err.response?.data.code === "nickname_01") {
        toast.error("중복된 닉네임입니다.");
        return;
      }
      toast.error("서버와의 연결이 원활하지 않습니다.");
    },
    onSuccess: () => {
      onSuccessFn && onSuccessFn();
      toast.success("닉네임이 변경되었습니다.");
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ["member", "info", { login: true }],
      });
    },
  });
  return { mutate };
};

export const useUpdateProfileImgMutation = (onSuccessFn?: () => void) => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: ({
      imageFile,
      jwtToken,
    }: {
      imageFile: File;
      jwtToken: string;
    }) => updateProfileImg(imageFile, jwtToken),
    onError: () => {
      toast.error("서버와의 연결이 원활하지 않습니다.");
    },
    onSuccess: () => {
      onSuccessFn && onSuccessFn();
      toast.success("이미지가 변경되었습니다.");
      queryClient.invalidateQueries({ queryKey: userInfoKey });
    },
  });
  return { mutate };
};

export const useDeleteProfileImgMutation = (onSuccessFn?: () => void) => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: (jwtToken: string) => deleteProfileImg(jwtToken),
    onError: () => {
      toast.error("서버와의 연결이 원활하지 않습니다.");
    },
    onSuccess: () => {
      onSuccessFn && onSuccessFn();
      toast.success("프로필 이미지가 변경되었습니다.");
      queryClient.invalidateQueries({ queryKey: userInfoKey });
    },
  });

  return { mutate };
};

export const useUpdateSkillsMutation = (onSuccessFn?: () => void) => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: ({
      skills,
      jwtToken,
    }: {
      skills: string[];
      jwtToken: string;
    }) => updateSkills(skills, jwtToken),
    onSuccess: () => {
      onSuccessFn && onSuccessFn();
      toast.success("관심 스택이 변경되었습니다.");
    },
    onError: () => {
      toast.error("서버와의 연결이 원활하지 않습니다.");
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: userInfoKey });
    },
  });
  return { mutate };
};
