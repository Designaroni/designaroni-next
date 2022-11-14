import { CardType } from "@/lib/api";
import styles from "@/styles/components/cards/featuredPostsCards.module.scss";
import PostCard from "@/components/cards/postCard";
import Section from "@/components/section/section";

interface FeaturedPostsCards {
  postContent: CardType[];
}

// eslint-disable-next-line @typescript-eslint/no-redeclare -- intentionally naming the variable the same as the type
const FeaturedPostsCards = ({ postContent }: FeaturedPostsCards) => (
  <Section className={styles.section} sectionType="columnAlignItemsEnd">
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
  </Section>
);

export default FeaturedPostsCards;
