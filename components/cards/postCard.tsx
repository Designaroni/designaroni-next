import Link from "next/link";
import FutureImage from "next/future/image";
import { ArrowRight } from "phosphor-react";
import Title from "@/components/title/title";
import {
  hexToRGBNumbers,
  imageURL,
  lowercaseStringAsURL,
  rgbDataURL,
} from "@/lib/helper-methods";
import LinkSlide from "@/components/general/linkSlide";
import MotionLinkInline from "@/components/general/motionLinkInline";
import MotionFadeInWhenInView from "@/components/motionFadeInWhenInView/motionFadeInWhenInView";
import variables from "@/styles/variables.module.scss";
import styles from "@/styles/components/cards/postCard.module.scss";

interface PostCard {
  author?: {
    name: string;
    profileImage: {
      alternativeText: string;
      height: number;
      url: string;
      width: number;
    };
  };
  categories?: string[];
  className?: string;
  coverImage: {
    alternativeText: string;
    height: number;
    url: string;
    width: number;
  };
  link: string; // should be link
  publishedAt: string;
  publishedAtFormatted: string;
  subtitle: string;
  title: string;
  topLevelPage: string;
}

// eslint-disable-next-line @typescript-eslint/no-redeclare -- intentionally naming the variable the same as the type
const PostCard = ({
  author,
  categories,
  className,
  coverImage,
  link,
  publishedAt,
  publishedAtFormatted,
  subtitle,
  title,
  topLevelPage,
}: PostCard) => (
  <MotionFadeInWhenInView className={styles.postCardWrapper}>
    <Link
      href={`${lowercaseStringAsURL(topLevelPage)}${lowercaseStringAsURL(
        link
      )}`}
    >
      <a
        className={
          className
            ? `${className} ${styles.postCardImageWrapper}`
            : styles.postCardImageWrapper
        }
      >
        <FutureImage
          alt={coverImage.alternativeText}
          blurDataURL={rgbDataURL(hexToRGBNumbers(variables.highCountry))}
          height={coverImage.height}
          placeholder="blur"
          src={imageURL(coverImage.url)}
          width={coverImage.width}
        />
      </a>
    </Link>
    <Link
      href={`${lowercaseStringAsURL(topLevelPage)}${lowercaseStringAsURL(
        link
      )}`}
      passHref
    >
      <span
        className={
          className
            ? `${className} ${styles.postCardContent}`
            : styles.postCardContent
        }
      >
        <div className={`${styles.tagAndDateWrapper} ${styles.postHeader}`}>
          {topLevelPage && (
            // Builds tag could be a link if not on the all posts page for that tag
            <LinkSlide
              className={styles.topLevelPageTag}
              link={lowercaseStringAsURL(topLevelPage)}
              text=""
            >
              {topLevelPage}
            </LinkSlide>
          )}
          {/* publishedAt could be a link to all posts published in that dates month & year */}
          <time className={styles.publishedDate} dateTime={publishedAt}>
            {publishedAtFormatted}
          </time>
        </div>
        <Title className={styles.postTitle} titleType="inlineh4">
          {title}
        </Title>
        <Title className={styles.postSubtitle} titleType="inlineh5">
          {subtitle}
        </Title>
        <div className={styles.postFooter}>
          {author && (
            <div className={styles.postAuthor}>
              <Link
                href={`/author${lowercaseStringAsURL(author.name)}/posts`}
                passHref
              >
                <a>
                  <FutureImage
                    alt={author.profileImage.alternativeText}
                    blurDataURL={rgbDataURL(
                      hexToRGBNumbers(variables.highCountry)
                    )}
                    className={styles.authorImage}
                    height={36}
                    src={imageURL(author.profileImage.url)}
                    width={36}
                  />
                </a>
              </Link>
              {/* author post name could be link to all posts by author or the about page */}
              <MotionLinkInline
                className={styles.name}
                hoverColor={variables.morningBlue}
                initialColor={variables.morningBlue}
                link={`/author${lowercaseStringAsURL(author.name)}/posts`}
                text={author.name}
              />
            </div>
          )}
          <LinkSlide
            className={styles.readPostPrompt}
            link={`${lowercaseStringAsURL(topLevelPage)}${lowercaseStringAsURL(
              link
            )}`}
            text=""
          >
            <span className={styles.text}>Read Post</span>
            <ArrowRight
              className={styles.arrowRight}
              // color={variables.purpleMartin}
              size={16}
              weight="bold"
            />
          </LinkSlide>
        </div>
      </span>
    </Link>
    {categories && (
      <div className={styles.postCategories}>
        {categories?.map((category: string, index: number) => (
          <MotionLinkInline
            key={`${category}${index.toString()}`}
            className={styles.categoryLink}
            link={`/category${lowercaseStringAsURL(category)}`}
            text={category}
          />
        ))}
      </div>
    )}
  </MotionFadeInWhenInView>
);

export default PostCard;
