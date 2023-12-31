import LinkSVG from "components/common/link";
import { useGetMyInfoQuery, useJwtToken } from "lib/hooks";
import {
  useDeleteCommentMutation,
  useUpdateCommentMutation,
} from "lib/hooks/useCommentMutation";
import { useInputChangeEvent } from "lib/hooks/useInputHooks";
import type { TComment } from "lib/types/contest";
import Image from "next/image";
import type { FC } from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import { palette } from "styles/palette";

import UserProfileSVG from "/public/mocks/user_profile.svg";

import * as S from "./index.styles";

interface CommentItemProps {
  comment: TComment;
}

const CommentItem: FC<CommentItemProps> = ({ comment }) => {
  const { token } = useJwtToken();

  const { data: userInfo } = useGetMyInfoQuery(token);

  const { mutate: deleteCommentMutate } = useDeleteCommentMutation();
  const { mutate: updateCommentMutate } = useUpdateCommentMutation();
  const [isEdit, setIsEdit] = useState(false);
  const isMyComment = comment.userEmail === userInfo?.email;

  const [content, setContent, resetContent] = useInputChangeEvent(
    comment.content,
  );
  const [method, setMethod, resetMethod] = useInputChangeEvent(
    comment.kakaoRef,
  );

  const onEditComment = () => {
    if (token === "") {
      toast.warn("로그인이 필요합니다.");
      return;
    }

    updateCommentMutate({
      commentId: comment.commentId,
      content,
      kakaoRef: method,
      jwtToken: token,
    });
    setIsEdit(false);
  };
  const onDeleteComment = () => {
    if (token === "") {
      toast.warn("로그인이 필요합니다.");
      return;
    }

    deleteCommentMutate({ commentId: comment.commentId, jwtToken: token });
  };

  const onCancelWithoutSubmit = () => {
    resetContent();
    resetMethod();
    setIsEdit(false);
  };

  if (comment.deleted) {
    return <S.DeletedCommentItem>댓글이 삭제되었습니다.</S.DeletedCommentItem>;
  }

  return (
    <S.CommentItemContainer>
      <S.Comment>
        <S.Profile>
          <Image
            width={59}
            height={59}
            src={UserProfileSVG}
            alt="사용자 프로필 이미지"
          />
          <S.UserNameAndDate>
            <S.UserName>{comment.memberNickName}</S.UserName>
            <S.CreateDate>
              {new Date(comment.createdDate).toLocaleDateString()}
            </S.CreateDate>
          </S.UserNameAndDate>
        </S.Profile>
        <S.Divider />
        <S.ContentBox isEdit={isEdit}>
          <S.Content disabled={!isEdit} value={content} onChange={setContent} />
          <S.MethodBox>
            <LinkSVG color={palette.bdBlue100} />
            <span>모집 수단 :</span>
            {isEdit ? (
              <S.Method value={method} onChange={setMethod} />
            ) : (
              <S.MethodLink href={method} target="_blank">
                {method}
              </S.MethodLink>
            )}
          </S.MethodBox>
        </S.ContentBox>
        <S.Controller>
          {isMyComment && (
            <>
              <button onClick={isEdit ? onEditComment : () => setIsEdit(true)}>
                수정
              </button>
              <button
                onClick={isEdit ? onCancelWithoutSubmit : onDeleteComment}
              >
                {isEdit ? "취소" : "삭제"}
              </button>
            </>
          )}
        </S.Controller>
      </S.Comment>
    </S.CommentItemContainer>
  );
};

export default CommentItem;
