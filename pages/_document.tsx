import { Html, Head, Main, NextScript } from "next/document";

const Document = () => (
  <Html>
    <Head>
      {/* favicons */}
      {/* <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🏕️</text></svg>"></link> */}
      <link
        key="apple-touch-icon"
        href="/favicon/apple-touch-icon.png"
        rel="apple-touch-icon"
        sizes="180x180"
      />
      <link
        key="favicon32"
        href="/favicon/favicon-32x32.png"
        rel="icon"
        sizes="32x32"
        type="image/png"
      />
      <link
        key="favicon16"
        href="/favicon/favicon-16x16.png"
        rel="icon"
        sizes="16x16"
        type="image/png"
      />
      <link key="manifest" href="/favicon/site.webmanifest" rel="manifest" />
      <link
        key="mask-icon"
        color="#30273a"
        href="/favicon/safari-pinned-tab.svg"
        rel="mask-icon"
      />
      <meta
        key="msapplication-TileColor"
        content="#111111"
        name="msapplication-TileColor"
      />
      <meta key="theme-color" content="#ffffff" name="theme-color" />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;
