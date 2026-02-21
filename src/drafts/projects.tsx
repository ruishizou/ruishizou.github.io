import { Typography } from "antd";
import { PublicationEntry } from "@/components/index";
import PubList from "../modules/publicationList";
const { Title, Paragraph, Text, Link } = Typography;

const projList = [
  <PublicationEntry
    paperTitle="Predicting Book Categories Based on Book Metadata and Web Network Relationships"
    authors={<>Project Leader</>}
    venueType="Course"
    venueFull="CCF BDCI 2023 & Data Mining Course Project (2023.10 - 2023.12)"
    affiliation="Tongji University"
    materialLink="https://www.datafountain.cn/competitions/982"
    codeLink="https://github.com/ruishizou/DF-book-class-prediction"
  />,
  <PublicationEntry
    paperTitle="Music Patterns and Music Models"
    authors={<>Contributor, Advised by Prof. Roger B. Dannenberg</>}
    venueType="Research"
    venueFull="Internship Project (2023.4 - 2023.10)"
    affiliation="Carnegie Mellon University (Remote)"
  />,
  <PublicationEntry
    paperTitle="iTutor: A Generative Tutorial System for Teaching the Elders to Use
          Smartphone Applications"
    authors={<>Team Lead</>}
    venueType="Competition"
    venueFull="China Collegiate Computing Contest - HCI Innovation Competition 2023"
    exploreLink="https://ruishizou.github.io/iTutor"
    codeLink="https://github.com/ruishizou/iTutor"
    awardName="Third Prize (top 3%)"
    affiliation="Tongji University"
  />,
  <PublicationEntry
    paperTitle="UI2Vec: A Multimodal Embedding Method for Robust UI Classification"
    authors={<>Independent Work</>}
    venueType="Course"
    venueFull="Multimedia Course Project (2023.3 - 2023.6)"
    paperLink="https://drive.google.com/file/d/1CYStKrj8HM1veDg_hFkM0_1UsXBbYoXS/view?usp=drive_link"
    codeLink="https://github.com/ruishizou/UI2Vec"
    affiliation="Tongji University"
  />,
  <PublicationEntry
    paperTitle="Forest Orchestra – Interactive Conducting Game for Music Education"
    authors={<>Contributor</>}
    venueType="Competition"
    venueFull="China Collegiate Computing Contest - HCI Innovation Competition 2022 (2022.9 - 2022.12)"
    awardName="Award in Creativity (top 4%)"
    affiliation="Tongji University"
  />,
  <PublicationEntry
    paperTitle="Data-driven Approach on Identifying Systemic Financial Risk"
    authors={<>Contributor</>}
    venueType="Research"
    venueFull="Student Innovation Training Program (2022.5 - 2023.3)"
    affiliation="Tongji University"
  />,
];



export default ProjectDisplayList;
