import * as S from "./index.styles";
import CommentItem from "./item";
import NewComment from "./register";

export interface Comment {
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
  const commentData: Comment[] = [
    {
      commentId: 1,
      content:
        "댓글 내용 테스트 댓글 내용 테스트 댓글 내용 테스트 댓글 내용 테스트 댓글 내용 테스트",
      createdDate: dummyDate,
      deleted: false,
      linkedComment: [null],
      memberNickName: "테스트",
      parentId: 0,
    },
  ];
  return (
    <section>
      <S.CommentCount>모집글 {2}개</S.CommentCount>
      <NewComment />
      <ul>
        {commentData.map((comment) => (
          <CommentItem key={comment.commentId} comment={comment} />
        ))}
      </ul>
    </section>
  );
};

export default Comment;
