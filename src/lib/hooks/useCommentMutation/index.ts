import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createComment, deleteComment, updateComment } from "lib/apis/comment";
import { toast } from "react-toastify";

export const useCreateCommentMutation = (
  onSuccess?: () => void,
  onError?: () => void,
) => {
  const { mutate } = useMutation({
    mutationFn: createComment,
    onError: () => {
      onError && onError();
    },
    onSuccess: () => {
      onSuccess && onSuccess();
    },
  });

  return { mutate };
};
export const useUpdateCommentMutation = () => {
  const { mutate, isError, error } = useMutation({
    mutationFn: updateComment,
  });

  return { mutate, error, isError };
};
export const useDeleteCommentMutation = (contestId: number) => {
  const queryClient = useQueryClient();
  const { mutate, error, isError } = useMutation({
    mutationFn: deleteComment,
    onSuccess: () => {
      toast.success("삭제되었습니다.");
      queryClient.refetchQueries({
        queryKey: ["contests", contestId, "comments"],
      });
    },
  });

  return { mutate, error, isError };
};
