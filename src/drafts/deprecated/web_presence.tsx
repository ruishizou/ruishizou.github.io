import { Typography } from "antd";
import TimeEntry from "../../components/timeEntry";
import TimedPubList from "../../modules/timed_list";
import { ZhihuOutlined, LinkOutlined } from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBilibili } from "@fortawesome/free-brands-svg-icons";
import { faBook } from "@fortawesome/free-solid-svg-icons";
const { Title, Paragraph, Text, Link } = Typography;

const webList = [
  <TimeEntry
    content={
      <a
        href="https://space.bilibili.com/1006502493"
        target="_blank"
        rel="noreferrer noopener"
      >
        <FontAwesomeIcon icon={faBilibili} /> Project Farfalle
      </a>
    }
  />,
  <TimeEntry
    content={
      <a
        href="https://www.zhihu.com/people/motion-50-73"
        target="_blank"
        rel="noreferrer noopener"
      >
        <ZhihuOutlined /> Blog (Zhihu)
      </a>
    }
  />
];

const PrecenseOnWeb = () => {
  return <TimedPubList itemList={webList} displayLength={10} />;
};

export default PrecenseOnWeb;
