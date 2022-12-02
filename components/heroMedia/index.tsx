import FutureImage from "next/future/image";
import { hexToRGBNumbers, rgbDataURL } from "@/lib/helper-methods";
import MotionFadeInWhenInView from "@/components/motionFadeInWhenInView/motionFadeInWhenInView";
import Section from "@/components/section/section";
import Title from "@/components/title/title";
import Row from "@/components/row/row";
import variables from "@/styles/variables.module.scss";
import styles from "@/styles/components/heroMedia/heroMedia.module.scss";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";

interface HeroMedia {
  className?: string;
  heroMediaAltText: string;
  heroMediaHeight: number;
  heroMediaURL: string;
  heroMediaWidth: number;
  pageDisplayTitle?: string;
  shortDescription?: string;
  subtitle?: string;
  title?: string;
}

interface HeroMediaSection {
  children?: React.ReactNode;
  className?: string;
  heroMediaAltText: string;
  heroMediaHeight: number;
  heroMediaURL: string;
  heroMediaWidth: number;
}

// eslint-disable-next-line @typescript-eslint/no-redeclare -- intentionally naming the variable the same as the type
const HeroMediaSection = ({
  children,
  className,
  heroMediaAltText,
  heroMediaHeight,
  heroMediaURL,
  heroMediaWidth,
}: HeroMediaSection) => {
  const imageWrapperRef = useRef<HTMLDivElement | null>(null);
  const [imageClassName, setImageClassName] = useState("landscapeImage");

  useEffect(() => {
    let displayedHeight = imageWrapperRef.current?.clientHeight as number;
    let displayedWidth = imageWrapperRef.current?.clientWidth as number;
    let displayedAspectRatio = displayedWidth / displayedHeight;
    const imageHeight = heroMediaHeight;
    const imageWidth = heroMediaWidth;
    const imageAspectRatio = imageWidth / imageHeight;

    if (displayedAspectRatio > imageAspectRatio) {
      setImageClassName(`portraitImage`);
    }

    const handleResize = () => {
      displayedHeight = imageWrapperRef.current?.clientHeight as number;
      displayedWidth = imageWrapperRef.current?.clientWidth as number;
      displayedAspectRatio = displayedWidth / displayedHeight;

      if (displayedAspectRatio > imageAspectRatio) {
        setImageClassName(`portraitImage`);
      }
      if (displayedAspectRatio < imageAspectRatio) {
        setImageClassName(`landscapeImage`);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [imageWrapperRef, heroMediaHeight, heroMediaWidth]);

  return (
    <Section
      className={className ? `${className} ${styles.section}` : styles.section}
      sectionType="fullWidth"
    >
      <div className={styles.heroMedia}>
        <MotionFadeInWhenInView
          ref={imageWrapperRef}
          className={styles.imageWrapper}
        >
          <FutureImage
            alt={heroMediaAltText}
            blurDataURL={rgbDataURL(hexToRGBNumbers(variables.highCountry))}
            className={styles[imageClassName]}
            height={heroMediaHeight}
            placeholder="blur"
            src={heroMediaURL}
            width={heroMediaWidth}
          />
        </MotionFadeInWhenInView>
      </div>
      {children && (
        <MotionFadeInWhenInView className={styles.heroContentWrapper}>
          {children}
        </MotionFadeInWhenInView>
      )}
    </Section>
  );
};

// eslint-disable-next-line @typescript-eslint/no-redeclare -- intentionally naming the variable the same as the type
const HeroMedia = ({
  className,
  heroMediaAltText,
  heroMediaHeight,
  heroMediaURL,
  heroMediaWidth,
  pageDisplayTitle,
  shortDescription,
  subtitle,
  title,
}: HeroMedia) => {
  // could use route or pathname, pathname reportedly excludes query string @see: https://stackoverflow.com/questions/65370486/difference-between-router-pathname-and-router-route-in-nextjs
  const { pathname } = useRouter();

  if (pathname === "/[topLevelPage]") {
    return (
      <HeroMediaSection
        className={
          className
            ? `${className} ${styles.topLevelPageHeroMedia}`
            : styles.topLevelPageHeroMedia
        }
        heroMediaAltText={heroMediaAltText}
        heroMediaHeight={heroMediaHeight}
        heroMediaURL={heroMediaURL}
        heroMediaWidth={heroMediaWidth}
      >
        <div className={styles.topLevelPageContentWrapper}>
          <Title
            className={styles.pageDisplayTitle}
            titleType="topLevelPageDisplayTitle"
          >
            {pageDisplayTitle}
          </Title>
          <Row className={styles.shortDescription} elementType="largeP">
            {shortDescription}
          </Row>
        </div>
      </HeroMediaSection>
    );
  }

  if (pathname.includes("post")) {
    return (
      <HeroMediaSection
        className={className}
        heroMediaAltText={heroMediaAltText}
        heroMediaHeight={heroMediaHeight}
        heroMediaURL={heroMediaURL}
        heroMediaWidth={heroMediaWidth}
      >
        <Title className={styles.postTitle} titleType="inlineh1">
          {title}
        </Title>
        <Title className={styles.postSubtitle} titleType="inlineh5">
          {subtitle}
        </Title>
      </HeroMediaSection>
    );
  }

  return (
    <HeroMediaSection
      className={className}
      heroMediaAltText={heroMediaAltText}
      heroMediaHeight={heroMediaHeight}
      heroMediaURL={heroMediaURL}
      heroMediaWidth={heroMediaWidth}
    />
  );
};

export default HeroMedia;
