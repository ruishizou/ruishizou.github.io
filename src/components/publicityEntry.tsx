import React from "react";
import { Row, Col, Typography } from "antd";
import OuterLink from "./Links/linkText";
import "../constanats/constants";
const { Text } = Typography;

interface WebPublicitySpec {
  year: number;
  where: string;
  link: string;
  content: JSX.Element;
}

const WebPublicity: React.FC<WebPublicitySpec> = (props) => {
  const {year, where, link, content} = props;

  return (
    <div>
      <Text>{year}{" "}|{" "}
      <OuterLink text={where} link={link}/>{" - "}
      {content}</Text>
    </div>
  )
}

export default WebPublicity;


