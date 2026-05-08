import React from "react";
import { useState, useEffect, useRef } from "react";
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
  DropboxCircleFilled,
  DropboxOutlined,
} from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useMeasure, useWindowSize } from "react-use";
import { Image, Space, Typography, Tag, Button, Divider, Flex } from "antd";
import LinkTag from "@/components/Links/linkTag";
import { colorProjection } from "@/constanats/constants";
import { Link } from "react-router-dom";
import { colorBg, colorPrimary } from "../style/globalStyle";
import useScreenStore from "../store";
import { faPhotoFilm } from "@fortawesome/free-solid-svg-icons";
import { PubEntrySpec } from "../types/spec";
const { Text } = Typography;




const PubEntry: React.FC<PubEntrySpec> = (props: PubEntrySpec) => {
  const { width, shouldWrap } = useScreenStore();
  const [abstractContentVisible, setAbstractContentVisible] =
    useState<boolean>(false);

  const handleClick = () => {
    setAbstractContentVisible(!abstractContentVisible);
  };

  const extraContentController = () => {
    if (
      props.paperLink ||
      props.preprintLink ||
      props.exploreLink ||
      props.codeLink ||
      props.videoLink ||
      props.presentationLink ||
      props.materialLink ||
      props.abstractContent
    )
      return (
        <>
          <Space size={[0, 8]} wrap>
            <LinkTag
              icon={<FilePdfOutlined />}
              link={props.paperLink ? props.paperLink : ""}
              text="Paper"
            ></LinkTag>
            <LinkTag
              icon={<PaperClipOutlined />}
              link={props.preprintLink ? props.preprintLink : ""}
              text="Preprint"
            ></LinkTag>
            <LinkTag
              icon={<SearchOutlined />}
              link={props.exploreLink ? props.exploreLink : ""}
              text="Explore"
            ></LinkTag>
            <LinkTag
              icon={<GithubOutlined />}
              link={props.codeLink ? props.codeLink : ""}
              text="Code"
            ></LinkTag>
            <LinkTag
              icon={<VideoCameraOutlined />}
              link={props.videoLink ? props.videoLink : ""}
              text="Video"
            ></LinkTag>
            <LinkTag
              icon={<AudioOutlined />}
              link={props.presentationLink ? props.presentationLink : ""}
              text="Presentation"
            ></LinkTag>
            <LinkTag
              icon={<FontAwesomeIcon icon={faPhotoFilm} size="sm" />}
              link={props.slidesLink ? props.slidesLink : ""}
              text="Slides"
            ></LinkTag>
            <LinkTag
              icon={<DropboxOutlined />}
              link={props.materialLink ? props.materialLink : ""}
              text="Material"
            ></LinkTag>
            {props.abstractContent ? (
              <Button shape="circle" size="small" onClick={handleClick}>
                {abstractContentVisible ? (
                  <ArrowUpOutlined />
                ) : (
                  <ArrowDownOutlined />
                )}
              </Button>
            ) : null}
          </Space>
          {abstractContentVisible ? <div>{props.abstractContent}</div> : null}
        </>
      );
    else return null;
  };

  const [hovered, setHovered] = useState(false);
  const hoverStyle = {
    backgroundColor: hovered ? `${colorPrimary}0A` : colorBg,
    transition: "background-color 0.2s ease",
  };

  const [flexboxRef, { height, width: flexBoxWidth }] = useMeasure<HTMLElement>();
  const [imageHeight, setImageHeight] = useState<number | undefined>(undefined);

  // Update image height responsively
  useEffect(() => {
    setImageHeight(height);
  }, [shouldWrap, height, flexBoxWidth]);

  // Fetch teaser images from public/assets/teaser
  const [teaserSrc, setTeaserSrc] = useState<string | undefined>(undefined);
  const [teaserInteractiveSrc, setTeaserInteractiveSrc] = useState<string | undefined>(undefined);
  const teaserUrlRef = useRef<string | undefined>(undefined);
  const teaserInteractiveUrlRef = useRef<string | undefined>(undefined);

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
        // Store URLs in refs for cleanup
        teaserUrlRef.current = teaser;
        teaserInteractiveUrlRef.current = teaserInteractive;
        setTeaserSrc(teaser);
        setTeaserInteractiveSrc(teaserInteractive);
      }
    };

    loadImages();

    return () => {
      isMounted = false;
      // Use refs for cleanup to avoid dependency on state
      if (teaserUrlRef.current) URL.revokeObjectURL(teaserUrlRef.current);
      if (teaserInteractiveUrlRef.current) URL.revokeObjectURL(teaserInteractiveUrlRef.current);
    };
  }, [props.teaser, props.teaserInteractive]);

  return (
    <Flex
      style={{
        ...hoverStyle,
        height: "100%",
      }}
      gap="middle"
      wrap={shouldWrap}
      onMouseDown={() => !shouldWrap ? setHovered(true): setHovered(false)}
      onMouseEnter={() => !shouldWrap ? setHovered(true): setHovered(false)}
      onMouseLeave={() => setHovered(false)}
    >
      {teaserSrc && (
        <div
          style={{
            width: shouldWrap ? "60%" : "200px",
            minWidth: shouldWrap ? "60%" : "200px",
            maxWidth: shouldWrap ? "60%" : "200px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            boxShadow:
              hovered && teaserInteractiveSrc
                ? "0 0 10px rgba(0, 0, 0, 0.1)"
                : undefined,
          }}
        >
          <Image
            src={
              hovered && teaserInteractiveSrc
                ? teaserInteractiveSrc
                : teaserSrc
            }
            style={{
              height: shouldWrap ? undefined: imageHeight && imageHeight * 0.96,
              objectFit: "contain",
            }}
            preview={false}
          />
        </div>
      )}
      <Flex vertical ref={flexboxRef}>
        <Text strong={true} style={{ padding: "0 0 4px 0" }}>
          {props.paperTitle}
        </Text>
        {props.affiliation ? (
          <>
            <Text italic={true}>{props.affiliation}</Text>
            <Divider orientation="vertical" />
          </>
        ) : null}
        <Text style={{ padding: "0 0 4px 0" }}>{props.authors}</Text>
        <div style={{ padding: "0 0 4px 0" }}>
          <Tag color={colorProjection[props.venueType]}>
            <i>
              <b>{props.venueShort ? props.venueShort : props.venueType}</b>
            </i>
          </Tag>
          <Text italic={true}>{" "}{props.venueFull}</Text>

          {props.awardName ? (
            <div>
              <Text style={{ color: "#B31B1B" }}>
                <TrophyOutlined />{" "}
                {props.awardLink ? (
                  <Link
                    to={props.awardLink}
                    style={{ color: "#B31B1B" }}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {props.awardName}
                  </Link>
                ) : (
                  props.awardName
                )}
              </Text>
            </div>
          ) : null}
        </div>

        {extraContentController()}
      </Flex>
    </Flex>
  );
};

export default PubEntry;
