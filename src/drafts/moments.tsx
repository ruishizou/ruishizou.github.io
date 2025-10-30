import { Alert, Carousel, Flex, Typography } from "antd";
import { Tweet } from "react-tweet";
import "../index.css";
const { Text } = Typography;

const MomentsList = ["1914759071015837915", "1718166820900016346"];

const Moments = () => {
  return (
    <Flex
      dir="horizontal"
      gap="large"
      style={{ overflowX: "scroll", overflowY: "hidden" }}
    >
      {MomentsList.map((moment) => (
        <div
          key={moment}
          data-theme="light"
        >
          <Tweet id={moment} />
        </div>
      ))}
    </Flex>
  );
};

export default Moments;
