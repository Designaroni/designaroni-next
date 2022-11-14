import MotionFadeInWhenInView from "@/components/motionFadeInWhenInView/motionFadeInWhenInView";
import Section from "@/components/section/section";
import Title from "@/components/title/title";

interface PageTitle {
  pageTitle: string;
}

// eslint-disable-next-line @typescript-eslint/no-redeclare -- intentionally naming the variable the same as the type
const PageTitle = ({ pageTitle }: PageTitle) => (
  <Section sectionType="pageTitle">
    <MotionFadeInWhenInView>
      <Title titleType="h1">{pageTitle}</Title>
      <hr />
    </MotionFadeInWhenInView>
  </Section>
);

export default PageTitle;
