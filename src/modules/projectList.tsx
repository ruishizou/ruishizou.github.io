import React, { useState } from "react";
import { Flex, Typography, Divider } from "antd";
import useScreenStore from "../store";
import { ProjectCardSpec } from "../types/spec";
import ProjectCard from "../components/projectCard";
const { Title } = Typography;
interface ProjectListProps {
  itemList: ProjectCardSpec[];
}

const ProjectList: React.FC<ProjectListProps> = ({ itemList }) => {
  const { shouldWrap } = useScreenStore();
  const style = shouldWrap ? { flex: "1 1 100%" } : { flex: "0 1 48%" };

  return (
    <div>
            <Title level={4} id="Projects">
        Projects
      </Title>
      <Divider style={{ margin: "0 0 1% 0" }} />
      <Flex gap="middle" wrap>
        {itemList.map((item, idx) => (
          <div key={idx} style={style}>
            <ProjectCard {...item} />
          </div>
        ))}
      </Flex>
    </div>
  );
};

export default ProjectList;
