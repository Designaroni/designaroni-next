import {
  getTopLevelPageNames,
  getTopLevelPageMetaData,
  getFooterData,
  FooterData,
  PageMetaData,
  TopLevelPageNames,
  getLatestPostsAndTLP,
  LatestPostsAndTLP,
  TopLevelPageData,
  getTopLevelPageData,
  getLatestCategoriesAndPaths,
  AllCategoriesAndPaths,
  getHomePageData,
  HomePageData,
} from "@/lib/api";
import type { NextPage, GetStaticProps } from "next";
import PageHead from "@/components/general/pageHead";
import Section from "@/components/section/section";
import Row from "@/components/row/row";
import Column from "@/components/column/column";
import HeroMedia from "@/components/heroMedia";
import Title from "@/components/title/title";
import Social from "@/components/social";
import FeaturedPages from "@/components/featuredPages";
import MotionLatestPostTicker from "@/components/motionLatestPostsTicker/motionLatestPostsTicker";
import MotionCategoriesTicker from "@/components/motionCategoriesTicker/motionCategoriesTicker";
import MotionFadeInWhenInView from "@/components/motionFadeInWhenInView/motionFadeInWhenInView";
import styles from "@/styles/pages/home.module.scss";

interface PageProps {
  footerData: FooterData;
  homePageData: HomePageData;
  latestCategories: AllCategoriesAndPaths[];
  latestPosts: LatestPostsAndTLP[];
  pageMetaData: PageMetaData;
  topLevelPageData: TopLevelPageData[];
  topLevelPageNames: TopLevelPageNames;
}

const Home: NextPage<PageProps> = (pageProps) => {
  const {
    homePageData: {
      heroMedia: {
        alternativeText: heroMediaAltText,
        height: heroMediaHeight,
        url: heroMediaURL,
        width: heroMediaWidth,
      },
      pageTitle: pageDisplayTitle,
      shortDescription,
    },
    latestCategories: categories,
    latestPosts,
    pageMetaData: { title: pageTitle, description: pageDescription },
    topLevelPageData,
  } = pageProps;

  return (
    <>
      <PageHead pageDescription={pageDescription} pageTitle={pageTitle} />
      <HeroMedia
        heroMediaAltText={heroMediaAltText}
        heroMediaHeight={heroMediaHeight}
        heroMediaURL={heroMediaURL}
        heroMediaWidth={heroMediaWidth}
      />
      <Section sectionType="center">
        <Column columnType="center">
          <MotionFadeInWhenInView>
            <Title titleType="h1">{pageDisplayTitle}</Title>
          </MotionFadeInWhenInView>
          <MotionFadeInWhenInView elementType="center">
            <Row className={styles.shortDescription} elementType="largeP">
              {shortDescription}
            </Row>
          </MotionFadeInWhenInView>
          <Section sectionType="center">
            <MotionFadeInWhenInView>
              <Row className={styles.socialMediaLinks}>
                <Social />
              </Row>
            </MotionFadeInWhenInView>
          </Section>
        </Column>
      </Section>
      <FeaturedPages topLevelPageData={topLevelPageData} />
      <MotionLatestPostTicker latestPosts={latestPosts} />
      <MotionCategoriesTicker categories={categories} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const topLevelPageNames: TopLevelPageNames = await getTopLevelPageNames();
  const pageMetaData: PageMetaData = await getTopLevelPageMetaData("About");
  const footerData: FooterData = await getFooterData();
  const homePageData: HomePageData = await getHomePageData();
  const topLevelPageData: TopLevelPageData[] = await getTopLevelPageData();
  // modify this to get top 2 posts in each category
  const latestPosts: LatestPostsAndTLP[] = await getLatestPostsAndTLP();
  const latestCategories: AllCategoriesAndPaths[] =
    await getLatestCategoriesAndPaths();

  return {
    props: {
      footerData,
      homePageData,
      latestCategories,
      latestPosts,
      pageMetaData,
      topLevelPageData,
      topLevelPageNames,
    },
  };
};

export default Home;
