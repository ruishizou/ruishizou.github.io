

import ProjectList from "../modules/projectList";
import ProjectCard from "../modules/group_items/projectCard";
import PaperConstellationImg from "@/assets/teaser/paperconstellation.png";
import PaperConstellationInteractive from "@/assets/teaser/paperconstellation.gif";
import GistVisImg from "@/assets/teaser/Gistvis.png";
import GistVisInteractive from "@/assets/teaser/Gistvis_interactive.gif";

const projectList = [
  <ProjectCard
    projectTitle="Paper Constellations"
    codeLink="https://github.com/ruishizou/paper-constellations"
    exploreLink="https://ruishizou.github.io/paper-constellations/"
    paperLink="https://drive.google.com/file/d/1LvN46_KGxVWboRP7VXFZRH4Y2I6Lqpd1/view?usp=sharing"
    abstractContent={
      <>
        Paper Constellation is an AI-curated information space to support
        researchers in exploring ("stargazing") large conference proceedings at
        scale. The project currently holds all metadata for CHI'25.
      </>
    }
    teaser={PaperConstellationImg}
    teaserInteractive={PaperConstellationInteractive}
  />,
  //   <ProjectCard
  //   projectTitle="GistVis"
  //   codeLink="https://github.com/ruishizou/paper-constellations"
  //   exploreLink="https://ruishizou.github.io/paper-constellations/"
  //   abstractContent={
  //     <>
  //     </>
  //   }
  //   teaser={GistVisImg}
  //   teaserInteractive={GistVisInteractive}
  // />,
];

const NewProjectDisplayList = () => {
  return (
    <>
      <ProjectList itemList={projectList} />
    </>
  );
};

export default NewProjectDisplayList;
