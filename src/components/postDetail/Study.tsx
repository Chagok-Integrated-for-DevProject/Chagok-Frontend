import Body from "components/postDetail/body";
import { Hr } from "components/postDetail/index.styles";
import { useStudyDetailQuery } from "lib/hooks/useStudyDetailQuery";
import type { FC } from "react";

import Header from "./header";

interface IStudyDetailProps {
  id: string;
}

const StudyDetail: FC<IStudyDetailProps> = ({ id }) => {
  const { data } = useStudyDetailQuery(id);

  return (
    <>
      {data && (
        <>
          <Header data={data} id={id} />
          <Hr />
          <Body skills={data.skills} content={data.content} />
        </>
      )}
    </>
  );
};

export default StudyDetail;
