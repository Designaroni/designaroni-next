import type { NextPage, GetStaticProps } from "next";
import MotionLinkInline from "@/components/general/motionLinkInline";
import {
  getTopLevelPageNames,
  getFooterData,
  FooterData,
  TopLevelPageNames,
} from "@/lib/api";
import styles from "@/styles/pages/error.module.scss";

const Error500 = () => {
  const message = `Whoops, we've encountered a 500 error`;

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

const ErrorPage: NextPage = () => <Error500 />;

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
