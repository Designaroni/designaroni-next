// export async function testFn() {
//   const data = await getRestaurantNames()
//   console.log(data)
//   console.log(data?.forEach((restaurant: any) => restaurant));

//   // return {
//   //   props: {
//   //     restaurantName: data?.map((restaurant: any) => restaurant.name)
//   //   },
//   // }
// }

// testFn()

/// /

// export async function testFn() {
//   const data = await getTopLevelPages()
//   console.log(data);
// }

// testFn()

/// /

// import { getTopLevelPageNames, getFooterData } from '@/lib/api';

// export const getStaticProps: GetStaticProps = async () => {
//   const topLevelPageNames = await getTopLevelPageNames()
//   const footerData = await getFooterData()
//   return {
//     props: {
//       topLevelPageNames: topLevelPageNames,
//       footerData: footerData,
//     },
//   }
// }

/**
 *
 * @param `string` **iso8601ExtendedFormat** expected to be a string in ISO 8601 Extended format ex: '2022-05-03T18:40:19.448Z'.
 *     If iso8601ExtendedFormat is null we don't have a publishedAt value coming from the graphql request
 *     then "my" will display `December 1969`
 *     and "mdy" will display `"December 31, 1969"`
 * @param `string` **mdy** OR **my**
 *
 * @returns string in `Month Year` format or `Month Date, Year`
 */
export const parseDate = (
  iso8601ExtendedFormat: string | null,
  returnType: "mdy" | "my"
): string => {
  if (iso8601ExtendedFormat === null && returnType === "mdy") {
    return new Date().toLocaleString([], {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  }
  if (iso8601ExtendedFormat === null) {
    return new Date().toLocaleString([], {
      month: "long",
      year: "numeric",
    });
  }
  if (returnType === "mdy") {
    return new Date(iso8601ExtendedFormat).toLocaleString([], {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  }

  return new Date(iso8601ExtendedFormat).toLocaleString([], {
    month: "long",
    year: "numeric",
  });
};

const fallbackImage = `https://api.designaroni.com/uploads/designaroni_fallback_image_497eb3437d.jpg?updated_at=2022-05-12T15:06:08.538Z`;
const fallbackFetchURL = `https://api.designaroni.com`;

export const fetchBaseURL = () =>
  process.env.NEXT_PUBLIC_STRAPI_API_URL
    ? process.env.NEXT_PUBLIC_STRAPI_API_URL
    : fallbackFetchURL;

export const imageURL = (path: string) =>
  process.env.NEXT_PUBLIC_STRAPI_API_URL
    ? process.env.NEXT_PUBLIC_STRAPI_API_URL + path
    : fallbackImage;

export const lowercaseStringAsURL = (string: string) =>
  `/${string.replace(/[\W_]+/g, "-").toLowerCase()}`;

export const lowercaseString = (string: string) => `${string.toLowerCase()}`;

export const capitalize = ([first, ...rest]: string) =>
  first.toUpperCase() + rest.join("");

export const capitalizeFullName = ([first, ...rest]: string) =>
  first.toUpperCase() +
  rest
    .join("")
    .replace(/[\W_]+[a-zA-Z]/g, (match) => match.toUpperCase())
    .replace(/[\W_]/g, " ");

export const toNumber = (string: string) =>
  Number(string.replace(/[^0-9]+/g, ""));

export const getPageType = (
  asPath: string,
  pathName: string,
  topLevelPageNames: string[] // same as TopLevelPageNames interface but this illiminates circular dependency while interface is defined in ./api
): string | undefined => {
  if (pathName === "/") {
    return "homePage";
  }
  if (
    pathName === "/[topLevelPage]" ||
    topLevelPageNames.includes(capitalize(asPath.replace("/", "")))
  ) {
    return "topLevelPage";
  }
  if (pathName.includes("[post]")) {
    return "postPage";
  }
  if (pathName.includes("posts")) {
    return "postsListPage";
  }

  return undefined;
};

// javascript color conversions
// adapted from hexToRGB
export const hexToRGBNumbers = (h: string) => {
  let r: string | number = "0";
  let g: string | number = "0";
  let b: string | number = "0";

  // 3 digits
  if (h.length === 4) {
    r = `0x${h[1]}${h[1]}`;
    g = `0x${h[2]}${h[2]}`;
    b = `0x${h[3]}${h[3]}`;

    // 6 digits
  } else if (h.length === 7) {
    r = `0x${h[1]}${h[2]}`;
    g = `0x${h[3]}${h[4]}`;
    b = `0x${h[5]}${h[6]}`;
  }

  r = Number(r);
  g = Number(g);
  b = Number(b);

  // eslint-disable-next-line sort-keys -- intentionally setting order to r g b
  return { r, g, b };
};
// rgba data url
// https://github.com/vercel/next.js/blob/canary/examples/image-component/pages/color.js
// Pixel GIF code adapted from https://stackoverflow.com/a/33919020/266535
const keyStr =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

const triplet = (e1: number, e2: number, e3: number) =>
  /* eslint-disable no-bitwise */
  keyStr.charAt(e1 >> 2) +
  keyStr.charAt((e1 & 3) << 4 || e2 >> 4) +
  keyStr.charAt((e2 & 15) << 2 || e3 >> 6) +
  keyStr.charAt(e3 & 63);

// eslint-disable-next-line @typescript-eslint/member-ordering -- intentionally setting order to r g b
export const rgbDataURL = (numbers: { r: number; g: number; b: number }) =>
  `data:image/gif;base64,R0lGODlhAQABAPAA${
    triplet(0, numbers.r, numbers.g) + triplet(numbers.b, 255, 255)
  }/yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==`;
