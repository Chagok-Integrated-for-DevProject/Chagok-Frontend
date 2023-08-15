import Image from "next/image";

import ChatSVG from "/public/utils/chat.svg";

import * as S from "./index.styles";
import CommentItem from "./item";
import NewComment from "./register";

export interface IComment {
  commentId: number;
  content: string;
  createdDate: string;
  deleted: boolean;
  linkedComment: [null];
  memberNickName: string;
  parentId: 0;
}

const Comment = () => {
  const dummyDate = new Date().toLocaleDateString();
  const commentData: IComment[] = [
    {
      commentId: 1,
      content:
        "댓글 내용 테스트 댓글 내용 테스트 댓글 내용 테스트 댓글 내용 테스트 댓글 내용 테스트",
      createdDate: dummyDate,
      deleted: false,
      linkedComment: [null],
      memberNickName: "테스트1",
      parentId: 0,
    },
    {
      commentId: 2,
      content:
        "댓글 내용 테스트 댓글 내용 테스트 댓글 내용 테스트 댓글 내용 테스트 댓글 내용 테스트 댓글 내용 테스트 댓글 내용 테스트 댓글 내용 테스트 댓글 내용 테스트 댓글 내용 테스트",
      createdDate: dummyDate,
      deleted: false,
      linkedComment: [null],
      memberNickName: "테스트2",
      parentId: 0,
    },
  ];
  return (
    <section>
      <S.CommentCount>
        <Image width={24} height={24} src={ChatSVG} alt="말풍선" />
        <span>모집글 {2}개</span>
      </S.CommentCount>
      <NewComment />
      <S.CommentListBox>
        {commentData.map((comment) => (
          <CommentItem key={comment.commentId} comment={comment} />
        ))}
      </S.CommentListBox>
    </section>
  );
};

export default Comment;
