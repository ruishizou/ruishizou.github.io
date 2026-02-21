import React, { useState, useEffect, CSSProperties } from "react";
import {
  MailOutlined,
  GithubOutlined,
  LinkedinOutlined,
  WeiboOutlined,
  TwitterOutlined,
  ArrowDownOutlined,
  ArrowUpOutlined,
  XOutlined
} from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap, faLocationDot} from "@fortawesome/free-solid-svg-icons";
import { faOrcid } from "@fortawesome/free-brands-svg-icons";
import { Space, Typography, Image, Divider, Layout, Button, Flex } from "antd";
import LinkIcon from "../components/Links/linkIcon";
import useScreenStore from "../store";

const { Text, Paragraph, Title } = Typography;

interface InfoSpec {
  portrait: string;
  name: string;
  affiliation?: string;
  personalStatement: JSX.Element;
  morePersonalStatement: JSX.Element;
  googleScholar?: string;
  github?: string;
  linkedin?: string;
  email?: string;
  twitter?: string;
  weibo?: string;
  orcid?: string;
  location?: string;
}

const PersonalInfo: React.FC<InfoSpec> = (props) => {
  const { shouldWrap } = useScreenStore();

  const picWidthSpec = "200px";

  const baseTextStyle: CSSProperties = {
    wordBreak: "break-word",
    overflowWrap: "break-word",
    hyphens: "auto",
  };
  const personalStatementStyle: CSSProperties = shouldWrap
    ? { ...baseTextStyle, textAlign: "left" }
    : { ...baseTextStyle, textAlign: "justify" };

  const [showState, setShowState] = useState("show more about me");
  const renderIcon = () => {
    if (showState === "show more about me") {
      return <ArrowDownOutlined />;
    } else {
      return <ArrowUpOutlined />;
    }
  };

  const showStateConfig = () => {
    if (showState === "show more about me") {
      setShowState("hide");
    } else if (showState === "hide") {
      setShowState("show more about me");
    }
  };

  return (
    <Flex
      style={{
        flexDirection: shouldWrap ? "column-reverse" : "row",
        width: "100%",
      }}
      gap="middle"
    >
      <Space
        orientation="vertical"
        style={{
          flex: "7 1 1%",
          width: "100%",
        }}
      >
        <div style={personalStatementStyle}>{props.personalStatement}</div>

        {showState === "show more about me" ? null : (
          <div style={personalStatementStyle}>
            {props.morePersonalStatement}
          </div>
        )}

        <Button
          type="text"
          onClick={showStateConfig}
          style={{ width: "100%", textAlign: "center" }}
        >
          {renderIcon()}
          {showState}
        </Button>
      </Space>

      <Space
        orientation="vertical"
        style={{
          flex: "3 1 1%",
          minWidth: 220,
          width: "100%",
        }}
      >
        {/* <p>Screen Width: {screenWidth}px</p> */}
        <div style={{ textAlign: "center" }}>
          <Image
            style={{
              borderRadius: "50%",
            }}
            src={props.portrait}
            width={picWidthSpec}
            preview={false}
          ></Image>
        </div>
        <div style={{ textAlign: "center" }}>
          <Text style={{ fontSize: "24px" }} strong={true}>
            {props.name}
          </Text>
          <br />
          {props.affiliation ? <Text>{props.affiliation}</Text> : null}
          <br />
          <Text>
            {props.location ? (
              <>
                <FontAwesomeIcon icon={faLocationDot} /> {props.location}
              </>
            ) : null}
          </Text>
        </div>
        <div style={{ fontSize: "20px", textAlign: "center" }}>
          <Divider type="vertical"></Divider>
          <LinkIcon
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
            link={props.googleScholar ? props.googleScholar : ""}
          />
          <LinkIcon
            icon={<FontAwesomeIcon icon={faOrcid} />}
            link={props.orcid ? props.orcid : ""}
          />
          <LinkIcon
            icon={<GithubOutlined />}
            link={props.github ? props.github : ""}
          />
          <LinkIcon
            icon={<LinkedinOutlined />}
            link={props.linkedin ? props.linkedin : ""}
          />
          <LinkIcon
            icon={<XOutlined />}
            link={props.twitter ? props.twitter : ""}
          />
          <LinkIcon
            icon={<WeiboOutlined />}
            link={props.weibo ? props.weibo : ""}
          />
          <LinkIcon
            icon={<MailOutlined />}
            link={props.email ? props.email : ""}
          />
        </div>

        {/* <div style={{ width: "60%", margin: "0 auto" }}>
          <Divider></Divider>
        </div> */}
      </Space>
    </Flex>
  );
};

export default PersonalInfo;
