import { useMutation } from "@tanstack/react-query";
import { getNickNameCheck } from "lib/apis/userInfo";

export const useCheckNickNameMutation = (
  onSuccessFn: () => void,
  onErrorFn: (error: unknown) => void,
) => {
  const { mutate } = useMutation({
    mutationFn: (nickname: string) => getNickNameCheck(nickname),
    onSuccess: onSuccessFn,
    onError: onErrorFn,
  });

  return { mutate };
};
