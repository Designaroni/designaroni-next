import Head from "next/head";

interface PageHead {
  pageDescription?: string;
  pageTitle?: string;
}

// eslint-disable-next-line @typescript-eslint/no-redeclare -- intentionally naming the variable the same as the type
const PageHead = ({ pageDescription, pageTitle }: PageHead) => {
  if (!pageDescription && !pageTitle) {
    return null;
  }
  if (pageDescription && !pageTitle) {
    return (
      <Head>
        <meta key="description" content={pageDescription} name="description" />
      </Head>
    );
  }
  if (!pageDescription && pageTitle) {
    <Head>
      <title key="title">{pageTitle}</title>
    </Head>;
  }

  return (
    <Head>
      <title key="title">{pageTitle}</title>
      <meta key="description" content={pageDescription} name="description" />
    </Head>
  );
};

export default PageHead;
