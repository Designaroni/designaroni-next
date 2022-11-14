import { useRouter } from "next/router";
import { ReactNode } from "react";
import { capitalize, lowercaseStringAsURL } from "@/lib/helper-methods";
import Section from "@/components/section/section";
import MotionLinkInline from "@/components/general/motionLinkInline";
import MotionFadeInWhenInView from "@/components/motionFadeInWhenInView/motionFadeInWhenInView";
import styles from "@/styles/components/pageContentFooter/pageContentFooter.module.scss";

interface PageContentFooter {
  className?: string;
  parentPage?: string;
}

interface PageContentFooterWrapper {
  children: ReactNode;
  className?: string;
}

interface WithParentPage {
  parentPage: string;
}

// eslint-disable-next-line @typescript-eslint/no-redeclare -- intentionally naming the variable the same as the type
const PageContentFooterWrapper = ({
  children,
  className,
}: PageContentFooterWrapper) => (
  <Section className={className} sectionType="center">
    <MotionFadeInWhenInView className={styles.pageContentFooter}>
      {children}
    </MotionFadeInWhenInView>
  </Section>
);

// eslint-disable-next-line @typescript-eslint/no-redeclare -- intentionally naming the variable the same as the type
const TopLevelPageContentFooter = ({ parentPage }: WithParentPage) => (
  <span>
    <MotionLinkInline
      link={lowercaseStringAsURL(parentPage) + lowercaseStringAsURL("posts")}
      text={`See all posts in ${capitalize(parentPage)}`}
    />
  </span>
);

// eslint-disable-next-line @typescript-eslint/no-redeclare -- intentionally naming the variable the same as the type
const PostPageContentFooter = ({ parentPage }: WithParentPage) => (
  <>
    <span>
      <MotionLinkInline
        link={lowercaseStringAsURL(parentPage) + lowercaseStringAsURL("posts")}
        text={`See all posts in ${parentPage}`}
      />
    </span>
    <span>
      <MotionLinkInline
        link={lowercaseStringAsURL(parentPage)}
        text={`Return to ${parentPage}`}
      />
    </span>
  </>
);

// eslint-disable-next-line @typescript-eslint/no-redeclare -- intentionally naming the variable the same as the type
const PostsPageContentFooter = ({ parentPage }: WithParentPage) => (
  <span>
    <MotionLinkInline
      link={lowercaseStringAsURL(parentPage)}
      text={`Return to ${capitalize(parentPage)}`}
    />
  </span>
);

// eslint-disable-next-line @typescript-eslint/no-redeclare -- intentionally naming the variable the same as the type
const CategoryPageContentFooter = () => (
  <span>
    <MotionLinkInline
      link={
        lowercaseStringAsURL("author") +
        lowercaseStringAsURL("ian-roberts") +
        lowercaseStringAsURL("posts")
      }
      text="See all posts"
    />
  </span>
);

// eslint-disable-next-line @typescript-eslint/no-redeclare -- intentionally naming the variable the same as the type
const AboutPageContentFooter = () => (
  <>
    <span>
      <MotionLinkInline link="/" text="Return Home" />
    </span>
    <span>
      <MotionLinkInline
        link={
          lowercaseStringAsURL("author") +
          lowercaseStringAsURL("ian-roberts") +
          lowercaseStringAsURL("posts")
        }
        text="See all posts"
      />
    </span>
  </>
);

// eslint-disable-next-line @typescript-eslint/no-redeclare -- intentionally naming the variable the same as the type
const PageContentFooter = ({ className, parentPage }: PageContentFooter) => {
  const { pathname } = useRouter();

  if (pathname === "/[topLevelPage]" && parentPage) {
    return (
      <PageContentFooterWrapper className={className}>
        <TopLevelPageContentFooter parentPage={parentPage} />
      </PageContentFooterWrapper>
    );
  }

  if (pathname.includes("/posts") && parentPage) {
    return (
      <PageContentFooterWrapper className={className}>
        <PostsPageContentFooter parentPage={parentPage} />
      </PageContentFooterWrapper>
    );
  }

  if (pathname.includes("[post]") && parentPage) {
    return (
      <PageContentFooterWrapper className={className}>
        <PostPageContentFooter parentPage={parentPage} />
      </PageContentFooterWrapper>
    );
  }

  if (pathname.includes("[category]")) {
    return (
      <PageContentFooterWrapper className={className}>
        <CategoryPageContentFooter />
      </PageContentFooterWrapper>
    );
  }

  if (pathname.includes("/about")) {
    return (
      <PageContentFooterWrapper className={className}>
        <AboutPageContentFooter />
      </PageContentFooterWrapper>
    );
  }

  return null;
};

export default PageContentFooter;
