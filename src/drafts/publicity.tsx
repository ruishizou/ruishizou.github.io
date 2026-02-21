import { Space, Typography } from "antd";
import WebPublicity from "../components/publicityEntry";
import TimedPubList from "../modules/timed_list";
import { ZhihuOutlined, LinkOutlined } from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBilibili } from "@fortawesome/free-brands-svg-icons";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import OuterLink from "../components/Links/linkText";
const { Title, Paragraph, Text, Link } = Typography;

const PrecenseOnWeb = () => {
  return (
    <>
      <Space orientation="vertical" style={{ width: "100%" }}>
        <WebPublicity
          year={2023}
          where="Tongji CEIE News"
          link="https://see.tongji.edu.cn/info/1143/11974.htm"
          content={<>我院本科生参加ACM UIST 2023国际学术会议</>}
        />
        <WebPublicity
          year={2023}
          where="Tongji CEIE News"
          link="https://see.tongji.edu.cn/info/1143/11931.htm"
          content={
            <>我院本科生在第二届中国高校计算机大赛智能交互创新赛中获佳绩</>
          }
        />
        <Text>
          In addition to research project coverage, I used to write decent prose
          during high school, which is included in this collection:
          <ul>
            <li>
              <WebPublicity
                year={2021}
                where="Tsinghua University Press"
                link="http://www.tup.tsinghua.edu.cn/booksCenter/book_08660001.html"
                content={<>《子衿雅墨》- Page 5</>}
              />
            </li>
          </ul>
        </Text>
      </Space>
    </>
  );
};

export default PrecenseOnWeb;
