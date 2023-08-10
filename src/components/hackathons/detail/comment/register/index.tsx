import {
  useInputChangeEvent,
  useInputFocusEvent,
} from "lib/hooks/useInputHooks";

import * as S from "./index.styles";

const NewComment = () => {
  const [, setContent] = useInputChangeEvent();
  const [, setMethod] = useInputChangeEvent();
  const [inputFocus, handleFocusEvent, handleBlurEvent] = useInputFocusEvent();

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
      onSubmit={(e) => {
        e.preventDefault();
        alert("댓글이 등록되었습니다.");
        handleBlurEvent();
      }}
    >
      <div>
        <S.Input
          type="text"
          placeholder={
            inputFocus
              ? "모집글을 작성해주세요."
              : "해커톤 / 공모전을 위한 모집글을 작성해보세요."
          }
          onChange={setContent}
        />
        {inputFocus && (
          <>
            <S.Hr />
            <S.Input
              type="text"
              placeholder="모집수단 (카카오 오픈채팅, 구글폼)"
              onChange={setMethod}
            />
          </>
        )}
      </div>
      {inputFocus && <S.SubmitButton>등록</S.SubmitButton>}
    </S.NewCommentContainer>
  );
};

export default NewComment;
