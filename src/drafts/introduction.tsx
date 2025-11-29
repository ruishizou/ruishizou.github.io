import { Typography, Alert, Divider } from "antd";
import OuterLink from "../modules/outlinks";

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
            Human-centered AI · Health Informatics
          </Paragraph>
          <Paragraph>
            Hello! I am Ruishi (Ray) Zou, a second-year master's
            student from UC San Diego. Previously, I earned my bachelor's degree
            in Computer Science from Tongji University.
          </Paragraph>
          <Paragraph>
            I <b>design and build intelligent systems</b> that empower humans to
            make sense of rich information, with the vision of applying them in
            critical societal domains such as health. I research by making:
            I use human-centered design methods to identify task-specific needs;
            I leverage theories from human cognition and technical advances from
            visualization and artificial intelligence to inform system design;
            and I rigorously evaluate the systems through mixed-method user
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
            including ACM CHI, IEEE TVCG, and ACL/NAACL. My work has also been
            acknowledged by the research community, receiving an Honorable
            Mention at CHI 2025{" "}
            <OuterLink
              link="https://programs.sigchi.org/chi/2025/program/content/188659"
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
            message={
              <Text>
                🔎{" "}
                <b>
                  I am actively seeking Ph.D. opportunities starting Fall 2026!
                </b>
                <br />
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
                />{" "}
                (2022-2023), during which I co-authored an IEEE TVCG paper and was granted
                the opportunity to intern at the
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
                , I run (and am still running, 2023-Present) an HCI interest group at Tongji
                University. Using my knowledge, I tutor and collaborate with
                undergraduate students on interest-driven research projects on
                HCI. Such efforts have resulted in award-winning publications at
                the ACM CHI conference.
              </li>
              <li>
                I have also been a remote visiting student at the{" "}
                <OuterLink
                  link="https://hailab.io/"
                  text="Human-Centered Artificial Intelligence Lab"
                />{" "}
                at Northeastern University (2023-Present), advised by
                <OuterLink
                  link="https://www.dakuowang.com/"
                  text="Prof. Dakuo Wang"
                />
                ,{" "}
                <OuterLink
                  link="https://www.bingshengyao.com/"
                  text="Dr. Bingsheng (Arthur) Yao"
                />
                , and
                <OuterLink
                  link="http://www.lacepadilla.com/"
                  text="Prof. Lace Padilla"
                />
                . I worked on projects spanning from HCI to NLP, with papers
                accepted or targeting top conferences such as ACL, NAACL, VIS,
                and CHI.
              </li>
              <li>
                I am currently a visiting member of the{" "}
                <OuterLink link="https://sea-lab.space/" text="SEA Lab" /> at
                Columbia University advised by{" "}
                <OuterLink
                  link="https://orsonxu.com/"
                  text="Prof. Xuhai (Orson) Xu"
                />
                , working on projects at the intersection of HCI, AI, and
                health informatics.
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
