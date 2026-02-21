import { PubEntrySpec } from "../types/spec";

import { Typography, Space } from "antd";
const { Text } = Typography;

// --- PUBLICATION DATA (JSON-like Array of Objects) ---

const publicationData: PubEntrySpec[] = [
  {
    paperTitle:
      "Striking a Balance: Evaluating How Aggregations of Multiple Forecasts Impact Judgment Under Uncertainty",
    year: 2026,
    authors: (
      <>
        <b>Ruishi Zou</b>, Siyi Wu, Racquel Fygenson, Bingsheng Yao, Dakuo Wang,
        Lace Padilla
      </>
    ),
    inSelectedCollection: false,
    venueType: "Conference",
    venueShort: "PacificVis'26",
    venueFull:
      "[To appear] In 2026 IEEE 19th Pacific Visualization Conference (PacificVis)",
    preprintLink: "https://arxiv.org/abs/2411.02576",
    paperLink: "",
    materialLink: "https://osf.io/vc3kn/",
    teaser: "mfv.webp",
  },
  {
    paperTitle:
      "MIND: Empowering Mental Health Clinicians with Multimodal Data Insights through a Narrative Dashboard",
    year: 2026,
    authors: (
      <>
        <b>Ruishi Zou</b>*, Shiyu Xu*, Margaret Morris, Jihan Ryu, Timothy
        Becker, Nicholas Allen, Anne Marie Albano, Randy Auerbach, Dan Adler,
        Varun Mishra, Lace Padilla, Dakuo Wang, Ryan Sultan, Xuhai "Orson" Xu
      </>
    ),
    inSelectedCollection: true,
    venueType: "Conference",
    venueShort: "CHI'26",
    venueFull:
      "[Conditionally Accepted] In Proceedings of the 2026 CHI Conference on Human Factors in Computing Systems (CHI'26)",
    preprintLink: "https://arxiv.org/abs/2601.14641",
    exploreLink: "https://sea-lab.space/MIND/",
    codeLink: "https://github.com/sea-lab-space/MIND",
    paperLink: "",
    teaser: "mind.webp",
    teaserInteractive: "mind.gif",
  },
  {
    paperTitle:
      "Graphing Inline: Understanding Word-scale Graphics Use in Scientific Papers",
    year: 2026,
    authors: (
      <>
        Siyu Lu*, Yanhan Liu*, Shiyu Xu, <b>Ruishi Zou</b>†, Chen Ye
      </>
    ),
    inSelectedCollection: false,
    venueType: "Conference",
    venueShort: "CHI'26",
    venueFull:
      "[Conditionally Accepted] In Extended Abstracts of the 2026 CHI Conference on Human Factors in Computing Systems (CHI'26 Posters)",
    preprintLink: "",
    paperLink: "",
    teaser: "WSG_survey.webp",
  },
  {
    paperTitle:
      "GistVis: Automatic Generation of Word-scale Visualizations from Data-rich Documents",
    year: 2025,
    authors: (
      <>
        <b>Ruishi Zou</b>*, Yinqi Tang*, Jingzhu Chen, Siyu Lu, Yan Lu, Yingfan
        Yang, Chen Ye
      </>
    ),
    inSelectedCollection: true,
    venueType: "Conference",
    venueShort: "CHI'25",
    venueFull:
      "In Proceedings of the 2025 CHI Conference on Human Factors in Computing Systems (CHI'25)",
    preprintLink: "https://arxiv.org/abs/2502.03784",
    paperLink: "https://dl.acm.org/doi/10.1145/3706598.3713881",
    codeLink: "https://github.com/ruishizou/GistVis",
    exploreLink: "https://ruishizou.github.io/GistVis",
    presentationLink: "https://www.youtube.com/watch?v=OIjAvoWdVCo",
    awardName: "Best Paper Honorable Mention recognition (top 5%)",
    awardLink:
      "https://drive.google.com/file/d/1H8oKnJMCngU6uWe947Hhu_oe3P83i7n8/view?usp=sharing",
    slidesLink:
      "https://docs.google.com/presentation/d/1YeqHyuaW8jbh7IDz32FWhVsItT5GdTRp/edit?usp=sharing&ouid=112189970118768667986&rtpof=true&sd=true",
    materialLink: "https://drive.google.com/drive/u/1/folders/1VcPWke5GMDScmv0KLc-4NyuKNQwZ36eS",
    teaser: "gistvis.png",
    teaserInteractive: "gistvis.gif",
  },
  {
    paperTitle:
      "Designing Human-AI System for Legal Research: A Case Study of Precedent Search in Chinese Law",
    year: 2025,
    authors: (
      <>
        Jiarui Guan*, <b>Ruishi Zou</b>*, Jiajun Zhang, Kimpan Shin, Bingsu He,
        Zhuhe Zhang, Chen Ye
      </>
    ),
    inSelectedCollection: true,
    venueType: "Conference",
    venueShort: "CHI'25",
    venueFull:
      "In Extended Abstracts of the 2025 CHI Conference on Human Factors in Computing Systems (CHI'25 LBW)",
    paperLink: "https://dl.acm.org/doi/10.1145/3706599.3720167",
    preprintLink: "https://arxiv.org/abs/2504.08235",
    presentationLink: "https://www.youtube.com/watch?v=z1Ot7A_E8zY",
    exploreLink:
      "https://drive.google.com/file/d/14aVKKZpnq6T-BrwyWZ_N3Ktx5dKJ1n16/view?usp=sharing",
    slidesLink:
      "https://docs.google.com/presentation/d/1xrdtgo7sxUgF2hg_fpkLIDos233pqWKp/edit?usp=sharing&ouid=112189970118768667986&rtpof=true&sd=true",
    teaser: "legalai.png",
  },
  {
    paperTitle:
      "Towards a Design Guideline for RPA Evaluation: A Survey of Large Language Model-Based Role-Playing Agents",
    year: 2025,
    authors: (
      <>
        Chaoran Chen*, Bingsheng Yao*, <b>Ruishi Zou</b>, Wenyue Hua, Weimin
        Lyu, Toby Jia-Jun Li, Dakuo Wang{" "}
      </>
    ),
    inSelectedCollection: true,
    venueType: "Conference",
    venueShort: "ACL'25",
    venueFull:
      "Findings of the Association for Computational Linguistics: ACL 2025",
    preprintLink: "https://arxiv.org/abs/2502.13012",
    paperLink: "https://aclanthology.org/2025.findings-acl.938/",
    exploreLink: "https://agentsurvey.hailab.io/",
    materialLink: "https://github.com/CRChenND/LLM_roleplay_agent_eval_survey",
    teaser: "rpa_survey.png",
  },
  {
    paperTitle:
      "More Samples or More Prompt Inputs? Exploring Effective In-Context Sampling for LLM Few-Shot Prompt Engineering",
    year: 2024,
    authors: (
      <>
        Bingsheng Yao, Guiming Chen, <b>Ruishi Zou</b>, Yuxuan Lu, Jiachen Li,
        Shao Zhang, Sijia Liu, James Hendler, Dakuo Wang{" "}
      </>
    ),
    inSelectedCollection: false,
    venueType: "Conference",
    venueShort: "NAACL'24",
    venueFull:
      "Findings of the Association for Computational Linguistics: NAACL 2024",
    preprintLink: "https://arxiv.org/abs/2311.09782",
    paperLink: "https://aclanthology.org/2024.findings-naacl.115/",
    teaser: "ics.png",
  },
  {
    paperTitle:
      "Chart2Vec: A Universal Embedding of Context-Aware Visualizations",
    year: 2024,
    authors: (
      <>
        Qing Chen, Ying Chen, <b>Ruishi Zou</b>, Wei Shuai, Yi Guo, Jiazhe Wang,
        Nan Cao{" "}
      </>
    ),
    inSelectedCollection: true,
    venueType: "Journal",
    venueShort: "TVCG",
    venueFull:
      "IEEE Transactions on Visualization and Computer Graphics (2024)",
    paperLink: "https://doi.org/10.1109/TVCG.2024.3383089",
    preprintLink: "https://arxiv.org/abs/2306.08304",
    exploreLink: "http://chart2vec.idvxlab.com/",
    codeLink: "https://github.com/idvxlab/chart2vec",
    teaser: "chart2vec.png",
  },
  {
    paperTitle:
      "iTutor: A Generative Tutorial System for Teaching the Elders to Use Smartphone Applications",
    year: 2023,
    authors: (
      <>
        <b>Ruishi Zou</b>, Zi Ye, Chen Ye{" "}
      </>
    ),
    inSelectedCollection: false,
    venueType: "Conference",
    venueShort: "UIST'23",
    venueFull:
      "Adjunct Proceedings of the 36th Annual ACM Symposium on User Interface Software and Technology (UIST 2023 Posters)",
    paperLink: "https://doi.org/10.1145/3586182.3616663",
    exploreLink: "https://ruishizou.github.io/iTutor",
    materialLink: "https://github.com/ruishizou/iTutor",
    teaser: "itutor.png",
  },
];

export default publicationData;
