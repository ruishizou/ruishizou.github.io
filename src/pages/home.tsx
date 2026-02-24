import React from "react";
import { Layout, Divider, Space, Typography, Carousel } from "antd";


import NewsDisplayList from "../drafts/updates";
import PersonalIntrouction from "../drafts/introduction";
import NewProjectDisplayList from "../drafts/newProjects";


import { ProjectList, PublicationList } from "@/modules/index";
import publicationData from "../drafts/publications";
import projectData from "../drafts/newProjects";

const { Paragraph, Text, Title } = Typography;
const { Content, Header, Footer } = Layout;

const Homepage: React.FC = () => {
  return (
    <Content id="About">
      {/* <HeaderAnchor></HeaderAnchor> */}
      <br />
      <PersonalIntrouction />
      <Title level={4} id="Updates">
        Updates
      </Title>
      <Divider style={{ margin: "0 0 1% 0" }} />
      <NewsDisplayList></NewsDisplayList>

      <PublicationList publicationData={publicationData} isSelected={true} />
      <ProjectList itemList={projectData} />
      
    </Content>
  );
};

const HomepageInDom = (
  <div>
    <Homepage />
  </div>
);

export default HomepageInDom;
