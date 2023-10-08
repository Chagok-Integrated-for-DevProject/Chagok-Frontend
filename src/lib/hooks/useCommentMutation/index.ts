import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createComment, deleteComment, updateComment } from "lib/apis/comment";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

export const useCreateCommentMutation = (
  onSuccess?: () => void,
  onError?: () => void,
) => {
  const queryClient = useQueryClient();
  const router = useRouter();

  const { mutate } = useMutation({
    mutationFn: createComment,
    onError: () => {
      onError && onError();
      toast.error("댓글 등록에 실패했습니다.");
    },
    onSuccess: () => {
      onSuccess && onSuccess();
      toast.success("댓글이 등록되었습니다.");
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ["contests", Number(router.query.id), "comments"],
      });
    },
  });

  return { mutate };
};
export const useUpdateCommentMutation = () => {
  type TUpdateCommentMutationParams = {
    commentId: number;
    content: string;
    kakaoRef: string;
    jwtToken: string;
  };

  const queryClient = useQueryClient();
  const router = useRouter();

  const { mutate, isError, error } = useMutation({
    mutationFn: ({
      commentId,
      content,
      kakaoRef,
      jwtToken,
    }: TUpdateCommentMutationParams) =>
      updateComment({ commentId, content, kakaoRef, jwtToken }),
    onError: () => {
      toast.error("서버와의 연결이 좋지 않습니다. 다시 시도해주세요.");
    },
    onSuccess: () => {
      toast.success("댓글이 수정되었습니다.");
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ["contests", Number(router.query.id), "comments"],
      });
    },
  });

  return { mutate, error, isError };
};
export const useDeleteCommentMutation = () => {
  type TDeleteCommentMutationParams = {
    commentId: number;
    jwtToken: string;
  };

  const queryClient = useQueryClient();
  const router = useRouter();

  const { mutate, error, isError } = useMutation({
    mutationFn: ({ commentId, jwtToken }: TDeleteCommentMutationParams) =>
      deleteComment({ commentId, jwtToken }),
    onError: () => {
      toast.error("서버와의 연결이 좋지 않습니다. 다시 시도해주세요.");
    },
    onSuccess: () => {
      toast.success("댓글이 삭제되었습니다.");
    },
    onSettled: () => {
      console.log(router.query.id);
      queryClient.invalidateQueries({
        queryKey: ["contests", Number(router.query.id), "comments"],
      });
    },
  });

  return { mutate, error, isError };
};
