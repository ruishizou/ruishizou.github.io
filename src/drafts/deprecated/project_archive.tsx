import { Typography } from "antd";
import PubEntry from "../../modules/group_items/pub_entry_spec";
import PubList from "../../modules/pub_list";
const { Title, Paragraph, Text, Link } = Typography;

const projArchiveList = [
  <PubEntry
    paperTitle="Stochastic Process Lab Project"
    authors={<>Independent Work</>}
    venueType="Course"
    venueFull="Stochastic Process (2023)"
    affiliation="Tongji University"
    codeLink="https://github.com/ruishizou/Stocastic-GaussianProcess"
    abstractContent={
      <>
        Gaussian Process for Stock Price Prediction, including 2 parts:
        <li> An interactive Visualization of GP;</li>
        <li> A gaussian stock price prediction model (GPyTorch).</li>
      </>
    }
  />,
  <PubEntry
    paperTitle="Machine Learning Labs"
    authors={<>Contributor</>}
    venueType="Course"
    venueFull="Machine Learning (2023)"
    affiliation="Tongji University"
    codeLink="https://github.com/ruishizou/ML-labs"
    abstractContent={
      <>
        Group project covering 3 topics:
        <li> Regression (California Housing) </li>
        <li> Classification (Cora)</li>
        <li>
          Clustering (3 datasets from image, text and application domains)
        </li>
      </>
    }
  />,
  <PubEntry
    paperTitle="iAir-Database"
    authors={<>Independent Work</>}
    venueType="Course"
    venueFull="Database System (2023, practical part)"
    affiliation="Tongji University"
    codeLink="https://github.com/ruishizou/iAir-database"
  />,
  <PubEntry
    paperTitle="GCN revisited: A reproduction of 'Semi-Supervised Classification with Graph Convolutional Networks'"
    authors={<>Independent Work</>}
    venueType="Course"
    venueFull="Introduction to Artificial Intelligence (2022)"
    affiliation="Tongji University"
    codeLink="https://github.com/ruishizou/GNNs-trail/tree/main/Semi-Supervised%20Classification%20with%20GCNs"
  />,
  <PubEntry
    paperTitle="A Rudimentary Visualization of Heap-sort Algorithm"
    authors={<>Independent Work</>}
    venueType="Course"
    venueFull="Data Structure (2022, practical part)"
    affiliation="Tongji University"
    exploreLink="https://ruishizou.github.io/heap-visualizzazione/"
  />,
];

const ProjectArchiveList = () => {
  return <PubList itemList={projArchiveList} />;
};

export default ProjectArchiveList;
