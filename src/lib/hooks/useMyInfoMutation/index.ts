import { useMutation } from "@tanstack/react-query";
import {
  updateNickname,
  updateProfileImg,
  updateSkills,
} from "lib/apis/userInfo";

export const useUpdateNickNameMutation = (onSuccessFn?: () => void) => {
  const { mutate } = useMutation({
    mutationFn: ({
      nickname,
      jwtToken,
    }: {
      nickname: string;
      jwtToken: string;
    }) => updateNickname(nickname, jwtToken),
    onSuccess: () => {
      onSuccessFn && onSuccessFn();
    },
  });
  return { mutate };
};

export const useUpdateProfileImgMutation = (onSuccessFn?: () => void) => {
  const { mutate } = useMutation({
    mutationFn: ({
      imageFile,
      jwtToken,
    }: {
      imageFile: File;
      jwtToken: string;
    }) => updateProfileImg(imageFile, jwtToken),
    onSuccess: () => {
      onSuccessFn && onSuccessFn();
    },
  });
  return { mutate };
};

export const useUpdateSkillsMutation = (onSuccessFn?: () => void) => {
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
    },
  });
  return { mutate };
};
