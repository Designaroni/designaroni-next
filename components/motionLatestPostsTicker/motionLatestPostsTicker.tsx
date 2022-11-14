import { lowercaseStringAsURL, toNumber } from "@/lib/helper-methods";
import { LatestPostsAndTLP } from "@/lib/api";
import Section from "@/components/section/section";
import Title from "@/components/title/title";
import MotionLinkInline from "@/components/general/motionLinkInline";
import { useState, useRef, createRef, Ref } from "react";
import useEffectOnce from "@/lib/hooks/useEffectOnce";
import MotionRow from "@/components/row/motionRow";
import styles from "@/styles/components/motionLatestPostsTicker/motionLatestPostsTicker.module.scss";
import MotionFadeInWhenInView from "@/components/motionFadeInWhenInView/motionFadeInWhenInView";
import Column from "@/components/column/column";

interface MotionLatestPostTicker {
  latestPosts: LatestPostsAndTLP[];
}

type AnimationValues = {
  animate: {
    transition: {
      delay: number;
      duration: number;
      ease: string;
      repeat: number;
      repeatType: "reverse" | "loop" | "mirror" | undefined;
    };
    translateX: number;
  };
};

// eslint-disable-next-line @typescript-eslint/no-redeclare -- intentionally naming the variable the same as the type
const MotionLatestPostTicker = ({ latestPosts }: MotionLatestPostTicker) => {
  const refArrayLength: number = latestPosts.length;
  const refArray = Array(refArrayLength)
    .fill(undefined)
    .map(() => createRef());
  const linkRefs = useRef(refArray);

  const [animationValues, setAnimationValues] = useState<
    Array<AnimationValues>
  >([]);

  useEffectOnce(() => {
    const variants: AnimationValues[] = linkRefs.current.map(
      ({ current }, index) => {
        const element = current as HTMLAnchorElement;
        const elementWidth = element.getBoundingClientRect().width;
        const marginRight = toNumber(getComputedStyle(element).marginRight);
        const indexIsOdd: number = index % 2;

        // translateXValue
        const translateXValue = indexIsOdd
          ? -(elementWidth + marginRight)
          : elementWidth + marginRight;

        // duration
        const baseDuration = 30;
        const baseDurationStepValue = 4;
        const duration = baseDuration + baseDurationStepValue * index;

        return {
          animate: {
            transition: {
              delay: 0,
              duration,
              ease: "linear",
              repeat: Infinity,
              repeatType: "loop",
            },
            translateX: translateXValue,
          },
        };
      }
    );
    setAnimationValues(variants);
  });

  return (
    <>
      <Section>
        <MotionFadeInWhenInView>
          <Column columnType="center">
            <Title className={styles.title} titleType="inlineh3">
              Latest Posts
            </Title>
          </Column>
        </MotionFadeInWhenInView>
      </Section>
      <Section className={styles.section} sectionType="fullWidth">
        {latestPosts.map((post, index) => (
          <MotionFadeInWhenInView
            key={post.path + index.toString()}
            elementType="column"
          >
            <MotionRow
              animate="animate"
              className={styles.row}
              variants={animationValues[index]}
            >
              <MotionLinkInline
                ref={
                  linkRefs.current[index] as Ref<HTMLAnchorElement> | undefined
                }
                className={styles.link}
                link={
                  lowercaseStringAsURL(post.topLevelPage) +
                  lowercaseStringAsURL(post.path)
                }
                text={post.title}
              />
              <MotionLinkInline
                className={styles.link}
                link={
                  lowercaseStringAsURL(post.topLevelPage) +
                  lowercaseStringAsURL(post.path)
                }
                text={post.title}
              />
              <MotionLinkInline
                className={styles.link}
                link={
                  lowercaseStringAsURL(post.topLevelPage) +
                  lowercaseStringAsURL(post.path)
                }
                text={post.title}
              />
              <MotionLinkInline
                className={styles.link}
                link={
                  lowercaseStringAsURL(post.topLevelPage) +
                  lowercaseStringAsURL(post.path)
                }
                text={post.title}
              />
              <MotionLinkInline
                className={styles.link}
                link={
                  lowercaseStringAsURL(post.topLevelPage) +
                  lowercaseStringAsURL(post.path)
                }
                text={post.title}
              />
            </MotionRow>
          </MotionFadeInWhenInView>
        ))}
      </Section>
    </>
  );
};

export default MotionLatestPostTicker;
