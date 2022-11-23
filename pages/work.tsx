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
import Section from "@/components/section/section";
import MotionFadeInWhenInView from "@/components/motionFadeInWhenInView/motionFadeInWhenInView";
import Row from "@/components/row/row";
import Tab from "@/components/tab/tab";
import Title from "@/components/title/title";
import Column from "@/components/column/column";
import styles from "@/styles/pages/about.module.scss";
import LineBreak from "@/components/linebreak/linebreak";
import MotionLinkInline from "@/components/general/motionLinkInline";

interface PageProps {
  footerData: FooterData;
  pageMetaData: PageMetaData;
  topLevelPageNames: TopLevelPageNames;
}

const Work: NextPage<PageProps> = (pageProps) => {
  const {
    pageMetaData: { title: pageTitle, description: pageDescription },
  } = pageProps;

  return (
    <>
      <PageHead pageDescription={pageDescription} pageTitle={pageTitle} />
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
          <Title>Digital Resume</Title>
        </Column>
      </Section>
      <Section>
        <Row className={styles.contentRow}>
          <Column className={styles.titleColumn}>
            <MotionFadeInWhenInView>
              <Title titleType="inlineh3">Designaroni.com</Title>
            </MotionFadeInWhenInView>
          </Column>
          <Column className={styles.contentColumn}>
            <MotionFadeInWhenInView>
              <p>
                <b>
                  Designer & Developer • Apr. 22{`'`} - present{`'`}
                </b>
                <LineBreak />
                A personal travel, journal, portfolio site built with a Strapi
                backend headless CMS that serves a GraphQL api, using a
                Postgresql database & ReactJS/NextJS frontend.
                <LineBreak />
                Between the two projects the tech stack uses React, Typescript,
                NextJS, Postgresql, GraphQL, Sass/CSS modules & framer motion,
                along with modern front end build tools & automated deployments.
                <LineBreak />
                The DevOps pipeline implements automated deployments to test &
                production environments, the backend deploys to Digital Ocean
                and the frontend deploys to Vercel.
                <LineBreak />
                Serving as a living portfolio of my work, the Strapi backend
                codebase can be found{" "}
                <MotionLinkInline
                  link="https://github.com/designaroni/designaroni-strapi"
                  text="here"
                />{" "}
                , the NextJs frontend can be found{" "}
                <MotionLinkInline
                  link="https://github.com/designaroni/designaroni-next"
                  text="here"
                />{" "}
                . More about the site can be found on the{" "}
                <MotionLinkInline link="/about" text="About" /> page
              </p>
            </MotionFadeInWhenInView>
          </Column>
        </Row>
      </Section>
      <Section>
        <Row className={styles.contentRow}>
          <Column className={styles.titleColumn}>
            <MotionFadeInWhenInView>
              <Title titleType="inlineh3">iFIT</Title>
            </MotionFadeInWhenInView>
          </Column>
          <Column className={styles.contentColumn}>
            <MotionFadeInWhenInView>
              <p>
                <b>
                  Senior Front End Developer • Feb. 21{`'`} - Nov. 22{`'`}
                </b>
                <LineBreak />
                Working closely with designers, back-end developers, product
                owners and copywriters to build an industry leading wellness &
                fitness platform that millions of customers see and use. Along
                with managing React components in tooling like Storybook,
                multiple Front End repositories & React applications for use as
                WebViews in hybrid mobile applications we build projects with
                the latest Front End, Back End & deployment tooling like React
                Native/Expo, Typescript, NextJs, NX mono repos, TravisCi,
                Serverless computing with AWS Lambdas etc...
                <LineBreak />
                Day to day:
                <ul>
                  <li>
                    Writing reusable UI components using modern React, React
                    Native, build tools, CSS in JS and SCSS.
                  </li>
                  <li>
                    Building out custom animations in SVG{`'`}s, SASS &
                    Javascript frameworks & animation api{`'`}s
                  </li>
                  <li>
                    Constantly improving quality and performance of front-end
                    codebases.
                  </li>
                  <li>
                    Ensuring all code works as designed by helping build out an
                    extensive test suite.
                  </li>
                  <li>
                    Participating in peer code reviews, to produce solid code,
                    collaborate and learn new tech.
                  </li>
                  <li>Engaging in internal tech talks and other trainings.</li>
                </ul>
              </p>
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
              <p>
                <b>
                  Creative Agency Owner • Apr. 17{`'`} - Apr. 21{`'`}
                </b>
                <LineBreak />
                Agency owner of a distributed digital agency with a niche focus
                on email design & development services. Responsible for client
                relationships, business development, project management &
                delivery.
                <LineBreak />
                The studio was comprised of digital designers & interactive
                technologists working across the globe. We provided a
                competitive advantage implementing creative strategies over the
                long tail of production & brand development.
              </p>
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
              <p>
                <b>
                  Senior Front End Developer • Mar. 14{`'`} - Jan. 21{`'`}
                </b>
                <LineBreak />
                Starting as an Interactive Designer, I grew with SportsEngine to
                become a Senior Front End Developer. Day to day work transformed
                from a focus on enterprise level client sites, custom API
                integrations, theme & product enhancements to marketing landing
                pages, emails, custom JAMStack frontends, Wordpress & Drupal
                development.
                <LineBreak />
                Day to day:
                <ul>
                  <li>
                    Developing & maintaining Front-end themes & custom solutions
                    for over 29,000 clients.
                  </li>
                  <li>
                    Technology lead across multiple marketing web properties &
                    business initiatives.
                  </li>
                  <li>
                    Creation of Landing pages using Marketo & custom Front Ends.
                  </li>
                  <li>
                    Email Design & Development (Marketo, Salesforce Marketing
                    Cloud/Exact Target).
                  </li>
                  <li>
                    Conversion of design concepts primarily from InVison,
                    Zeplin, Sketch & Photoshop to standards based HTML, CSS & JS
                    markup.
                  </li>
                  <li>
                    Execution of web design projects from ideation to deployment
                  </li>
                  <li>
                    Creation of interactive experiences using JavaScript/jQuery
                    without the help of existing plugins.
                  </li>
                  <li>
                    Theme development & product enhancements for proprietary &
                    open source CMS systems (Drupal, Wordpress).
                  </li>
                  <li>
                    Coordinating & Managing front end freelance resources.
                  </li>
                  <li>Projecting scope, delivery & project timelines.</li>
                  <li>
                    Regularly using Git & Terminal to push & build application
                    features.
                  </li>
                  <li>
                    Trouble shooting escalated support tickets across CMS
                    systems, custom tools & integrated platforms.
                  </li>
                </ul>
              </p>
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
              <p>
                <b>
                  User Experience Designer II • Sep. 13{`'`} - Feb. 14{`'`}
                </b>
                Worked as a User Experience Designer on the Browse team, with a
                dedicated focus on user interface from site entry up to checkout
                process.
                <LineBreak />
                Responsible for working with project teams to design and deliver
                high quality client-centered, effective, consistent and usable
                interfaces.
              </p>
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
              <p>
                <b>
                  Owner, Freelance Designer • Jan. 11{`'`} - Feb. 14{`'`}
                </b>
                <LineBreak />
                Independent Designer & Developer executing projects for
                businesses in need of interactive websites, identity systems,
                strategy & design services.
                <LineBreak />
                Mediums included Interactive Web, Brand Strategy & Identity
                Systems.
              </p>
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
              <p>
                <b>
                  Implementation and Design Specialist • May 12{`'`} - Sep. 13
                  {`'`}
                </b>
                <LineBreak />
                In house expert on proprietary & open source content management
                systems, implementation, training & documentation. Day to day
                task included design & front-end development of client websites
                using a closed source content management system along with
                product enhancement & client support.
                <LineBreak />
                Day to day:
                <ul>
                  <li>
                    Design & Implement client websites using content management
                    systems embedded in ImageTrend products and as stand alone
                    tools.
                  </li>
                  <li>
                    Front-end developer, Strategy, IA, UI, UX - client projects,
                    custom data management & CMS projects.
                  </li>
                  <li>Internal product enhancement.</li>
                  <li>Product & Client Support.</li>
                </ul>
              </p>
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
