import type { NextPage, GetStaticProps, GetStaticPaths } from "next";
import {
  getTopLevelPageNames,
  getAllPostPathsAndTLP,
  getFooterData,
  getAllPostsByTLP,
  AllPostPathsAndTLP,
  FooterData,
  TopLevelPageNames,
  PageMetaData,
  AllPostsByTLP,
} from "@/lib/api";
import { capitalize } from "@/lib/helper-methods";
import PageHead from "@/components/general/pageHead";
import PageTitle from "@/components/pageTitle/pageTitle";
import CardListGrid from "@/components/cardListGrid";
import PageContentFooter from "@/components/pageContentFooter/pageContentFooter";

interface PageProps {
  footerData: FooterData;
  pageContent: AllPostsByTLP;
  pageMetaData: PageMetaData;
  // pagination: {
  //   nextPage: {
  //     path: string;
  //     title: string;
  //   };
  //   previousPage: {
  //     path: string;
  //     title: string;
  //   };
  // };
  topLevelPageName: string;
  topLevelPageNames: TopLevelPageNames;
}

const TopLevelPagePosts: NextPage<PageProps> = (pageProps) => {
  const {
    pageMetaData: { title: pageTitle, description: pageDescription },
    pageContent: postContent,
    topLevelPageName: parentPage,
  } = pageProps;

  return (
    <>
      <PageHead pageDescription={pageDescription} pageTitle={pageTitle} />
      <PageTitle pageTitle={pageTitle} />
      <CardListGrid postContent={postContent} />
      <PageContentFooter parentPage={parentPage} />
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const postPathsAndTLP: AllPostPathsAndTLP[] = await getAllPostPathsAndTLP();

  const paths = postPathsAndTLP.map((pathAndTLP) => ({
    params: { topLevelPage: pathAndTLP.topLevelPage },
  }));

  return {
    fallback: false,
    paths,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const topLevelPageName = context.params?.topLevelPage as string;
  const footerData: FooterData = await getFooterData();
  const topLevelPageNames: TopLevelPageNames = await getTopLevelPageNames();
  const allPostsTitle = `All posts in ${capitalize(topLevelPageName)}`;
  const allPostsDescription = `All posts in ${capitalize(topLevelPageName)}`;
  const pageMetaData: PageMetaData = {
    description: allPostsDescription,
    title: allPostsTitle,
  };
  const allPostsByTLP: AllPostsByTLP = await getAllPostsByTLP(
    capitalize(topLevelPageName)
  );

  return {
    props: {
      footerData,
      pageContent: allPostsByTLP,
      pageMetaData,
      topLevelPageName,
      topLevelPageNames,
    },
  };
};

export default TopLevelPagePosts;
