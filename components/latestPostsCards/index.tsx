import { CardType } from "@/lib/api";
import { capitalize } from "@/lib/helper-methods";
import Section from "@/components/section/section";
import MotionFadeInWhenInView from "@/components/motionFadeInWhenInView/motionFadeInWhenInView";
import Title from "@/components/title/title";
import Row from "@/components/row/row";
import PostCard from "@/components/cards/postCard";
import styles from "@/styles/components/cards/latestPostsCards.module.scss";

interface LatestPostsCards {
  parentPage: string;
  postContent: CardType[];
}

// eslint-disable-next-line @typescript-eslint/no-redeclare -- intentionally naming the variable the same as the type
const LatestPostsCards = ({ parentPage, postContent }: LatestPostsCards) => (
  <Section>
    <MotionFadeInWhenInView>
      <Title>Latest {capitalize(parentPage)}</Title>
    </MotionFadeInWhenInView>
    <Row className={styles.row}>
      {postContent.map((post) => (
        <PostCard
          key={post.path}
          author={post.author}
          categories={post.categories}
          coverImage={post.coverImage}
          link={post.path}
          publishedAt={post.publishedAt}
          publishedAtFormatted={post.publishedAtFormatted}
          subtitle={post.subtitle}
          title={post.title}
          topLevelPage={post.topLevelPage.name}
        />
      ))}
    </Row>
  </Section>
);

export default LatestPostsCards;
