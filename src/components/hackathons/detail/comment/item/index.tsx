import type { AxiosError } from "axios";
import LinkSVG from "components/common/link";
import {
  useDeleteCommentMutation,
  useUpdateCommentMutation,
} from "lib/hooks/useCommentMutation";
import { useInputChangeEvent } from "lib/hooks/useInputHooks";
import type { TComment } from "lib/types/contest";
import Image from "next/image";
import type { FC } from "react";
import { useState } from "react";
import { palette } from "styles/palette";

import UserProfileSVG from "/public/mocks/user_profile.svg";

import * as S from "./index.styles";

interface CommentItemProps {
  comment: TComment;
}

const CommentItem: FC<CommentItemProps> = ({ comment }) => {
  const {
    mutate: deleteCommentMutate,
    error: deleteCommentError,
    isError: isDeleteError,
  } = useDeleteCommentMutation();
  const {
    mutate: updateCommentMutate,
    error: updateCommentError,
    isError: isUpdateError,
  } = useUpdateCommentMutation();
  const [isEdit, setIsEdit] = useState(false);

  const [content, setContent, resetContent] = useInputChangeEvent();
  const [method, setMethod, resetMethod] = useInputChangeEvent();

  const onEditComment = () => {
    if (isUpdateError) {
      if ((updateCommentError as AxiosError).response?.status === 401) {
        alert("로그인이 필요한 서비스입니다.");
        onCancelWithoutSubmit();
      }
      return;
    }

    updateCommentMutate({
      commentId: comment.commentId,
      content,
      kakaoRef: method,
    });
  };
  const onDeleteComment = () => {
    if (isDeleteError) {
      if ((deleteCommentError as AxiosError).response?.status === 400) {
        alert("로그인이 필요한 서비스입니다.");
      }
      return;
    }
    deleteCommentMutate(comment.commentId);
  };

  const onCancelWithoutSubmit = () => {
    resetContent();
    resetMethod();
    setIsEdit(false);
  };
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
          <S.Content
            disabled={!isEdit}
            value={content || comment.content}
            onChange={setContent}
          />
          <S.MethodBox>
            <LinkSVG color={palette.bdBlue100} />
            <span>모집 수단 :</span>
            {isEdit ? (
              <S.Method
                value={method || comment.kakaoRef}
                onChange={setMethod}
              />
            ) : (
              <S.MethodLink href={comment.kakaoRef} target="_blank">
                {comment.kakaoRef}
              </S.MethodLink>
            )}
          </S.MethodBox>
        </S.ContentBox>
        <S.Controller>
          {isEdit ? (
            <>
              <button onClick={onEditComment}>수정</button>
              <button onClick={onCancelWithoutSubmit}>취소</button>
            </>
          ) : (
            <>
              <button onClick={() => setIsEdit((prev) => !prev)}>수정</button>
              <button onClick={onDeleteComment}>삭제</button>
            </>
          )}
        </S.Controller>
      </S.Comment>
    </S.CommentItemContainer>
  );
};

export default CommentItem;
