import Body from "components/postDetail/body";
import Header from "components/postDetail/header";
import { Hr } from "components/postDetail/index.styles";
import { useProjectDetailQuery } from "lib/hooks/useProjectDetailQuery";
import type { FC } from "react";

interface IProjectDetailProps {
  id: string;
}

const ProjectDetail: FC<IProjectDetailProps> = ({ id }) => {
  const { data } = useProjectDetailQuery(id);

  return (
    <>
      {data && (
        <>
          <Header data={data} />
          <Hr />
          <Body skills={data.skills} content={data.content} />
        </>
      )}
    </>
  );
};

export default ProjectDetail;
