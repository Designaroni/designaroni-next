import Script from "next/script";

const GoogleAnalytics = () => {
  if (
    !process.env.NEXT_PUBLIC_G_TAG_MEASUREMENT_ID ||
    process.env.ENV === "development"
  ) {
    return null;
  }

  return (
    <>
      {/* Google tag (gtag.js) */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_G_TAG_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            
            gtag('config', '${process.env.NEXT_PUBLIC_G_TAG_MEASUREMENT_ID}');
            `}
      </Script>
    </>
  );
};

export default GoogleAnalytics;
