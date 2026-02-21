import React from "react";
import { Typography, Flex } from "antd";
import "../constanats/constants";
const { Text } = Typography;

interface TimeEntrySpec {
  startTime?: string;
  endTime?: string;
  content: JSX.Element;
  annotation?: JSX.Element;
}

const TimeEntry: React.FC<TimeEntrySpec> = (props: TimeEntrySpec) => {
  return (
    <div>
      <Flex justify="space-between" align="flex-start" wrap>
        <div style={{ flexGrow: 1, paddingRight: "16px", width: "80%"}}>
          <Text>{props.content}</Text>
        </div>
        <div style={{ textAlign: "right", flexShrink: 0 }}>
          <Text>
            {props.startTime ? props.startTime : null} <br />
            {props.endTime ? <>- {props.endTime}</> : null}
          </Text>
        </div>
      </Flex>
      <div style={{ paddingLeft: "2.5%" }}>
        {props.annotation ? props.annotation : null}
      </div>
    </div>
  );
};

export default TimeEntry;
