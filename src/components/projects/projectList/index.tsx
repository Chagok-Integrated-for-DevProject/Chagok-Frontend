import ProjectCard from "components/common/card/projects";

import { GridItem, ProjectListGrid } from "./index.styles";

// import Pagination from "components/common/pagination";

const ProjectList = () => {
  const Cards = new Array(9).fill(null).map((e) => {
    e = <ProjectCard />;
    return e;
  });

  return (
    <>
      <ProjectListGrid>
        {Cards.map((e, i) => (
          <GridItem key={i}>{e}</GridItem>
        ))}
      </ProjectListGrid>
    </>
  );
};

export default ProjectList;
