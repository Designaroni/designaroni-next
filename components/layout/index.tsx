import Head from "next/head";
import { FooterData, TopLevelPageNames } from "@/lib/api";
import Header from "@/components/header";
import Footer from "@/components/footer";
import MotionFadeInWhenInView from "@/components/motionFadeInWhenInView/motionFadeInWhenInView";
import styles from "@/styles/components/layout/layout.module.scss";

interface Layout {
  children?: React.ReactNode;
  footerData: FooterData;
  pageType?: string;
  topLevelPageNames: TopLevelPageNames;
}

// eslint-disable-next-line @typescript-eslint/no-redeclare -- intentionally naming the variable the same as the type
const Layout = ({
  topLevelPageNames,
  footerData,
  children,
  pageType,
}: Layout) => (
  <>
    <Head>
      <meta
        key="viewport"
        content="initial-scale=1.0, width=device-width"
        name="viewport"
      />
      <title key="title">My page title</title>
      <meta
        key="description"
        content="🏕️ Designaroni.com – Trips, Journal, Builds, About"
        name="description"
      />
    </Head>
    <MotionFadeInWhenInView>
      <Header topLevelPageNames={topLevelPageNames} />
    </MotionFadeInWhenInView>
    <main
      className={pageType ? `${styles.main} ${styles[pageType]}` : styles.main}
    >
      {children}
    </main>
    <MotionFadeInWhenInView>
      <Footer footerData={footerData} topLevelPageNames={topLevelPageNames} />
    </MotionFadeInWhenInView>
  </>
);

export default Layout;
