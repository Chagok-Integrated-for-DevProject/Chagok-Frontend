import Image from "next/image";

import UserProfileSVG from "/public/mocks/user_profile.svg";

import type { IComment } from "..";
import * as S from "./index.styles";

interface CommentItemProps {
  comment: IComment;
}

const CommentItem = ({ comment }: CommentItemProps) => {
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
            <S.CreateDate>{comment.createdDate}</S.CreateDate>
          </S.UserNameAndDate>
        </S.Profile>
        <S.Divider />
        <S.Content>{comment.content}</S.Content>
        <S.Controller>
          {/* 회원 본인만 보이게? 아니면 모두 보이게? */}
          <button>수정</button>
          <button>삭제</button>
        </S.Controller>
      </S.Comment>
    </S.CommentItemContainer>
  );
};

export default CommentItem;
