import type { NextPage, GetStaticProps, GetStaticPaths } from "next";
import {
  getTopLevelPageNames,
  getFooterData,
  getAllPostsByCategory,
  getAllCategoryPaths,
  getAllCategoriesAndPaths,
  FooterData,
  TopLevelPageNames,
  PageMetaData,
  AllPostsByCategory,
  AllCategoriesAndPaths,
} from "@/lib/api";
import PageHead from "@/components/general/pageHead";
import PageTitle from "@/components/pageTitle/pageTitle";
import PageContentFooter from "@/components/pageContentFooter/pageContentFooter";
import CardListGrid from "@/components/cardListGrid";

interface PageProps {
  footerData: FooterData;
  pageContent: AllPostsByCategory;
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
  topLevelPageNames: TopLevelPageNames;
}

const CategoryPosts: NextPage<PageProps> = (pageProps) => {
  const {
    pageMetaData: { title: pageTitle, description: pageDescription },
    pageContent: postContent,
  } = pageProps;

  return (
    <>
      <PageHead pageDescription={pageDescription} pageTitle={pageTitle} />
      <PageTitle pageTitle={pageTitle} />
      <CardListGrid postContent={postContent} />
      <PageContentFooter />
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const postPaths: string[] = await getAllCategoryPaths();
  const paths = postPaths.map((p: string) => ({
    params: { category: p },
  }));

  return {
    fallback: false,
    paths,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const postURLString = context.params?.category as string;
  const allCategoriesAndPaths: AllCategoriesAndPaths[] =
    await getAllCategoriesAndPaths();
  const categoryAndPath = allCategoriesAndPaths.find(
    (categoriesAndPaths) => categoriesAndPaths.path === postURLString
  );
  const categoryPageName = categoryAndPath?.category
    ? categoryAndPath.category
    : "";

  const footerData: FooterData = await getFooterData();
  const topLevelPageNames: TopLevelPageNames = await getTopLevelPageNames();
  const allPostsTitle = `All posts in ${categoryPageName} category`;
  const allPostsDescription = `All posts in ${categoryPageName} category`;

  const pageMetaData: PageMetaData = {
    description: allPostsDescription,
    title: allPostsTitle,
  };
  const allPostsByCategory: AllPostsByCategory = await getAllPostsByCategory(
    categoryPageName
  );

  return {
    props: {
      footerData,
      pageContent: allPostsByCategory,
      pageMetaData,
      topLevelPageNames,
    },
  };
};

export default CategoryPosts;
