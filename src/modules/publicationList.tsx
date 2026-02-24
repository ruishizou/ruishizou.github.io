import React, { useState } from "react";
import { Space, Typography, Tag, Divider } from "antd";
import { Link } from "react-router-dom";
import { LinkOutlined } from "@ant-design/icons";
import { PubEntrySpec } from "@/types/spec";
import PubEntry from "@/components/publicationEntry";
import { useMenuState } from "@/store/menuState";
const { Text, Title } = Typography;

interface PublicationListProps {
  publicationData: PubEntrySpec[];
  isSelected?: boolean;
}

const PublicationList: React.FC<PublicationListProps> = ({
  publicationData,
  isSelected = false,
}) => {
  // Filter data if isSelected
  const filteredData = isSelected
    ? publicationData.filter((pub) => pub.inSelectedCollection)
    : publicationData;

  // Extract tags from filteredData
  const tagsData: string[] = [];
  filteredData.forEach((pub) => {
    if (pub.venueType && !tagsData.includes(pub.venueType)) {
      tagsData.push(pub.venueType);
    }
  });

  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  // Derive displayedPub directly from filteredData and selectedTags
  const displayedPub = selectedTags.length === 0
    ? filteredData
    : filteredData.filter((pub) => selectedTags.includes(pub.venueType));

  const handleChange = (tag: string, checked: boolean) => {
    const nextSelectedTags = checked
      ? [...selectedTags, tag]
      : selectedTags.filter((t) => t !== tag);
    setSelectedTags(nextSelectedTags);
  };

  const isShowSelector = () => {
    if (!isSelected && tagsData.length > 1) {
      return (
        <Space size={[0, 8]} wrap>
          {tagsData.map((tag) => (
            <Tag.CheckableTag
              key={tag}
              checked={selectedTags.includes(tag)}
              onChange={(checked) => handleChange(tag, checked)}
            >
              <Text
                style={{
                  color: selectedTags.includes(tag) ? "#fff" : "#000",
                }}
              >
                {tag}
              </Text>
            </Tag.CheckableTag>
          ))}
        </Space>
      );
    }
    return null;
  };
  const { currentPage, setCurrentPage } = useMenuState();

  return (
    <>
      <Title level={4} id="Publications">
        {isSelected ? "Selected Publications " : "Publications"}
        {isSelected && (
          <Text>
            <Link
              to="/publication"
              onClick={() => setCurrentPage("Publications")}
            >
              <LinkOutlined /> [Full List]
            </Link>
          </Text>
        )}
      </Title>
      {isSelected && <Divider style={{ margin: "0 0 1% 0" }} />}

      <div style={{ display: "flex", gap: "10px" }}>
        {/* {isSelected && <Text type="secondary">Showing: {filteredData.length}/{publicationData.length},</Text>} */}
        {!isSelected && (
          <Text>
            * = equal contribution; † = served in a mentorship capacity
          </Text>
        )}
      </div>
      <div>
        <Space orientation="vertical" size={[0, 32]}>
          {isShowSelector()}
          {(() => {
            let lastYear: number | undefined;
            return displayedPub.reduce<React.ReactNode[]>((acc, pub, idx) => {
              if (pub.year && pub.year !== lastYear) {
                acc.push(
                  <div>
                    {!isSelected && (<Divider
                      titlePlacement="start"
                      style={{ fontWeight: 600, margin: "0 0 1% 0" }}
                    >
                      {pub.year}
                    </Divider>)}
                    <PubEntry key={idx} {...pub} />
                  </div>
                );
                lastYear = pub.year;
              } else {
                acc.push(<PubEntry key={idx} {...pub} />);
              }
              return acc;
            }, []);
          })()}
        </Space>
      </div>
    </>
  );
};

export default PublicationList;
