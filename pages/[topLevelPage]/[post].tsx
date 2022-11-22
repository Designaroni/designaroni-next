import type { NextPage, GetStaticProps, GetStaticPaths } from "next";
import FutureImage from "next/future/image";
import Markdown from "markdown-to-jsx";
import {
  getTopLevelPageNames,
  getAllPostPathsAndTLP,
  getIdFromPostPathsByTLP,
  getPostContentById,
  getFooterData,
  AllPostPathsAndTLP,
  PostContentById,
  IdFromPostPathsByTLP,
  FooterData,
  PageMetaData,
  TopLevelPageNames,
} from "@/lib/api";
import {
  lowercaseStringAsURL,
  imageURL,
  capitalize,
} from "@/lib/helper-methods";
import PageHead from "@/components/general/pageHead";
import Section from "@/components/section/section";
import Row from "@/components/row/row";
import HeroMedia from "@/components/heroMedia";
import Title from "@/components/title/title";
import MotionLinkInline from "@/components/general/motionLinkInline";
import PageContentFooter from "@/components/pageContentFooter/pageContentFooter";
import styles from "@/styles/pages/post.module.scss";
import MotionFadeInWhenInView from "@/components/motionFadeInWhenInView/motionFadeInWhenInView";

interface PageProps {
  footerData: FooterData;
  pageContent: PostContentById;
  pageMetaData: PageMetaData;
  relatedPosts: {
    nextPost: {
      path: string;
      title: string;
    };
    previousPost: {
      path: string;
      title: string;
    };
  };
  topLevelPageNames: TopLevelPageNames;
}

const Post: NextPage<PageProps> = (pageProps) => {
  const {
    pageMetaData: { title: pageTitle, description: pageDescription },
    pageContent: {
      author,
      author: { profileImage },
      bodyCopy,
      categories,
      coverImage: {
        alternativeText: heroMediaAltText,
        height: heroMediaHeight,
        url: heroMediaURL,
        width: heroMediaWidth,
      },
      subtitle,
      title,
      topLevelPage: { name: parentPage },
    },
    relatedPosts: {
      nextPost: { title: nextPostTitle, path: nextPostPath },
      previousPost: { title: previousPostTitle, path: previousPostPath },
    },
  } = pageProps;

  return (
    <>
      <PageHead pageDescription={pageDescription} pageTitle={pageTitle} />
      <HeroMedia
        heroMediaAltText={heroMediaAltText}
        heroMediaHeight={heroMediaHeight}
        heroMediaURL={heroMediaURL}
        heroMediaWidth={heroMediaWidth}
        subtitle={subtitle}
        title={title}
      />
      <MotionFadeInWhenInView
        className={styles.postArticle}
        elementType="article"
      >
        {/* article component */}
        <Section>
          <div className={styles.article}>
            <Markdown options={{ wrapper: "article" }}>{bodyCopy}</Markdown>
          </div>
        </Section>
      </MotionFadeInWhenInView>
      {/* categories component */}
      <Section>
        <MotionFadeInWhenInView className={styles.categories}>
          <Title titleType="inlineh5">Categories:</Title>
          {categories.map((category: string, index: number) => (
            <MotionLinkInline
              key={`${category}${index.toString()}`}
              className={styles.categoryLink}
              link={`/category${lowercaseStringAsURL(category)}`}
              text={category}
            />
          ))}
        </MotionFadeInWhenInView>
      </Section>
      {/* author compoenent */}
      <Section sectionType="center">
        <MotionFadeInWhenInView className={styles.author}>
          <Title>About the author</Title>
          {/* <span className={styles.name}>{author.name}</span> */}
          <Row className={styles.contentWrapper}>
            <FutureImage
              alt={profileImage.alternativeText}
              className={styles.profileImage}
              height={profileImage.height}
              src={imageURL(profileImage.url)}
              width={profileImage.width}
            />
            <Markdown className={styles.bio}>{author.bio}</Markdown>
          </Row>
        </MotionFadeInWhenInView>
      </Section>
      {/* adjacent posts component */}
      <Section>
        <MotionFadeInWhenInView className={styles.relatedPosts}>
          {previousPostTitle.length > 0 && (
            <span>
              {"Previous post: "}
              <MotionLinkInline
                link={previousPostPath}
                text={previousPostTitle}
              />
            </span>
          )}
          {nextPostTitle.length > 0 && (
            <span>
              {"Next post: "}
              <MotionLinkInline link={nextPostPath} text={nextPostTitle} />
            </span>
          )}
        </MotionFadeInWhenInView>
      </Section>
      <PageContentFooter parentPage={parentPage} />
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const postPathsAndTLP: AllPostPathsAndTLP[] = await getAllPostPathsAndTLP();

  const paths = postPathsAndTLP.map((pathAndTLP) => ({
    params: { post: pathAndTLP.path, topLevelPage: pathAndTLP.topLevelPage },
  }));

  return {
    fallback: false,
    paths,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const postURLString = context.params?.post as string;
  const topLevelPageName = context.params?.topLevelPage as string;
  const postsIdsAndPaths: IdFromPostPathsByTLP[] =
    await getIdFromPostPathsByTLP(capitalize(topLevelPageName));
  const { id: postId } = postsIdsAndPaths.filter(
    (data: IdFromPostPathsByTLP) => postURLString === data.path
  )[0];
  const postContent: PostContentById = await getPostContentById(postId);
  const { pageMetaData } = postContent;
  const topLevelPageNames: TopLevelPageNames = await getTopLevelPageNames();
  const footerData: FooterData = await getFooterData();
  // adjacent posts component
  // const parentPage = postContent.topLevelPage?.name ?? "Home"; parentPage replaced with topLevelPageName
  const nextPostId = (Number(postId) + 1).toString();
  const previousPostId = (Number(postId) - 1).toString();
  const getRelatedPostById = (relatedPostId: string) =>
    postsIdsAndPaths?.filter(
      (data: IdFromPostPathsByTLP) => relatedPostId === data?.id
    )[0] !== undefined;
  const hasNextPost = getRelatedPostById(nextPostId);
  const hasPreviousPost = getRelatedPostById(previousPostId);
  const { path: nextPostPath, title: nextPostTitle } = hasNextPost
    ? postsIdsAndPaths.filter(
        (data: IdFromPostPathsByTLP) => nextPostId === data?.id
      )[0]
    : { path: "", title: "" };
  const { path: previousPostPath, title: previousPostTitle } = hasPreviousPost
    ? postsIdsAndPaths.filter(
        (data: IdFromPostPathsByTLP) => previousPostId === data?.id
      )[0]
    : { path: "", title: "" };
  const relatedPosts = {
    nextPost: {
      path:
        lowercaseStringAsURL(topLevelPageName) +
        lowercaseStringAsURL(nextPostPath),
      title: nextPostTitle,
    },
    previousPost: {
      path:
        lowercaseStringAsURL(topLevelPageName) +
        lowercaseStringAsURL(previousPostPath),
      title: previousPostTitle,
    },
  };

  return {
    props: {
      footerData,
      pageContent: postContent,
      pageMetaData,
      relatedPosts,
      topLevelPageNames,
    },
  };
};

export default Post;
