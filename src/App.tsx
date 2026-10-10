import React, { useState, useEffect } from "react";
import { ConfigProvider, Layout, Space, Typography } from "antd";
import Routing from "./Routing";
import HeaderMenu from "./modules/header";
import ScreenWatcher from "./utils/screenWatcher";
import { GLOBAL_STYLE } from "./style/globalStyle";
const { Content, Header, Footer } = Layout;
const { Paragraph, Text, Title } = Typography;

const App: React.FC = () => {
  const LAST_UPDATED = __LAST_UPDATED__;

  return (
    <ConfigProvider theme={GLOBAL_STYLE}>
      <Space orientation="vertical" style={{ width: "100%" }}>
        <Layout className="page-layout">
          <ScreenWatcher />
          <Header>
            <HeaderMenu></HeaderMenu>
          </Header>
          <Routing></Routing>
          <Footer>
            <Text>Last updated: {LAST_UPDATED}. All Rights Reserved.</Text>
            <br />
            <Text>
              If you like{" "}
              <a
                href="https://github.com/ruishizou/minimal-academic-folio"
                target="_blank"
                rel="noreferrer noopener"
              >
                my page's design
              </a> (an older version)
              , feel free to try it yourself!
            </Text>
          </Footer>
        </Layout>
      </Space>
    </ConfigProvider>
  );
};

export default App;
