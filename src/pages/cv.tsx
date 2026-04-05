import React, { useState, useEffect } from "react";
import { Layout, Typography, Divider } from "antd";

const { Content } = Layout;
const { Title, Text, Paragraph } = Typography;

const CV: React.FC = () => {
  const [fileData, setFileData] = useState<Blob>();

  useEffect(() => {
    fetch("./assets/Ruishi Zou - Public CV.pdf")
      .then((response) => response.blob())
      .then((data) => {
        setFileData(data);
      })
      .catch((error) => {
        console.error("Error fetching file:", error);
      });
  }, []);

  return (
    <Content id="CV">
      <Title level={4}></Title>
      <Paragraph style={{ fontSize: 12, color: "gray", opacity: 0.7 }}> * The CV maybe outdated (current is the April 2026 version). Please contact me to request the latest version.</Paragraph>
      {fileData && (
        <iframe
          src={URL.createObjectURL(fileData)}
          width="100%"
          height="800px"
          title="CV"
        />
      )}
    </Content>
  );
};

const CVInDom = (
  <div>
    <CV />
  </div>
);

export default CVInDom;
