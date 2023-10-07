import { useJwtToken } from "lib/hooks";
import { useCreateCommentMutation } from "lib/hooks/useCommentMutation";
import {
  useInputChangeEvent,
  useInputFocusEvent,
} from "lib/hooks/useInputHooks";
import { useRouter } from "next/router";
import type { MouseEvent } from "react";
import { toast } from "react-toastify";

import * as S from "./index.styles";
// FIXME: 새로고침하면 포커스 및 블러 이벤트 오작동
const NewComment = () => {
  const { token } = useJwtToken();
  const resetField = () => {
    resetContent();
    resetMethod();
    handleBlurEvent();
  };
  const { mutate: createCommentMutate } = useCreateCommentMutation(resetField);

  const router = useRouter();

  const [content, setContent, resetContent] = useInputChangeEvent();
  const [method, setMethod, resetMethod] = useInputChangeEvent();
  const [inputFocus, handleFocusEvent, handleBlurEvent] = useInputFocusEvent();

  const onSubmitComment = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!token) {
      toast.warn("로그인이 필요합니다.");
      resetField();
      return;
    }
    const data = {
      content,
      contestId: Number(router.query.id),
      kakaoRef: method,
      jwtToken: token,
    };

    createCommentMutate(data);
  };
  return (
    <S.NewCommentContainer
      isFocused={inputFocus}
      onFocus={handleFocusEvent}
      onBlur={(e) => {
        const currentTarget = e.currentTarget;
        requestAnimationFrame(() => {
          if (!currentTarget.contains(document.activeElement))
            handleBlurEvent();
        });
      }}
    >
      <div>
        <S.Input
          type="text"
          value={content}
          placeholder={
            inputFocus
              ? "모집글을 작성해주세요."
              : "해커톤 / 공모전을 위한 모집글을 작성해보세요."
          }
          onChange={setContent}
        />
        <S.Hr className="newCommentHr" />
        <S.Input
          type="text"
          value={method}
          placeholder="모집 수단 (ex. 카카오 오픈채팅, 구글폼)"
          onChange={setMethod}
        />
      </div>
      <S.SubmitButton onClick={onSubmitComment}>등록</S.SubmitButton>
    </S.NewCommentContainer>
  );
};

export default NewComment;
