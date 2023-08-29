import Loading from "components/common/loading";
import { PostDetailWrapper } from "components/postDetail/index.styles";
import { useRouter } from "next/router";
import { Suspense } from "react";

import ProjectDetail from "./Project";
import StudyDetail from "./Study";

// 스터디 / 프로젝트 상세 정보 페이지

const PostDetail = () => {
  const router = useRouter();
  const { purpose, id } = router.query;

  return (
    <PostDetailWrapper>
      <Suspense fallback={<Loading />}>
        {purpose === "study" && <StudyDetail id={id as string} />}
        {purpose === "project" && <ProjectDetail id={id as string} />}
      </Suspense>
    </PostDetailWrapper>
  );
};

export default PostDetail;
