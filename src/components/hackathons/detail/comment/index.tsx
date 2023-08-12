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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
        >
          <path
            d="M4 44V7C4 6.2 4.3 5.5 4.9 4.9C5.5 4.3 6.2 4 7 4H41C41.8 4 42.5 4.3 43.1 4.9C43.7 5.5 44 6.2 44 7V33C44 33.8 43.7 34.5 43.1 35.1C42.5 35.7 41.8 36 41 36H12L4 44ZM10.7 33H41V7H7V37L10.7 33Z"
            fill="black"
          />
        </svg>
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
