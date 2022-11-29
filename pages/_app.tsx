/* eslint-disable @typescript-eslint/restrict-template-expressions */
import Script from "next/script";
import { FooterData, TopLevelPageNames } from "@/lib/api";
import { getPageType } from "@/lib/helper-methods";
import { useEffect, useState } from "react";
import { NextComponentType, NextPageContext } from "next";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import FontFaceObserver from "fontfaceobserver";
import Layout from "@/components/layout";
import { LoadingScreen } from "@/components/loading";
import "@/styles/globals.scss";
import { env } from "process";

export interface CustomAppProps extends AppProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Component: NextComponentType<NextPageContext, any, any>;
  pageProps: { footerData: FooterData; topLevelPageNames: TopLevelPageNames };
}

const GlobalGoogleAnalytics = () => {
  console.log("env.G_TAG_MEASUREMENT_ID", env.G_TAG_MEASUREMENT_ID);
  console.log("env.NODE_ENV", env.NODE_ENV);
  console.log(
    "process.env.G_TAG_MEASUREMENT_ID",
    process.env.G_TAG_MEASUREMENT_ID
  );
  console.log("process.env.NODE_ENV", process.env.NODE_ENV);

  if (!env.G_TAG_MEASUREMENT_ID || env.NODE_ENV === "development") {
    return null;
  }

  return (
    <>
      {/* Google tag (gtag.js) */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${env.G_TAG_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          
          gtag('config', '${env.G_TAG_MEASUREMENT_ID}');
          `}
      </Script>
    </>
  );
};

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
        <GlobalGoogleAnalytics />
        <LoadingScreen
        // loadingMessage={[
        //   "Route planning...",
        //   "Foraging mushrooms...",
        //   "Scrambling data...",
        // ]}
        // loadingMessage="Waiting for snow to fall..."
        />
      </>
    );

  if (!topLevelPageNames)
    return (
      <>
        <GlobalGoogleAnalytics />
        <LoadingScreen loadingMessage="Looks like we're still hibernating, check back later" />
      </>
    );

  return (
    <>
      <GlobalGoogleAnalytics />
      <Layout
        footerData={footerData}
        pageType={pageType}
        topLevelPageNames={topLevelPageNames}
      >
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default MyApp;
