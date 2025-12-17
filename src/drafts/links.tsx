import TimeEntry from "../modules/group_items/time_entry";
import TimedPubList from "../modules/timed_list";
import { LinkOutlined } from "@ant-design/icons";

const webLink = [
  <TimeEntry
    content={
      <a
        href="https://shellywhen.github.io/gardening/advice/paper-polish"
        target="_blank"
        rel="noreferrer noopener"
      >
        <LinkOutlined /> Submission Checklist
      </a>
    }
  />,
  <TimeEntry
    content={
      <a
        href="https://hci.prof/blog/"
        target="_blank"
        rel="noreferrer noopener"
      >
        <LinkOutlined /> Prof. Chen's Blog
      </a>
    }
  />,
  <TimeEntry
    content={
      <a
        href="https://www.timeanddate.com/worldclock/converter.html"
        target="_blank"
        rel="noreferrer noopener"
      >
        <LinkOutlined /> Find Time for International Collaboration
      </a>
    }
  />,
  <TimeEntry
    content={
      <a
        href="https://web.archive.org/web/20221205110506/https://antv.vision/en/docs/specification/language/palette/"
        target="_blank"
        rel="noreferrer noopener"
      >
        <LinkOutlined /> Expressive Color Schema (Archived Ver.)
      </a>
    }
  />,
    <TimeEntry
    content={
      <a
        href="https://colorlab.antv.vision/"
        target="_blank"
        rel="noreferrer noopener"
      >
        <LinkOutlined /> AntV ColorLab (for color analysis in visualizations)
      </a>
    }
  />,
  <TimeEntry
    content={
      <a
        href="https://colorbrewer2.org/"
        target="_blank"
        rel="noreferrer noopener"
      >
        <LinkOutlined /> Visualization Color Palette
      </a>
    }
  />,
  <TimeEntry
    content={
      <a
        href="https://freetouse.com/music"
        target="_blank"
        rel="noreferrer noopener"
      >
        <LinkOutlined /> Background Music Inspirations
      </a>
    }
  />,
  <TimeEntry
    content={
      <a
        href="https://www.flaticon.com/"
        target="_blank"
        rel="noreferrer noopener"
      >
        <LinkOutlined /> Icon Inspirations
      </a>
    }
  />,
  <TimeEntry
    content={
      <a href="https://lawsofux.com/" target="_blank" rel="noreferrer noopener">
        <LinkOutlined /> Laws of UX
      </a>
    }
  />,
  <TimeEntry
    content={
      <a
        href="https://www.asimovinstitute.org/neural-network-zoo/"
        target="_blank"
        rel="noreferrer noopener"
      >
        <LinkOutlined /> Neural Network Zoo (2016)
      </a>
    }
  />,
  <TimeEntry
    content={
      <a
        href="https://zhuanlan.zhihu.com/p/90281637"
        target="_blank"
        rel="noreferrer noopener"
      >
        <LinkOutlined /> Git Commit Messages Guide (Chinese Ver.)
      </a>
    }
  />,
  <TimeEntry
    content={
      <a
        href="https://www.youtube.com/watch?v=Ala6PHlYjmw"
        target="_blank"
        rel="noreferrer noopener"
      >
        <LinkOutlined /> Understanding Git Operations
      </a>
    }
  />,
];

const WebLinks = () => {
  return <TimedPubList itemList={webLink} displayLength={10} />;
};

export default WebLinks;
