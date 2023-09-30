import Body from "components/postDetail/body";
import { Hr } from "components/postDetail/index.styles";
import { useProjectDetailQuery } from "lib/hooks/useProjectDetailQuery";
import type { FC } from "react";

import Header from "./header";

interface IProjectDetailProps {
  id: string;
}

const ProjectDetail: FC<IProjectDetailProps> = ({ id }) => {
  const { data } = useProjectDetailQuery(id);

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

export default ProjectDetail;
