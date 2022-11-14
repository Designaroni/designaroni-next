import type { NextPage, GetStaticProps } from "next";
import {
  getTopLevelPageNames,
  getTopLevelPageMetaData,
  getFooterData,
  FooterData,
  PageMetaData,
  TopLevelPageNames,
} from "@/lib/api";
import PageHead from "@/components/general/pageHead";
import styles from "@/styles/pages/work.module.scss";

interface PageProps {
  footerData: FooterData;
  pageMetaData: PageMetaData;
  topLevelPageNames: TopLevelPageNames;
}

const Work: NextPage<PageProps> = (pageProps) => {
  const {
    pageMetaData: { title: pageTitle, description: pageDescription },
  } = pageProps;
  const lifetimeGithubContributions = 3773;
  const stackOverflowPoints = 111;

  return (
    <>
      <PageHead pageDescription={pageDescription} pageTitle={pageTitle} />
      <div className={styles.message}>
        <span>Work</span>
      </div>
      <div>
        <span>{stackOverflowPoints}</span>
        <span>StackOverflow points</span>
      </div>
      <div>
        <span>{lifetimeGithubContributions}+</span>
        <span>Github contributions</span>
      </div>
      <div>
        &nbsp;&nbsp;&nbsp;&nbsp;Originally trained as a Graphic Designer,
        graduating from Minnesota State University in 2011, I{`'`}ve pursued a
        career in Front End Development ever since. I{`'`}ve spent time
        professionally both as a designer, developer and team front-end lead
        managing & training junior developers. My career trajectory has taken me
        from freelancing to creating websites for businesses in the EMS space,
        working a UI/UX role for a a multinational entertainment products
        retailer, building up an in-house creative team at a youth sports start
        up along with starting an Email Design & Development Agency – to present
        day – building out interactive experiences on a connected fitness
        platfrom enhancing lives of millions of users everyday.
        <br />
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;I work remotely as a Senior Front End Developer
        for @ifit. Every day we build components & features upon a global design
        system implemented in React & React Native ecosystem
        <span>I build components, component libraries & design systems</span>
        <span>I break down designs into development work</span>
        <span>
          I write performant code, optimized for the web and native apps
        </span>
        <span>
          I work with single page react & react native apps embedded in native
          applications
        </span>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const topLevelPageNames: TopLevelPageNames = await getTopLevelPageNames();
  const pageMetaData: PageMetaData = await getTopLevelPageMetaData("Work");
  const footerData: FooterData = await getFooterData();

  return {
    props: {
      footerData,
      pageMetaData,
      topLevelPageNames,
    },
  };
};

export default Work;
