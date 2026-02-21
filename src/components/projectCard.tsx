import React from "react";
import { useState, useEffect } from "react";
import {
  FilePdfOutlined,
  SearchOutlined,
  GithubOutlined,
  VideoCameraOutlined,
  AudioOutlined,
  InfoCircleOutlined,
  PaperClipOutlined,
} from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Image,
  Space,
  Typography,
  Card,
} from "antd";
import colorProjection from "constants";
import "../constanats/constants";
import useScreenStore from "../store";
import { faPhotoFilm } from "@fortawesome/free-solid-svg-icons";
import LinkTag from "@/components/Links/linkTag";
import { ProjectCardSpec } from "@/types/spec";
const { Text } = Typography;


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

  // Fetch teaser images from public/assets/teaser
  const [teaserSrc, setTeaserSrc] = useState<string | undefined>(undefined);
  const [teaserInteractiveSrc, setTeaserInteractiveSrc] = useState<string | undefined>(undefined);

  useEffect(() => {
    let isMounted = true;

    const fetchImage = async (filename: string | undefined): Promise<string | undefined> => {
      if (!filename) return undefined;
      try {
        const response = await fetch(`/assets/teaser/${filename}`);
        if (!response.ok) return undefined;
        const blob = await response.blob();
        return URL.createObjectURL(blob);
      } catch {
        return undefined;
      }
    };

    const loadImages = async () => {
      const [teaser, teaserInteractive] = await Promise.all([
        fetchImage(props.teaser),
        fetchImage(props.teaserInteractive),
      ]);
      if (isMounted) {
        setTeaserSrc(teaser);
        setTeaserInteractiveSrc(teaserInteractive);
      }
    };

    loadImages();

    return () => {
      isMounted = false;
      if (teaserSrc) URL.revokeObjectURL(teaserSrc);
      if (teaserInteractiveSrc) URL.revokeObjectURL(teaserInteractiveSrc);
    };
  }, [props.teaser, props.teaserInteractive]);

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
        teaserSrc && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              overflow: "hidden",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              boxShadow:
                hovered && teaserInteractiveSrc
                  ? "0 0 10px rgba(0, 0, 0, 0.1)"
                  : undefined,
              height: 280
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <Image
              src={
                hovered && teaserInteractiveSrc
                  ? teaserInteractiveSrc
                  : teaserSrc
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
