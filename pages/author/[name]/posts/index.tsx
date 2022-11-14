import type { NextPage, GetStaticProps, GetStaticPaths } from "next";
import {
  getTopLevelPageNames,
  getAllPostPathsAndAuthor,
  getFooterData,
  getAllPostsByAuthor,
  AllPostPathsAndAuthor,
  FooterData,
  TopLevelPageNames,
  PageMetaData,
  AllPostsByAuthor,
} from "@/lib/api";
import { capitalizeFullName } from "@/lib/helper-methods";
import PageHead from "@/components/general/pageHead";
import PageTitle from "@/components/pageTitle/pageTitle";
import CardListGrid from "@/components/cardListGrid";

interface PageProps {
  footerData: FooterData;
  pageContent: AllPostsByAuthor;
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

const AuthorPosts: NextPage<PageProps> = (pageProps) => {
  const {
    pageMetaData: { title: pageTitle, description: pageDescription },
    pageContent: postContent,
  } = pageProps;

  return (
    <>
      <PageHead pageDescription={pageDescription} pageTitle={pageTitle} />
      <PageTitle pageTitle={pageTitle} />
      <CardListGrid postContent={postContent} />
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const postPathsAndAuthor: AllPostPathsAndAuthor[] =
    await getAllPostPathsAndAuthor();

  const paths = postPathsAndAuthor.map((pathAndAuthor) => ({
    params: { name: pathAndAuthor.author },
  }));

  return {
    fallback: false,
    paths,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const authorName = context.params?.name as string;
  const footerData: FooterData = await getFooterData();
  const topLevelPageNames: TopLevelPageNames = await getTopLevelPageNames();
  const allPostsTitle = `All posts by ${capitalizeFullName(authorName)}`;
  const allPostsDescription = `All posts by ${capitalizeFullName(authorName)}`;
  const pageMetaData: PageMetaData = {
    description: allPostsDescription,
    title: allPostsTitle,
  };
  const allPostsByAuthor: AllPostsByAuthor = await getAllPostsByAuthor(
    capitalizeFullName(authorName)
  );

  return {
    props: {
      footerData,
      pageContent: allPostsByAuthor,
      pageMetaData,
      topLevelPageNames,
    },
  };
};

export default AuthorPosts;
