import React from "react";
import { Layout, Divider, Space, Typography, Carousel, Alert } from "antd";
import ProjectArchiveList from "../drafts/deprecated/project_archive";
import ProjectDisplayList from "../drafts/projects";
import PrecenseOnWeb from "../drafts/deprecated/web_presence";
import WebLinks from "../drafts/links";
import Moments from "../drafts/moments";
const { Paragraph, Text, Title } = Typography;
const { Content, Header, Footer } = Layout;

const Misc: React.FC = () => (
  <Content id="Misc">
    {/* <Title level={4} id="Projects">
      Selected Projects
    </Title>
    <Divider style={{ margin: "0 0 1% 0" }} />
    <ProjectDisplayList></ProjectDisplayList>

    <Title level={4}>Selected Archive of Course Projects</Title>
    <Divider style={{ margin: "0 0 1% 0" }} />
    <ProjectArchiveList></ProjectArchiveList> */}

    {/* <Title level={4}>Presence on the web</Title>
    <Divider style={{ margin: "0 0 1% 0" }} />
    <PrecenseOnWeb></PrecenseOnWeb> */}

    <Title level={4} id="Conference Moments">
      Conference Moments
    </Title>
    <Divider style={{ margin: "0 0 1% 0" }} />
    <Moments />


    <Title level={4}>External Useful Information</Title>
    <Divider style={{ margin: "0 0 1% 0" }} />
    <WebLinks></WebLinks>
  </Content>
);

const MiscInDom = (
  <div>
    <Misc />
  </div>
);

export default MiscInDom;
