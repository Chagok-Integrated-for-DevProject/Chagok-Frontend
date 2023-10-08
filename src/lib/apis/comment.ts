import type { TComment } from "lib/types/contest";

import { AxiosClient } from "./axiosClient";

export const getComments = async (id: number): Promise<TComment[]> => {
  try {
    const response = await AxiosClient.get(`contests/${id}/comments`);
    return response.data;
  } catch (error) {
    // throw error;
    return [];
  }
};

/** parentId는 대댓글이라면 0, 아니라면 -1 */
export const createComment = async (newComment: {
  content: string;
  contestId: number;
  kakaoRef: string;
  parentId?: -1 | 0;
  jwtToken: string;
}): Promise<number> => {
  newComment.parentId ??= -1;
  const data = {
    content: newComment.content,
    contestId: newComment.contestId,
    kakaoRef: newComment.kakaoRef,
    parentId: newComment.parentId,
  };

  try {
    const response = await AxiosClient.post("contests/comments", data, {
      headers: { Authorization: `Bearer ${newComment.jwtToken}` },
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
  jwtToken: string;
}): Promise<{
  body: object;
  statusCode: string;
  statusCodeValue: number;
}> => {
  const { commentId, content, kakaoRef, jwtToken } = targetComment;

  const data = { commentId, content, kakaoRef };
  try {
    const response = await AxiosClient.put("contests/comments", data, {
      headers: { Authorization: `Bearer ${jwtToken}` },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteComment = async ({
  commentId,
  jwtToken,
}: {
  commentId: number;
  jwtToken: string;
}): Promise<{
  body: object;
  statusCode: string;
  statusCodeValue: number;
}> => {
  try {
    const response = await AxiosClient.delete(
      `contests/comments/${commentId}`,
      {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
          "Content-Type": "application/json;charset=UTF-8",
        },
      },
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
