import type { AxiosError } from "axios";
import { useCreateCommentMutation } from "lib/hooks/useCommentMutation";
import {
  useInputChangeEvent,
  useInputFocusEvent,
} from "lib/hooks/useInputHooks";
import { useRouter } from "next/router";
import type { MouseEvent } from "react";

import * as S from "./index.styles";
// FIXME: 새로고침하면 포커스 및 블러 이벤트 오작동
const NewComment = () => {
  const {
    mutate: createCommentMutate,
    error: createCommentError,
    isError: isCreateCommentError,
  } = useCreateCommentMutation();

  const router = useRouter();

  const [content, setContent, resetContent] = useInputChangeEvent();
  const [method, setMethod, resetMethod] = useInputChangeEvent();
  const [inputFocus, handleFocusEvent, handleBlurEvent] = useInputFocusEvent();

  const onSubmitComment = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (isCreateCommentError) {
      if ((createCommentError as AxiosError).response?.status === 401)
        alert("로그인이 필요한 서비스입니다.");
    } else {
      const data = {
        content,
        contestId: Number(router.query.id),
        kakaoRef: method,
      };

      createCommentMutate(data);
    }

    resetContent();
    resetMethod();
    handleBlurEvent();
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
