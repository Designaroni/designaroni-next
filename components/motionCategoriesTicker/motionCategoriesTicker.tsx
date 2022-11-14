import { useEffect, useRef, useState } from "react";
import styles from "@/styles/components/motionCategoriesTicker/motionCategoriesTicker.module.scss";
import { AllCategoriesAndPaths } from "@/lib/api";
import Section from "@/components/section/section";
import { lowercaseStringAsURL } from "@/lib/helper-methods";
// import LinkUnderline from "@/components/general/linkUnderline";
import MotionRow from "@/components/row/motionRow";
import MotionLinkUnderline from "@/components/general/motionLinkUnderline";
import MotionFadeInWhenInView from "@/components/motionFadeInWhenInView/motionFadeInWhenInView";
import Title from "@/components/title/title";
import Column from "@/components/column/column";

interface MotionCategoriesTicker {
  categories: AllCategoriesAndPaths[];
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
const MotionCategoriesTicker = ({ categories }: MotionCategoriesTicker) => {
  const ref = useRef<HTMLSpanElement>(null);
  const [animationValues, setAnimationValues] = useState<AnimationValues>();

  useEffect(() => {
    const element = ref.current as HTMLSpanElement;
    const elementWidth = element?.getBoundingClientRect().width;
    const variant: AnimationValues = {
      animate: {
        transition: {
          delay: 0,
          duration: 45,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        },
        translateX: -elementWidth,
      },
    };
    setAnimationValues(variant);
  }, []);

  return (
    <>
      <Section>
        <MotionFadeInWhenInView>
          <Column columnType="center">
            <Title className={styles.title} titleType="inlineh3">
              Latest Categories
            </Title>
          </Column>
        </MotionFadeInWhenInView>
      </Section>
      <Section className={styles.section} sectionType="fullWidth">
        <MotionFadeInWhenInView>
          <MotionRow
            animate="animate"
            className={styles.row}
            variants={animationValues}
          >
            <span ref={ref}>
              {categories.map((category, index: number) => (
                <MotionLinkUnderline
                  key={category.category + index.toString()}
                  className={styles.link}
                  link={`/category${lowercaseStringAsURL(category.category)}`}
                  svgClassName={styles.svg}
                  text={category.category}
                />
              ))}
            </span>
            <span>
              {categories.map((category, index: number) => (
                <MotionLinkUnderline
                  key={category.category + index.toString()}
                  className={styles.link}
                  link={`/category${lowercaseStringAsURL(category.category)}`}
                  svgClassName={styles.svg}
                  text={category.category}
                />
              ))}
            </span>
          </MotionRow>
        </MotionFadeInWhenInView>
      </Section>
    </>
  );
};

export default MotionCategoriesTicker;
