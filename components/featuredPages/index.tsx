import { TopLevelPageData } from "@/lib/api";
import { lowercaseStringAsURL } from "@/lib/helper-methods";
import Link from "next/link";
import FutureImage from "next/future/image";
import Section from "@/components/section/section";
import Title from "@/components/title/title";
import MotionFadeAndSlideInWhenInView from "@/components/motionFadeAndSlideInWhenInView/motionFadeAndSlideInWhenInView";
import MotionFadeInWhenInView from "@/components/motionFadeInWhenInView/motionFadeInWhenInView";
import styles from "@/styles/components/featuredPages/featuredPages.module.scss";

interface FeaturedPages {
  topLevelPageData: TopLevelPageData[];
}

// eslint-disable-next-line @typescript-eslint/no-redeclare -- intentionally naming the variable the same as the type
const FeaturedPages = ({ topLevelPageData }: FeaturedPages) => (
  <Section className={styles.section}>
    {topLevelPageData.map((topLevelPage, index) => {
      const displayedHeight = 450;
      const displayedWidth = 360;
      const displayedAspectRatio = displayedWidth / displayedHeight;
      const imageHeight = topLevelPage.heroImage.height;
      const imageWidth = topLevelPage.heroImage.width;
      const imageAspectRatio = imageWidth / imageHeight;
      let imageClassName = `landscapeImage`;
      if (displayedAspectRatio > imageAspectRatio) {
        imageClassName = `portraitImage`;
      }

      const initialTranslateX = index === 0 || index === 1 ? -200 : 200;

      return (
        <div
          key={topLevelPage.name + index.toString()}
          className={`${styles[topLevelPage.name.toLowerCase()]}`}
        >
          <Link href={lowercaseStringAsURL(topLevelPage.name)} passHref>
            <MotionFadeAndSlideInWhenInView
              className={styles.imageWrapper}
              elementType="a"
              initialTranslateX={initialTranslateX}
              style={{ height: displayedHeight, width: displayedWidth }}
            >
              <FutureImage
                alt={topLevelPage.heroImage.alternativeText}
                className={styles[imageClassName]}
                height={topLevelPage.heroImage.height}
                src={topLevelPage.heroImage.url}
                width={topLevelPage.heroImage.width}
              />
            </MotionFadeAndSlideInWhenInView>
          </Link>
          <Link href={lowercaseStringAsURL(topLevelPage.name)}>
            <a>
              <MotionFadeInWhenInView>
                <Title
                  className={styles.pageDisplayTitle}
                  titleType="pageDisplayTitle"
                >
                  {topLevelPage.name}
                </Title>
              </MotionFadeInWhenInView>
            </a>
          </Link>
        </div>
      );
    })}
  </Section>
);

export default FeaturedPages;
