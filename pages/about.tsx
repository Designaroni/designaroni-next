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
import styles from "@/styles/pages/about.module.scss";
import Title from "@/components/title/title";
import Section from "@/components/section/section";
import FutureImage from "next/future/image";
import MotionLinkInline from "@/components/general/motionLinkInline";
import Tab from "@/components/tab/tab";
import Row from "@/components/row/row";
import MotionFadeInWhenInView from "@/components/motionFadeInWhenInView/motionFadeInWhenInView";
import MotionFadeAndStaggerChildrenWhenInView from "@/components/motionFadeAndStaggerChildrenWhenInView/motionFadeAndStaggerChildrenWhenInView";
import Column from "@/components/column/column";
import Social from "@/components/social";
import PageContentFooter from "@/components/pageContentFooter/pageContentFooter";
// import MotionSocial from "@/components/social/motionSocial";

interface PageProps {
  footerData: FooterData;
  pageMetaData: PageMetaData;
  topLevelPageNames: TopLevelPageNames;
}

const About: NextPage<PageProps> = (pageProps) => {
  const {
    pageMetaData: { title: pageTitle, description: pageDescription },
  } = pageProps;

  const currentYear = new Date().getFullYear();
  const careerStartYear = 2011;
  const yearsSpentCoding = currentYear - careerStartYear;
  // const yearsSpentCodingArray = Array(yearsSpentCoding)
  //   .fill(1)
  //   .map((value: number, index) => value + index);
  const currentAge = currentYear - 1988;
  const numberOfActiveBuilds = 2;
  const numberOfTripsThisYear = 15;
  const numberOfMilesTraveledThisYear = 21214;

  return (
    <>
      <PageHead pageDescription={pageDescription} pageTitle={pageTitle} />
      <Section className={styles.aboutHero} sectionType="fullWidthCenter">
        <MotionFadeInWhenInView className={styles.profileImage}>
          <FutureImage
            alt="Ian Roberts Designaroni Profile Headshot Collage"
            height={779}
            src="/images/about-ian-roberts-designaroni-headshot-collage@1x.png"
            width={1024}
          />
        </MotionFadeInWhenInView>
        <MotionFadeAndStaggerChildrenWhenInView className={`${styles.stats}`}>
          <div className={`${styles.stat} ${styles.yearsSpentCoding}`}>
            <span className={styles.number}>{`${yearsSpentCoding}`}</span>
            <span className={styles.description}>years as a developer</span>
          </div>
          <div className={`${styles.stat} ${styles.numberOfTripsThisYear}`}>
            <span className={styles.number}>{numberOfTripsThisYear}</span>
            <span className={styles.description}>trips this year</span>
          </div>
          <div
            className={`${styles.stat} ${styles.numberOfMilesTraveledThisYear}`}
          >
            <span className={styles.number}>
              {numberOfMilesTraveledThisYear}
            </span>
            <span className={styles.description}>miles traveled this year</span>
          </div>
          <div className={`${styles.stat} ${styles.numberOfActiveBuilds}`}>
            <span className={styles.number}>{numberOfActiveBuilds}</span>
            <span className={styles.description}>active vehicle builds</span>
          </div>
        </MotionFadeAndStaggerChildrenWhenInView>
      </Section>
      <Section sectionType="center">
        <Row className={styles.shortDescription} elementType="largeP">
          <MotionFadeInWhenInView>
            <Tab />I{`'`}m Ian Roberts, {`${currentAge}`} year old human. I
            reside in Cache Valley Utah, a high desert valley surrounded by
            mountains, trails, & opportunities for year long outdoor recreation.
            Life for me is an ADHD fueled pursuit of the analog & digital – art,
            design, coding, traveling. This site is dedicated to the pursuit of
            a designed life & work well done.
          </MotionFadeInWhenInView>
        </Row>
      </Section>
      <Section>
        <Row className={styles.contentRow}>
          <Column className={styles.titleColumn}>
            <MotionFadeInWhenInView>
              <Title className={styles.nestedTitles} titleType="inlineh3">
                About This Site
                <Title titleType="inlineh5">
                  <Tab />
                  (for the nerds)
                </Title>
              </Title>
            </MotionFadeInWhenInView>
          </Column>
          <Column className={styles.contentColumn}>
            <MotionFadeInWhenInView>
              <p>
                <Tab />
                This site is built in React and Typescript using the NextJS
                framework, hosted on Vercel using a Strapi backend hosted on
                Digital Ocean. Both projects are open source, available on
                Github. The next.js front end can be found{" "}
                <MotionLinkInline
                  link="https://github.com/designaroni/designaroni-next"
                  text="here"
                />
                , the Strapi backend{" "}
                <MotionLinkInline
                  link="https://github.com/designaroni/designaroni-strapi"
                  text="here"
                />
                .
                <br />
                <br />
                <Tab />
                Front end styles for the site are primarily comprised of Sass &
                CSS modules. Style & linting rules are provided by prettier,
                stylelint & eslint applying a handful of <code>typescript</code>
                , <code>stylelint-config</code>, <code>eslint:recommended</code>
                , <code>prettier</code> & <code>airbnb</code> formatters.
                <br />
                <br />
                Interactive, Animation & transitions are largely implemented
                with{" "}
                <MotionLinkInline
                  link="https://www.framer.com/motion/"
                  text="Framer Motion"
                />{" "}
                , a production-ready animation library for react. Initial
                interactive mockups & designs are also create with the{" "}
                <MotionLinkInline
                  link="https://www.framer.com/"
                  text="Framer"
                />{" "}
                app, where pages, components & interaction experiences can be
                fully designed prior to moving the work into the implementation
                stage.
                <br />
                <br />
                <Tab />
                Project management & documentation is handled through Atlassian
                Cloud with Jira & Confluence, incorporating automated task flows
                based on github PR
                {`'`}s, branches, merge & deployment statuses.
              </p>
            </MotionFadeInWhenInView>
          </Column>
        </Row>
      </Section>
      <Section>
        <Row className={styles.contentRow}>
          <Column className={styles.titleColumn}>
            <MotionFadeInWhenInView>
              <Title titleType="inlineh3">Trips</Title>
            </MotionFadeInWhenInView>
          </Column>
          <Column className={styles.contentColumn}>
            <MotionFadeInWhenInView>
              <p>
                <Tab />
                My earliest memories reside in roadtrips across the country,
                from Minnesota, to Colorado, to Arkansas & Missouri. While I
                spend many days coding I maintain an active life hiking, trail
                running, camping & traveling in warmer months and big mountain
                skiing & snowboarding throughout the winter. Since the end of
                2021 I{`'`}
                ve been rolling pursuits into trips across the country in a
                Tacoma 4x4 TRD Offroad with a Four Wheel Campers Project M.
                <br />
                <br />
                <i>
                  Posts on Trips can be found{" "}
                  <MotionLinkInline link="/trips" text="here" />.
                </i>
              </p>
            </MotionFadeInWhenInView>
          </Column>
        </Row>
      </Section>
      <Section>
        <Row className={styles.contentRow}>
          <Column className={styles.titleColumn}>
            <MotionFadeInWhenInView>
              <Title titleType="inlineh3">Journal</Title>
            </MotionFadeInWhenInView>
          </Column>
          <Column className={styles.contentColumn}>
            <MotionFadeInWhenInView>
              <p>
                <Tab />
                After {`${currentAge}`} years under the sun, I{`'`}ve seen some
                things, experienced a journey in life that has taken me from
                Oklahoma to Minnesota to Utah, trips across the country, design
                projects around the globe & now a life settled around the United
                States Southwest. This is my place to write unfiltered about the
                journey.
                <br />
                <br />
                <i>
                  Journal posts can be found{" "}
                  <MotionLinkInline link="/journal" text="here" />.
                </i>
              </p>
            </MotionFadeInWhenInView>
          </Column>
        </Row>
      </Section>
      <Section>
        <Row className={styles.contentRow}>
          <Column className={styles.titleColumn}>
            <MotionFadeInWhenInView>
              <Title titleType="inlineh3">Builds</Title>
            </MotionFadeInWhenInView>
          </Column>
          <Column className={styles.contentColumn}>
            <MotionFadeInWhenInView>
              <p>
                <Tab />
                In 2017 I flew into Las Vegas for a cross country snowboarding
                trip, purchased a shakey, crusty, sun-baked, desert dusted 1990
                Sahara Jeep Wrangler and drove across the country. In 2021,
                post-pandemic, after flipping multiple auction cars & trucks I
                settled in to a 2021 Toyota Tacoma TRD Offroad. In September of
                that year, hunting for one of 10 viable options for truck
                campers, the Four Wheel Campers Project M came into fruition.
                <br />
                <br />
                <i>
                  Posts on Builds can be found{" "}
                  <MotionLinkInline link="/builds" text="here" />.
                </i>
              </p>
            </MotionFadeInWhenInView>
          </Column>
        </Row>
      </Section>
      <Section>
        <Row className={styles.contentRow}>
          <Column className={styles.titleColumn}>
            <MotionFadeInWhenInView>
              <Title titleType="inlineh3">Work</Title>
            </MotionFadeInWhenInView>
          </Column>
          <Column className={styles.contentColumn}>
            <MotionFadeInWhenInView>
              <p>
                <Tab />
                Originally trained as a graphic designer, I keep an eye for
                design in everything I do. Currently working in React, React
                Native & Typescript as a Senior Front End Developer for{" "}
                <MotionLinkInline link="https://ifit.com" text="@iFIT" />, Front
                End Development has been my dream career since {careerStartYear}
                .
                <br />
                <br />
                <i>
                  A digital resume can be found{" "}
                  <MotionLinkInline link="/work" text="here" />.
                </i>
              </p>
            </MotionFadeInWhenInView>
          </Column>
        </Row>
      </Section>
      <Section sectionType="center">
        <Column columnType="center">
          <MotionFadeInWhenInView>
            <Title>Where to find me on the internet:</Title>
          </MotionFadeInWhenInView>
          <MotionFadeInWhenInView>
            <Social />
          </MotionFadeInWhenInView>
        </Column>
      </Section>
      <PageContentFooter />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const topLevelPageNames: TopLevelPageNames = await getTopLevelPageNames();
  const pageMetaData: PageMetaData = await getTopLevelPageMetaData("About");
  const footerData: FooterData = await getFooterData();

  return {
    props: {
      footerData,
      pageMetaData,
      topLevelPageNames,
    },
  };
};

export default About;
