import { FooterData, TopLevelPageNames } from "@/lib/api";
import { getPageType } from "@/lib/helper-methods";
import { useEffect, useState } from "react";
import { NextComponentType, NextPageContext } from "next";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import FontFaceObserver from "fontfaceobserver";
import Layout from "@/components/layout";
import { LoadingScreen } from "@/components/loading";
import GoogleAnalytics from "@/components/seo/analytics/googleanalytics";
import { Analytics } from "@vercel/analytics/react";
import "@/styles/globals.scss";

export interface CustomAppProps extends AppProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Component: NextComponentType<NextPageContext, any, any>;
  pageProps: { footerData: FooterData; topLevelPageNames: TopLevelPageNames };
}

const MyApp = ({ Component, pageProps }: CustomAppProps) => {
  const router = useRouter();
  const { pathname, asPath } = router;
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [routeLoaded, setRouteLoaded] = useState(true);
  const { footerData, topLevelPageNames } = pageProps;

  const pageType = getPageType(asPath, pathname, topLevelPageNames);

  // fontLoaded
  useEffect(() => {
    const font = new FontFaceObserver("TTnorms", {
      weight: 400,
    });

    function checkFonts() {
      font.load().then(
        () => setFontsLoaded(true),
        () => setFontsLoaded(false)
      );
    }
    checkFonts();
  });

  // routeLoaded
  useEffect(() => {
    const handleStart = () => {
      setRouteLoaded(false);
    };
    const handleStop = () => {
      setRouteLoaded(true);
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleStop);
    router.events.on("routeChangeError", handleStop);

    // callback
    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleStop);
      router.events.off("routeChangeError", handleStop);
    };
  }, [router]);

  if (!fontsLoaded || !routeLoaded)
    return (
      <>
        <GoogleAnalytics />
        <LoadingScreen
        // loadingMessage={[
        //   "Route planning...",
        //   "Foraging mushrooms...",
        //   "Scrambling data...",
        // ]}
        // loadingMessage="Waiting for snow to fall..."
        />
        <Analytics />
      </>
    );

  if (!topLevelPageNames)
    return (
      <>
        <GoogleAnalytics />
        <LoadingScreen loadingMessage="Looks like we're still hibernating, check back later" />
        <Analytics />
      </>
    );

  return (
    <>
      <GoogleAnalytics />
      <Layout
        footerData={footerData}
        pageType={pageType}
        topLevelPageNames={topLevelPageNames}
      >
        <Component {...pageProps} />
        <Analytics />
      </Layout>
    </>
  );
};

export default MyApp;
