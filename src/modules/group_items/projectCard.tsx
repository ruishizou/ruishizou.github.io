import React from "react";
import { useState } from "react";
import {
  FilePdfOutlined,
  SearchOutlined,
  GithubOutlined,
  VideoCameraOutlined,
  AudioOutlined,
  TrophyOutlined,
  InfoCircleOutlined,
  ArrowDownOutlined,
  ArrowUpOutlined,
  PaperClipOutlined,
} from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useMeasure } from "react-use";
import {
  Image,
  Space,
  Typography,
  Tag,
  Button,
  Divider,
  Flex,
  Card,
} from "antd";
import colorProjection from "constants";
import "../constanats/constants";
import { Link } from "react-router-dom";
import { colorBg, colorPrimary } from "../../style/globalStyle";
import useScreenStore from "../../store";
import { faPhotoFilm } from "@fortawesome/free-solid-svg-icons";
import LinkTag from "./link_tag";
const { Text } = Typography;

interface ProjectCardSpec {
  projectTitle: string;
  awardLink?: string;
  paperLink?: string;
  preprintLink?: string;
  exploreLink?: string;
  codeLink?: string;
  videoLink?: string;
  presentationLink?: string;
  materialLink?: string;
  slidesLink?: string;
  abstractContent?: JSX.Element;
  teaser?: string;
  teaserInteractive?: string;
}

const ProjectCard: React.FC<ProjectCardSpec> = (props: ProjectCardSpec) => {
  const { shouldWrap } = useScreenStore();

  const extraContentController = () => {
    if (
      props.paperLink ||
      props.preprintLink ||
      props.exploreLink ||
      props.codeLink ||
      props.videoLink ||
      props.presentationLink ||
      props.materialLink
    )
      return (
        <>
          <Space size={[0, 8]} wrap>
            <LinkTag
              icon={<FilePdfOutlined />}
              link={props.paperLink ? props.paperLink : ""}
              text="Paper"
              size="small"
            ></LinkTag>
            <LinkTag
              icon={<PaperClipOutlined />}
              link={props.preprintLink ? props.preprintLink : ""}
              text="Preprint"
              size="small"
            ></LinkTag>
            <LinkTag
              icon={<SearchOutlined />}
              link={props.exploreLink ? props.exploreLink : ""}
              text="Demo"
              size="small"
            ></LinkTag>
            <LinkTag
              icon={<GithubOutlined />}
              link={props.codeLink ? props.codeLink : ""}
              text="Code"
              size="small"
            ></LinkTag>
            <LinkTag
              icon={<VideoCameraOutlined />}
              link={props.videoLink ? props.videoLink : ""}
              text="Video"
              size="small"
            ></LinkTag>
            <LinkTag
              icon={<AudioOutlined />}
              link={props.presentationLink ? props.presentationLink : ""}
              text="Presentation"
              size="small"
            ></LinkTag>
            <LinkTag
              icon={<FontAwesomeIcon icon={faPhotoFilm} size="sm" />}
              link={props.slidesLink ? props.slidesLink : ""}
              text="Slides"
              size="small"
            ></LinkTag>
            <LinkTag
              icon={<InfoCircleOutlined />}
              link={props.materialLink ? props.materialLink : ""}
              text="Material"
              size="small"
            ></LinkTag>
          </Space>
        </>
      );
    else return null;
  };

  const [hovered, setHovered] = useState(false);

  return (
    <Card
      hoverable
      style={{
        width: "100%",
        height: "100%",
      }}
      size="small"
      title={
        <Text strong style={{ fontSize: "18px" }}>
          {props.projectTitle}
        </Text>
      }
      cover={
        props.teaser && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              overflow: "hidden",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              boxShadow:
                hovered && props.teaserInteractive
                  ? "0 0 10px rgba(0, 0, 0, 0.1)"
                  : undefined,
              height: 280
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <Image
              src={
                hovered && props.teaserInteractive
                  ? props.teaserInteractive
                  : props.teaser
              }
              style={{
                maxWidth: "95%",
                maxHeight: "95%",
                width: "auto",
                height: "auto",
                objectFit: "contain",
              }}
              preview={false}
            />
          </div>
        )
      }
    >
      <div>
        {props.abstractContent ? (
          <Text
            style={{
              fontSize: "14px",
              wordBreak: "break-word",
              overflowWrap: "break-word",
              hyphens: "auto",
            }}
          >
            {props.abstractContent}
          </Text>
        ) : null}
      </div>
      {extraContentController()}
    </Card>
  );
};

export default ProjectCard;
