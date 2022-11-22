import type { NextPage, GetStaticProps } from "next";
import {
  getTopLevelPageNames,
  getTopLevelPageMetaData,
  getFooterData,
  FooterData,
  PageMetaData,
  TopLevelPageNames,
} from "@/lib/api";
import PageHead from "@/components/general/pageHead";
// import styles from "@/styles/pages/work.module.scss";
import Section from "@/components/section/section";
import MotionFadeInWhenInView from "@/components/motionFadeInWhenInView/motionFadeInWhenInView";
import MotionFadeAndStaggerChildrenWhenInView from "@/components/motionFadeAndStaggerChildrenWhenInView/motionFadeAndStaggerChildrenWhenInView";
import FutureImage from "next/future/image";
import Row from "@/components/row/row";
import Tab from "@/components/tab/tab";
import Title from "@/components/title/title";
import Column from "@/components/column/column";
import Markdown from "markdown-to-jsx";
import { Fragment } from "react";
import styles from "@/styles/pages/about.module.scss";

interface PageProps {
  footerData: FooterData;
  pageMetaData: PageMetaData;
  topLevelPageNames: TopLevelPageNames;
}

const Work: NextPage<PageProps> = (pageProps) => {
  const {
    pageMetaData: { title: pageTitle, description: pageDescription },
  } = pageProps;
  const lifetimeGithubContributions = 3773;
  const stackOverflowPoints = 223;

  const iFITDescription = `**Senior Front End Developer • Feb. 21' - Nov. 22' **

  Working closely with designers, back-end developers, product
  owners and copywriters to build an industry leading wellness &
  fitness platform that millions of customers see and use. Along
  with managing React components in tooling like Storybook,
  multiple Front End repositories & React applications for use as
  WebViews in hybrid mobile applications we build projects with
  the latest Front End, Back End & deployment tooling like React
  Native/Expo, Typescript, NextJs, NX mono repos, TravisCi,
  Serverless computing with AWS Lambdas etc...
  
  Day to day:
  - Writing reusable UI components using modern React, React Native,
  build tools, CSS in JS and SCSS.
  - Building out custom animations in SVG's, SASS & Javascript frameworks &
  animation api's
  - Constantly improving quality and performance of front-end codebases.
  - Ensuring all code works as designed by helping build out an extensive test suite.
  - Participating in peer code reviews, to produce solid code, collaborate and learn new tech.
  - Engaging in internal tech talks and other trainings.`;
  const experientialEverythingDescription = `**Creative Agency Owner • Apr. 17' - Apr. 21' **
  
  Agency owner of a distributed digital agency with a niche focus on email design & development services. Responsible for client
relationships, business development, project management & delivery.
    
  The studio was comprised of digital designers & interactive technologists working across the globe. We provided a competitive advantage implementing creative strategies over the long tail of production & brand development.`;
  const sportsEngineDescription = `**Senior Front End Developer • Mar. 14' - Jan. 21'**
  
  Starting as an Interactive Designer, I grew with SportsEngine to become a Senior Front End Developer. Day to day work transformed from a focus on enterprise level client sites, custom API integrations, theme & product enhancements to marketing landing pages, emails, custom JAMStack frontends, Wordpress & Drupal development.

  Day to day:
  - Developing & maintaining Front-end themes & custom solutions for over 29,000 clients
  - Technology lead across multiple marketing web properties & business initiatives. 
  - Creation of Landing pages using Marketo & custom Front Ends
  - Email Design & Development (Marketo, Salesforce Marketing Cloud/Exact Target)
  - Conversion of design concepts primarily from InVison, Zeplin, Sketch & Photoshop to standards based HTML, CSS & JS markup.
  - Execution of web design projects from ideation to deployment
  - Creation of interactive experiences using JavaScript/jQuery without the help of existing plugins
  - Theme development & product enhancements for proprietary & open source CMS systems (Drupal, Wordpress)
  - Coordinating & Managing front end freelance resources
  - Projecting scope, delivery & project timelines
  - Regularly using Git & Terminal to push & build application features
  - Trouble shooting escalated support tickets across CMS systems, custom tools & integrated platforms`;
  const bestBuyDescription = `**User Experience Designer II • Sep. 13' - Feb. 14'**
  
  Worked as a User Experience Designer on the Browse team, with a dedicated focus on user interface from site entry up to
checkout process.

Responsible for working with project teams to design and deliver high quality client-centered, effective, consistent and usable interfaces.`;
  const freelanceDescription = `**Owner, Freelance Designer • Jan. 11' - Feb. 14'**
  
  Independent Designer & Developer executing projects for businesses in need of interactive websites, identity systems, strategy & design
  services.
  
  Mediums included Interactive Web, Brand Strategy & Identity Systems.`;
  const imageTrendDescription = `**Implementation and Design Specialist • May 12' - Sep. 13'**

  In house expert on proprietary & open source content management systems, implementation, training & documentation. Day to
  day task included design & front-end development of client websites using a closed source content management system along
  with product enhancement & client support.

  Day to day:
  - Design & Implement client websites using content management systems embedded in ImageTrend products and as stand alone tools
  - Front-end developer, Strategy, IA, UI, UX - client projects, custom data management & CMS projects
  - Internal product enhancement
  - Product & Client Support`;

  return (
    <>
      <PageHead pageDescription={pageDescription} pageTitle={pageTitle} />
      <Section className={styles.aboutHero} sectionType="fullWidthCenter">
        <MotionFadeInWhenInView className={styles.profileImage}>
          <FutureImage
            alt="Ian Roberts – Senior Front End Developer – Work & Resume"
            height={779}
            src="/images/ian-roberts-senior-front-end-engineer-work-resume.jpeg"
            width={1024}
          />
        </MotionFadeInWhenInView>
        <MotionFadeAndStaggerChildrenWhenInView className={`${styles.stats}`}>
          <div className={`${styles.stat} ${styles.yearsSpentCoding}`}>
            <span className={styles.number}>{stackOverflowPoints}</span>
            <span className={styles.description}>StackOverflow points</span>
          </div>
          <div className={`${styles.stat} ${styles.numberOfTripsThisYear}`}>
            <span className={styles.number}>
              {lifetimeGithubContributions}+
            </span>
            <span className={styles.description}>Github contributions</span>
          </div>
        </MotionFadeAndStaggerChildrenWhenInView>
      </Section>
      <Section sectionType="center">
        <Row className={styles.shortDescription} elementType="largeP">
          <MotionFadeInWhenInView>
            <Tab />
            Originally trained as a Graphic Designer, graduating from Minnesota
            State University in 2011, I{`'`}ve pursued a career in Front End
            Development since. I{`'`}ve spent time professionally both as a
            designer, developer and front-end team lead – managing & training
            junior developers. My career trajectory has taken me from
            freelancing to creating websites for businesses in the EMS space,
            working a UI/UX role for a multinational entertainment products
            retailer, building up an in-house creative team at a youth sports
            start up along with starting an Email Design & Development Agency –
            to present day – building out interactive experiences on a connected
            fitness platfrom enhancing lives of millions of users everyday.
            <br />
            <br />
            <Tab />I work remotely as a Senior Front End Developer for @ifit.
            Every day we build components & features upon a global design system
            implemented in React & React Native ecosystems.
          </MotionFadeInWhenInView>
        </Row>
      </Section>
      <Section sectionType="center">
        <Column columnType="center">
          <Title titleType="inlineh4">
            I build components, libraries & design systems.
          </Title>
          <Title titleType="inlineh4">
            I break down designs into development work.
          </Title>
          <Title titleType="inlineh4">
            I write performant code, optimized for web and native apps.
          </Title>
          <Title titleType="inlineh4">
            I work with React & React Native embedded within native apps.
          </Title>
        </Column>
      </Section>
      <Section sectionType="center">
        <Column columnType="center">
          <hr />
          <Title>Digital Resume</Title>
        </Column>
      </Section>
      <hr />
      <Section>
        <Row className={styles.contentRow}>
          <Column className={styles.titleColumn}>
            <MotionFadeInWhenInView>
              <Title titleType="inlineh3">iFIT</Title>
            </MotionFadeInWhenInView>
          </Column>
          <Column className={styles.contentColumn}>
            <MotionFadeInWhenInView>
              <Markdown>{iFITDescription}</Markdown>
            </MotionFadeInWhenInView>
          </Column>
        </Row>
      </Section>
      <Section>
        <Row className={styles.contentRow}>
          <Column className={styles.titleColumn}>
            <MotionFadeInWhenInView>
              <Title titleType="inlineh3">Experiential Everything</Title>
            </MotionFadeInWhenInView>
          </Column>
          <Column className={styles.contentColumn}>
            <MotionFadeInWhenInView>
              <Markdown>{experientialEverythingDescription}</Markdown>
            </MotionFadeInWhenInView>
          </Column>
        </Row>
      </Section>
      <Section>
        <Row className={styles.contentRow}>
          <Column className={styles.titleColumn}>
            <MotionFadeInWhenInView>
              <Title titleType="inlineh3">SportsEngine</Title>
            </MotionFadeInWhenInView>
          </Column>
          <Column className={styles.contentColumn}>
            <MotionFadeInWhenInView>
              <Markdown>{sportsEngineDescription}</Markdown>
            </MotionFadeInWhenInView>
          </Column>
        </Row>
      </Section>
      <Section>
        <Row className={styles.contentRow}>
          <Column className={styles.titleColumn}>
            <MotionFadeInWhenInView>
              <Title titleType="inlineh3">BestBuy</Title>
            </MotionFadeInWhenInView>
          </Column>
          <Column className={styles.contentColumn}>
            <MotionFadeInWhenInView>
              <Markdown>{bestBuyDescription}</Markdown>
            </MotionFadeInWhenInView>
          </Column>
        </Row>
      </Section>
      <Section>
        <Row className={styles.contentRow}>
          <Column className={styles.titleColumn}>
            <MotionFadeInWhenInView>
              <Title titleType="inlineh3">Freelance Design & Dev.</Title>
            </MotionFadeInWhenInView>
          </Column>
          <Column className={styles.contentColumn}>
            <MotionFadeInWhenInView>
              <Markdown>{freelanceDescription}</Markdown>
            </MotionFadeInWhenInView>
          </Column>
        </Row>
      </Section>
      <Section>
        <Row className={styles.contentRow}>
          <Column className={styles.titleColumn}>
            <MotionFadeInWhenInView>
              <Title titleType="inlineh3">ImageTrend</Title>
            </MotionFadeInWhenInView>
          </Column>
          <Column className={styles.contentColumn}>
            <MotionFadeInWhenInView>
              <Markdown>{imageTrendDescription}</Markdown>
            </MotionFadeInWhenInView>
          </Column>
        </Row>
      </Section>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const topLevelPageNames: TopLevelPageNames = await getTopLevelPageNames();
  const pageMetaData: PageMetaData = await getTopLevelPageMetaData("Work");
  const footerData: FooterData = await getFooterData();

  return {
    props: {
      footerData,
      pageMetaData,
      topLevelPageNames,
    },
  };
};

export default Work;
