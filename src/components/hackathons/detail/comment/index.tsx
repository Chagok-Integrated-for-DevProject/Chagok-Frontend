import type { TComment } from "lib/types/contest";
import Image from "next/image";
import type { FC } from "react";

import ChatSVG from "/public/utils/chat.svg";

import * as S from "./index.styles";
import CommentItem from "./item";
import NewComment from "./register";

interface ICommentProps {
  data: TComment[];
}

const Comment: FC<ICommentProps> = ({ data }) => {
  return (
    <section>
      <S.CommentCount>
        <Image width={24} height={24} src={ChatSVG} alt="말풍선" />
        <span>모집글 {data.length}개</span>
      </S.CommentCount>
      <NewComment />
      <S.CommentListBox>
        {data.map((comment) => (
          <CommentItem key={comment.commentId} comment={comment} />
        ))}
      </S.CommentListBox>
    </section>
  );
};

export default Comment;
