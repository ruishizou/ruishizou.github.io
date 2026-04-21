import { Typography, Alert, Divider } from "antd";
import OuterLink from "../components/Links/linkText";

import PersonalInfo from "../modules/info";
import Selfie from "@/assets/selfie4.png";
const { Text, Paragraph, Title } = Typography;

const PersonalIntrouction = () => {
  return (
    <PersonalInfo
      portrait={Selfie}
      name="Ruishi Zou"
      affiliation="University of California, San Diego"
      location="La Jolla, CA, USA"
      googleScholar="https://scholar.google.com/citations?user=fHRnWkUAAAAJ"
      github="https://github.com/ruishizou"
      linkedin="https://www.linkedin.com/in/ruzou"
      email="mailto:ruishi.ray.zou@gmail.com"
      // orcid="https://orcid.org/0009-0001-3798-6833"
      twitter="https://twitter.com/ruishi_zou"
      personalStatement={
        <>
          <Paragraph>
            <u>Interests</u>: Human-computer Interaction · Visualization ·
            Human-centered AI · Health/Legal Informatics
          </Paragraph>
          <Paragraph>
            Hello! I am Ruishi (Ray) Zou, a second-year master's
            student from UC San Diego. I am also an incoming PhD student at Harvard University, where I will be advised by             <OuterLink
              link="https://glassmanlab.seas.harvard.edu/"
              text="Prof. Elena Glassman"
            />. Previously, I earned my bachelor's degree
            in Computer Science from Tongji University.
          </Paragraph>
          <Paragraph>
            I <b>design and build intelligent systems</b> that empower humans to
            make sense of rich information, with the vision of applying them in
            critical societal domains (e.g., health, legal). I research by making:
            I use human-centered design methods to identify task-specific needs;
            I leverage theories from human cognition and technical advances from
            visualization and artificial intelligence to inform system design;
            and I evaluate the systems through mixed-method user
            studies.
            {/* I am currently pursuing this vision by 
            working closely with{" "}
            <OuterLink
              link="https://orsonxu.com/"
              text="Prof. Xuhai (Orson) Xu"
            />{" "}
            at the 
            <OuterLink link="https://sea-lab.space/" text="SEA Lab" />{" "}
            from Columbia University. */}
          </Paragraph>
          <Paragraph>
            I am the author of several papers at top-tier academic venues,
            including ACM CHI, IEEE TVCG, and ACL. My work has also been
            acknowledged by the research community, receiving Honorable
            Mention Awards at CHI 2025{" "}
            <OuterLink
              link="https://programs.sigchi.org/chi/2025/program/content/188659"
              text="🏅"
            />, and CHI 2026 
            <OuterLink
              link="https://programs.sigchi.org/chi/2026/program/content/222396"
              text="🏅"
            />
            .
          </Paragraph>
          {/* <Paragraph>
            My research lies at the intersection of human-computer interaction
            (HCI), visualization and artificial intelligence (AI). I view myself
            as a system-HCI researcher: I am interested in exploring{" "}
            <b>
              how to build intelligent interfaces/tools to support cognitive
              tasks
            </b>
            . In my past works, I have prototyped, engineered, and evaluated
            systems for reading/writing, sensemaking, and decision-making.
            Through those works, I have gathered a broad spectrum of skills and
            research methods -- from training AI models to building interactive
            systems, from quantitative to qualitative research.
          </Paragraph> */}
          <Paragraph></Paragraph>
          <Alert
            style={{
              width: "100%",
              padding: "auto",
              margin: "0 auto",
              // textAlign: "center",
              // fontWeight: "bold",
            }}
            type="warning"
            title={
              <Text>
                {/* 🧳{" "}
                <b>
                  I plan to attend CHI 2026 in person--looking forward to CHI-nect! <OuterLink link="https://programs.sigchi.org/chi/2026/search/content?searchKey=ruishi%20zou" text="Check out my papers in the CHI 2026 program!" />
                </b> */}
                👋 Always happy to connect and chat!
              </Text>
            }
          />
        </>
      }
      morePersonalStatement={
        <>
          <Paragraph>
            I have broad experience in HCI and applied AI topics from research
            and industry. I strive to build long-term, collaborative
            relationships with my mentors, learning from their expertise while
            contributing my own capability to shared goals:
            <ul>
              <li>
                {" "}
                I worked closely with{" "}
                <OuterLink
                  link="https://tjdi.tongji.edu.cn/TeacherDetail.do?id=5056&lang=en"
                  text="Prof. Qing Chen"
                />{" "}
                at the
                <OuterLink
                  link="https://idvxlab.com/"
                  text="Intelligent Big Data Visualization Lab (iDVx Lab)"
                />{" "}/<OuterLink
                  link="https://qlab.org.cn/"
                  text="Q-Lab"
                />{" "}
                (2022-2023), during which I co-authored an IEEE TVCG paper and was offered to intern at the
                <OuterLink
                  link="https://ava.antv.antgroup.com/en/"
                  text="AVA team"
                />{" "}
                from Ant Group.{" "}
              </li>
              <li>
                {" "}
                Supported by{" "}
                <OuterLink
                  link="https://see.tongji.edu.cn/info/1398/11358.htm"
                  text="Prof. Chen Ye"
                />
                , I have successfully ran for 3 years (2023 - 2026, pausing at the moment) an HCI interest group at Tongji
                University. Using my knowledge, I tutor and collaborate with
                undergraduate students on interest-driven research projects on
                HCI. Such efforts have resulted in a award-winning publication at
                the ACM CHI conference, and three others at top-tier venues.
              </li>
              <li>
                I have maintained a long-term collaboration with researchers from Northeastern University, working closely with  
                <OuterLink
                  link="https://www.dakuowang.com/"
                  text="Prof. Dakuo Wang"
                />
                , and{" "}
                <OuterLink
                  link="https://www.bingshengyao.com/"
                  text="Dr. Bingsheng (Arthur) Yao"
                />{" "}from the{" "}
                <OuterLink
                  link="https://hailab.io/"
                  text="Human-Centered Artificial Intelligence Lab"
                />
                , and
                <OuterLink
                  link="http://www.lacepadilla.com/"
                  text="Prof. Lace Padilla"
                />{" "}from the{" "}
                <OuterLink
                  link="https://vis.khoury.northeastern.edu/"
                  text="Khoury Vis Lab"
                />
                . In the collaboration, I worked on projects spanning from HCI & VIS to NLP, with papers
                accepted or targeting top conferences such as ACL, NAACL, VIS,
                and CHI.
              </li>
              <li>
                I have also been a visiting member of the{" "}
                <OuterLink link="https://sea-lab.space/" text="SEA Lab" /> at
                Columbia University advised by{" "}
                <OuterLink
                  link="https://orsonxu.com/"
                  text="Prof. Xuhai (Orson) Xu"
                />
                , working on projects at the intersection of HCI, AI, and
                health informatics, with an accepted paper at CHI 2026, which received a Best Paper Honorable Mention Award.{" "}
              </li>
              <li>
                ... and hopefully many more collaborations to come in the future!
              </li>
            </ul>
            <Paragraph>
              Fun facts: 1) before deep diving into new knowledge, I love to
              approach it with first-order intuitions, hence my passion for
              narrating insights with visualizations; 2) I usually prefer my
              interface to be direct manipulation, even in the age of chatbots;
              3) besides research, I am a car/aviation enthusiast: I watch
              motorsport races and sim race F1/WRC machines.{" "}
            </Paragraph>
          </Paragraph>
        </>
      }
    ></PersonalInfo>
  );
};

export default PersonalIntrouction;
