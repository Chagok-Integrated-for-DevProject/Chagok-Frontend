import { useMutation } from "@tanstack/react-query";
import { createComment, deleteComment, updateComment } from "lib/apis/comment";

export const useCreateCommentMutation = () => {
  const { mutate, error, isError } = useMutation({
    mutationFn: createComment,
  });

  return { mutate, error, isError };
};
export const useUpdateCommentMutation = () => {
  const { mutate, error, isError } = useMutation({
    mutationFn: updateComment,
  });

  return { mutate, error, isError };
};
export const useDeleteCommentMutation = () => {
  const { mutate, error, isError } = useMutation({
    mutationFn: deleteComment,
  });

  return { mutate, error, isError };
};
