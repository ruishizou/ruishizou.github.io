import React from "react";
import { Typography, Tag } from "antd";
const { Text } = Typography;

interface LinkTagProps {
  icon: React.ReactNode;
  link: string;
  text: string;
  size?: "small" | "normal"
}

const LinkTag: React.FC<LinkTagProps> = (props: LinkTagProps) => {
  const fontSize = props.size === "small" ? "14px" : "16px";
  
  if (!props.link) return null;
  else {
    return (
      <div>
        <Tag.CheckableTag checked={false}>
          <a href={props.link} target="_blank" rel="noreferrer noopener">
            <Text style={{ fontSize: fontSize }}>
              {props.icon} {props.text}
            </Text>
          </a>
        </Tag.CheckableTag>
      </div>
    );
  }
};

export default LinkTag;
