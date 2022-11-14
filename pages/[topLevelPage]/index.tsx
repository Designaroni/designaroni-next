import type { NextPage, GetStaticProps, GetStaticPaths } from "next";
import {
  getTopLevelPageNames,
  getTopLevelPageMetaData,
  getFooterData,
  FooterData,
  PageMetaData,
  TopLevelPageNames,
  getPageDataByTLP,
  PageDataByTLP,
  getFeaturedPostsByTLP,
  getLatestPostsByTLP,
  FeaturedPostsByTLP,
  LatestPostsByTLP,
  getDynamicTopLevelPageNames,
  DynamicTopLevelPageNames,
} from "@/lib/api";
import { capitalize } from "@/lib/helper-methods";
import PageHead from "@/components/general/pageHead";
import HeroMedia from "@/components/heroMedia";
import PageContentFooter from "@/components/pageContentFooter/pageContentFooter";
import FeaturedPostsCards from "@/components/featuredPostsCards";
import LatestPostsCards from "@/components/latestPostsCards";

interface PageProps {
  featuredPosts: FeaturedPostsByTLP;
  footerData: FooterData;
  latestPosts: LatestPostsByTLP;
  pageData: PageDataByTLP;
  pageMetaData: PageMetaData;
  topLevelPageName: string;
  topLevelPageNames: TopLevelPageNames;
}

const TopLevelPage: NextPage<PageProps> = (pageProps) => {
  const {
    featuredPosts,
    latestPosts,
    pageData: {
      heroImage: {
        alternativeText: heroMediaAltText,
        height: heroMediaHeight,
        url: heroMediaURL,
        width: heroMediaWidth,
      },
      name: pageDisplayTitle,
      shortDescription,
    },
    pageMetaData: { title: pageTitle, description: pageDescription },
    topLevelPageName: parentPage,
  } = pageProps;

  return (
    <>
      <PageHead pageDescription={pageDescription} pageTitle={pageTitle} />
      <HeroMedia
        heroMediaAltText={heroMediaAltText}
        heroMediaHeight={heroMediaHeight}
        heroMediaURL={heroMediaURL}
        heroMediaWidth={heroMediaWidth}
        pageDisplayTitle={pageDisplayTitle}
        shortDescription={shortDescription}
      />
      <FeaturedPostsCards postContent={featuredPosts} />
      <LatestPostsCards parentPage={parentPage} postContent={latestPosts} />
      <PageContentFooter parentPage={parentPage} />
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const topLevelPagePaths: DynamicTopLevelPageNames =
    await getDynamicTopLevelPageNames();

  const paths = topLevelPagePaths.map((topLevelPageName) => ({
    params: { topLevelPage: topLevelPageName.toLowerCase().toString() },
  }));

  return {
    fallback: false,
    paths,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const topLevelPageName = context.params?.topLevelPage as string;
  const topLevelPageNames: TopLevelPageNames = await getTopLevelPageNames();
  const pageMetaData: PageMetaData = await getTopLevelPageMetaData(
    capitalize(topLevelPageName)
  );
  const footerData: FooterData = await getFooterData();
  const pageData: PageDataByTLP = await getPageDataByTLP(
    capitalize(topLevelPageName)
  );
  const featuredPosts: FeaturedPostsByTLP = await getFeaturedPostsByTLP(
    capitalize(topLevelPageName)
  );
  const latestPosts: LatestPostsByTLP = await getLatestPostsByTLP(
    capitalize(topLevelPageName)
  );

  return {
    props: {
      featuredPosts,
      footerData,
      latestPosts,
      pageData,
      pageMetaData,
      topLevelPageName,
      topLevelPageNames,
    },
  };
};

export default TopLevelPage;
