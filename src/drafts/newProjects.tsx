import { ProjectCardSpec } from "@/types/spec";

const projectData: ProjectCardSpec[] = [
  {
    projectTitle: "Paper Constellations",
    codeLink: "https://github.com/ruishizou/paper-constellations",
    exploreLink: "https://ruishizou.github.io/paper-constellations/",
    videoLink: "https://drive.google.com/file/d/1Ne3oqmhy0qxpSs6SjFCZg5dVkhB7Vjsi/view?usp=sharing",
    paperLink: "https://drive.google.com/file/d/1LvN46_KGxVWboRP7VXFZRH4Y2I6Lqpd1/view?usp=sharing",
    abstractContent: (
      <>
        Paper Constellation is an AI-curated information space to support
        researchers in exploring ("stargazing") large conference proceedings at
        scale. The project currently holds all metadata for CHI'25.
      </>
    ),
    teaser: "paperconstellation.png",
    teaserInteractive: "paperconstellation.gif",
  },
  // Add more projects as needed
];

export default projectData;