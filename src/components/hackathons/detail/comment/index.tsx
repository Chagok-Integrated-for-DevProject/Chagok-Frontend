import { Section } from "components/hackathons/index.styles";
import { useCommentsQuery } from "lib/hooks";
import Image from "next/image";
import { useRouter } from "next/router";

import ChatSVG from "/public/utils/chat.svg";

import * as S from "./index.styles";
import CommentItem from "./item";
import NewComment from "./register";

const Comment = () => {
  const router = useRouter();
  const contestId = Number(router.query.id);
  const { data } = useCommentsQuery(contestId);
  if (!data) return <></>;

  return (
    <Section>
      <S.CommentCount>
        <Image width={24} height={24} src={ChatSVG} alt="말풍선" />
        <span>모집글 {data.length}개</span>
      </S.CommentCount>
      <NewComment />
      {data.length === 0 ? (
        <NoCommentNotification />
      ) : (
        <S.CommentListBox>
          {data.map((comment) => (
            <CommentItem key={comment.commentId} comment={comment} />
          ))}
        </S.CommentListBox>
      )}
    </Section>
  );
};

export default Comment;

const NoCommentNotification = () => {
  return <S.NoComment>첫 댓글을 달아보세요!</S.NoComment>;
};
