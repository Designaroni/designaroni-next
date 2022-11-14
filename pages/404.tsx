import type { NextPage, GetStaticProps } from "next";
import { useRouter } from "next/router";
import MotionLinkInline from "@/components/general/motionLinkInline";
import {
  getTopLevelPageNames,
  getFooterData,
  FooterData,
  TopLevelPageNames,
} from "@/lib/api";
import styles from "@/styles/pages/error.module.scss";

interface PageProps {
  footerData: FooterData;
  topLevelPageNames: TopLevelPageNames;
}

const Error404PageDoesNotExist = () => {
  const message = `Nice job, you've found a page that doesn't even exist…`;

  return (
    <div className={styles.message}>
      <span>
        {message}
        <br />
        <MotionLinkInline link="/" text="take me back home" />
      </span>
    </div>
  );
};

const Error404 = () => {
  const message = `This page is still a work in progress –`;

  return (
    <div className={styles.message}>
      <span>
        {message}
        <br />
        <MotionLinkInline link="/" text="take me back home" />
      </span>
    </div>
  );
};

const ErrorPage: NextPage<PageProps> = ({ topLevelPageNames }) => {
  const { asPath } = useRouter();

  const pageExists: string[] = topLevelPageNames.filter(
    (item: string) => item.toLowerCase() === asPath.substring(1)
  );

  return pageExists.length > 0 ? <Error404 /> : <Error404PageDoesNotExist />;
};

export const getStaticProps: GetStaticProps = async () => {
  const topLevelPageNames: TopLevelPageNames = await getTopLevelPageNames();
  const footerData: FooterData = await getFooterData();

  return {
    props: {
      footerData,
      topLevelPageNames,
    },
  };
};

export default ErrorPage;
