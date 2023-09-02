import type { TComment } from "lib/types/contest";

import { AxiosClient } from "./axiosClient";

export const getComments = async (id: number): Promise<TComment[]> => {
  try {
    const response = await AxiosClient(`contests/${id}/comments`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

/** parentId는 대댓글이라면 0, 아니라면 -1 */
export const createComment = async (newComment: {
  content: string;
  contestId: number;
  kakaoRef: string;
  parentId?: -1 | 0;
}): Promise<number> => {
  newComment.parentId ??= -1;
  try {
    const response = await AxiosClient("contests/comments", {
      method: "post",
      data: newComment,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateComment = async (targetComment: {
  commentId: number;
  content: string;
  kakaoRef: string;
}): Promise<{
  body: object;
  statusCode: string;
  statusCodeValue: number;
}> => {
  try {
    const response = await AxiosClient("contests/comments", {
      method: "put",
      data: targetComment,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteComment = async (
  commentId: number,
): Promise<{
  body: object;
  statusCode: string;
  statusCodeValue: number;
}> => {
  try {
    const response = await AxiosClient(`contests/comments/${commentId}`, {
      method: "delete",
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
