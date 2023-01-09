/**
 * API requests & interfaces
 * @todos fix up interface definitions
 * @todos replace typescript any's with interfaces
 * @todos remove graphQL requests that aren't needed, ex: requests filtered by but not displayed content
 */

// import util from "util";
// console.log(util.inspect(myObject, false, null, true /* enable colors */))
import { fetchBaseURL, parseDate } from "./helper-methods";
import fallbackAPI from "./fallbackAPI";

/**
 * Exported Interfaces
 */

/**
 * Imported into page to map over getIdFromPostPathsByTLP
 */
export interface IdFromPostPathsByTLP {
  id: string;
  path: string;
  title: string;
}

/**
 * Imported into page to define results from method getIdFromPostPathsByTLP
 */
export interface GetIdFromPostPathsByTLP {
  id: string;
  path: string;
  title: string;
}

/**
 * Imported into post page to define pageMetaData inside getStaticProps
 */
export interface PageMetaData {
  description: string;
  title: string;
}

/**
 * Imported into pages & components to define footer data
 */
export interface FooterData {
  daysRemaining: string;
  fiveStrengths: string;
  tagline: string;
}

// /**
//  * Imported into pages & components to define top level page data
//  */

export type DynamicTopLevelPageNames = string[];

export type TopLevelPageNames = string[];

export interface TopLevelPageData {
  heroImage: {
    alternativeText: string;
    height: number;
    url: string;
    width: number;
  };
  name: string;
  shortDescription: string;
}

export interface HomePageData {
  heroMedia: {
    alternativeText: string;
    height: number;
    url: string;
    width: number;
  };
  pageTitle: string;
  shortDescription: string;
  socialMediaLinks: {
    Github?: string;
    Instagram?: string;
    LinkedIn?: string;
    TikTok?: string;
    Youtube?: string;
  };
}

export interface PageDataByTLP {
  heroImage: {
    alternativeText: string;
    height: number;
    url: string;
    width: number;
  };
  name: string;
  shortDescription: string;
}

export type AllCategoriesAndPaths = {
  category: string;
  path: string;
};

export type LatestPostsAndTLP = {
  path: string;
  title: string;
  topLevelPage: string;
};

export type AllPostPathsAndTLP = {
  path: string;
  topLevelPage: string;
};

export type AllPostPathsAndAuthor = {
  author: string;
  path: string;
};

/**
 * Local Interfaces
 */

type PostPathsByTLPData = string[];

type AllCategoryPaths = string[];

// interface GetIdFromPostPathsByTLPData {
//   id: string;
//   attributes: {
//     title: string;
//   };
// }

// interface GetAllPostsByTLPData {
//   id: string;
//   attributes: {
//     title: string;
//   };
// }

// interface GetPostContentByIdData {
//   id: string;
//   attributes: {
//     title: string;
//     bodyCopy: string;
//   };
// }

export interface PostContentById {
  author: {
    bio: string;
    name: string;
    profileImage: {
      alternativeText: string;
      height: number;
      url: string;
      width: number;
    };
  };
  bodyCopy: string;
  categories: string[];
  coverImage: {
    alternativeText: string;
    height: number;
    url: string;
    width: number;
  };
  id: string;
  pageMetaData: PageMetaData;
  subtitle: string;
  title: string;
  topLevelPage: {
    name: string;
  };
}

export interface CardType {
  author?: {
    name: string;
    profileImage: {
      alternativeText: string;
      height: number;
      url: string;
      width: number;
    };
  };
  categories?: string[];
  coverImage: {
    alternativeText: string;
    height: number;
    url: string;
    width: number;
  };
  id?: string;
  path: string;
  publishedAt: string;
  publishedAtFormatted: string;
  subtitle: string;
  title: string;
  topLevelPage: {
    name: string;
  };
}

export type AllPostsByTLP = CardType[];

export type AllPostsByAuthor = CardType[];

export type AllPostsByCategory = CardType[];

export type FeaturedPostsByTLP = CardType[];

export type LatestPostsByTLP = CardType[];

// interface AttributesName {
//   attributes: {
//     name: string;
//   };
// }

// interface AttributesCategory {
//   attributes: {
//     category: string;
//   };
// }

// interface TLPPageMetaData {
//   attributes: {
//     name: string;
//     pageMetaData: {
//       title: string;
//       description: string;
//     };
//   };
// }

interface FetchAPI {
  query: string;
  variables: {
    [key: string]: string;
  };
}

/**
 * Interface for graphQl fetch requests
 * use console.log(util.inspect(json, false, null, true));
 * to check data against interface after updating or adding fetch requests
 */
interface FetchJSON {
  data?: {
    categories?: {
      data: Array<{
        attributes: {
          category: string;
        };
      }>;
    };
    footers?: {
      data: Array<{
        attributes: {
          daysRemaining: string;
          fiveStrengths: string;
          tagline: string;
        };
      }>;
    };
    home?: {
      data: {
        attributes: {
          heroMedia: {
            data: Array<{
              attributes: {
                alternativeText: string;
                formats: {
                  medium: {
                    ext: string;
                    hash: string;
                    height: number;
                    mime: string;
                    name: string;
                    path: string | null;
                    size: number;
                    url: string;
                    width: number;
                  };
                  small: {
                    ext: string;
                    hash: string;
                    height: number;
                    mime: string;
                    name: string;
                    path: string | null;
                    size: number;
                    url: string;
                    width: number;
                  };
                  thumbnail: {
                    ext: string;
                    hash: string;
                    height: number;
                    mime: string;
                    name: string;
                    path: string | null;
                    size: number;
                    url: string;
                    width: number;
                  };
                };
                height: number;
                url: string;
                width: number;
              };
            }>;
          };
          pageTitle: string;
          shortDescription: string;
          socialMediaLinks: {
            Github: string;
            Instagram: string;
            LinkedIn: string;
            TikTok: string;
            Youtube: string;
          };
        };
      };
    };
    posts?: {
      data: Array<{
        attributes: {
          author?: {
            data: {
              attributes: {
                bio: string;
                name: string;
                profileImage: {
                  data: {
                    attributes: {
                      alternativeText: string;
                      formats: {
                        medium: {
                          ext: string;
                          hash: string;
                          height: number;
                          mime: string;
                          name: string;
                          path: string | null;
                          size: number;
                          url: string;
                          width: number;
                        };
                        small: {
                          ext: string;
                          hash: string;
                          height: number;
                          mime: string;
                          name: string;
                          path: string | null;
                          size: number;
                          url: string;
                          width: number;
                        };
                        thumbnail: {
                          ext: string;
                          hash: string;
                          height: number;
                          mime: string;
                          name: string;
                          path: string | null;
                          size: number;
                          url: string;
                          width: number;
                        };
                      };
                    };
                  };
                };
              };
            };
          };
          bodyCopy?: string;
          categories?: {
            data: Array<{
              attributes: {
                category: string;
              };
            }>;
          };
          coverImage?: {
            data: Array<{
              attributes: {
                alternativeText: string;
                formats: {
                  medium: {
                    ext: string;
                    hash: string;
                    height: number;
                    mime: string;
                    name: string;
                    path: string | null;
                    size: number;
                    url: string;
                    width: number;
                  };
                  small: {
                    ext: string;
                    hash: string;
                    height: number;
                    mime: string;
                    name: string;
                    path: string | null;
                    size: number;
                    url: string;
                    width: number;
                  };
                  thumbnail: {
                    ext: string;
                    hash: string;
                    height: number;
                    mime: string;
                    name: string;
                    path: string | null;
                    size: number;
                    url: string;
                    width: number;
                  };
                };
                height: number;
                url: string;
                width: number;
              };
            }>;
          };
          pageMetaData?: {
            description: string;
            title: string;
          };
          publishedAt?: string;
          subtitle?: string;
          title?: string;
          top_level_page?: {
            data: {
              attributes: {
                name: string;
              };
            };
          };
        };
        id?: string;
      }>;
    };
    topLevelPages?: {
      data: Array<{
        attributes: {
          heroImage: {
            data: {
              attributes: {
                alternativeText: string;
                formats: {
                  medium: {
                    ext: string;
                    hash: string;
                    height: number;
                    mime: string;
                    name: string;
                    path: string | null;
                    size: number;
                    url: string;
                    width: number;
                  };
                  small: {
                    ext: string;
                    hash: string;
                    height: number;
                    mime: string;
                    name: string;
                    path: string | null;
                    size: number;
                    url: string;
                    width: number;
                  };
                  thumbnail: {
                    ext: string;
                    hash: string;
                    height: number;
                    mime: string;
                    name: string;
                    path: string | null;
                    size: number;
                    url: string;
                    width: number;
                  };
                };
                height: number;
                url: string;
                width: number;
              };
            };
          };
          name: string;
          pageMetaData: PageMetaData;
          shortDescription: string;
        };
      }>;
    };
  };
  errors?: Array<{
    message: string;
  }>;
}

// fallbacks
const fallbackAllPostsPathsAndTLP: AllPostPathsAndTLP[] =
  fallbackAPI.data.allPostPathsAndTLP;
const fallbackAllPostPathsAndAuthor: AllPostPathsAndAuthor[] =
  fallbackAPI.data.allPostPathsAndAuthor;
const fallbackAllPostsByAuthor: AllPostsByAuthor =
  fallbackAPI.data.allPostsByAuthor;
const fallbackAllPostsByCategory: AllPostsByCategory =
  fallbackAPI.data.allPostsByCategory;
const fallbackAllPostsByTLP: AllPostsByTLP = fallbackAPI.data.allPostsByTLP;
const fallbackFeaturedPostsByTLP: FeaturedPostsByTLP =
  fallbackAPI.data.featuredPostsByTLP;
const fallbackLatestPostsByTLP: LatestPostsByTLP =
  fallbackAPI.data.latestPostsByTLP;
const fallbackPageMetaData = fallbackAPI.data.pageMetaData;

const fallbackHomePageData: HomePageData = fallbackAPI.data.homePageData;
const fallbackLatestCategoriesAndPaths: AllCategoriesAndPaths[] =
  fallbackAPI.data.latestCategoriesAndPaths;
const fallbackLatestPostsAndTLP: LatestPostsAndTLP[] =
  fallbackAPI.data.latestPostsAndTLP;
const fallbackTopLevelPageNames: TopLevelPageNames =
  fallbackAPI.data.topLevelPageNames;
const fallbackTopLevelPageData: TopLevelPageData[] =
  fallbackAPI.data.topLevelPageData;
const fallbackFooterData: FooterData =
  fallbackAPI.data.footers.data[0].attributes;
const fallbackPostPathsByTLPData: PostPathsByTLPData =
  fallbackAPI.data.postPathsByTLP;
const fallbackIdFromPostPathsByTLP: IdFromPostPathsByTLP[] =
  fallbackAPI.data.idFromPostPathsByTLP;
const fallbackPostContentById: PostContentById =
  fallbackAPI.data.postContentById;
const fallbackPageDataByTLP: PageDataByTLP = fallbackAPI.data.pageDataByTLP;

async function fetchAPI<T>(
  query: FetchAPI["query"],
  { variables }: FetchAPI["variables"] = {}
): Promise<T> {
  const res = await fetch(`${fetchBaseURL()}/graphql`, {
    body: JSON.stringify({
      query,
      variables,
    }),
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  });

  const json = (await res.json()) as FetchJSON;

  if (json.errors) {
    throw new Error("Failed to fetch API");
  }

  return json.data as Promise<T>;
}

/**
 * Get top level page names
 * @returns array of strings equal to top level page names
 */
export async function getTopLevelPageNames() {
  const data = await fetchAPI<FetchJSON["data"]>(
    `
    query TopLevelPages {
      topLevelPages {
        data {
          attributes {
            name
          }
        }
      }
    }
  `
  );

  const formattedData: TopLevelPageNames =
    data?.topLevelPages !== undefined
      ? data.topLevelPages.data.map((queryData) => queryData.attributes.name)
      : fallbackTopLevelPageNames; // fallback top level page names

  return formattedData;
}

/**
 * Get top level page names
 * @returns array of strings equal to top level page names
 */
export async function getDynamicTopLevelPageNames() {
  const dynamicPages = `["Trips", "Journal", "Builds"]`;
  const data = await fetchAPI<FetchJSON["data"]>(
    `
    query DynamicTopLevelPages {
      topLevelPages(filters: { name: { in: ${dynamicPages}} }) {
        data {
          attributes {
            name
          }
        }
      }
    }
  `
  );

  const formattedData: DynamicTopLevelPageNames =
    data?.topLevelPages !== undefined
      ? data.topLevelPages.data.map((queryData) => queryData.attributes.name)
      : fallbackTopLevelPageNames; // update this with fallback dynamic top level page names

  return formattedData;
}

/**
 * Get top level page meta data
 * @param pageName
 * @returns ...
 * @todos update this to use filter on query
 * @todos fill out returns
 */
export async function getTopLevelPageMetaData(pageName: string) {
  const data = await fetchAPI<FetchJSON["data"]>(
    `
    query PageMetaData {
      topLevelPages {
        data {
          attributes {
            name
            pageMetaData {
              title
              description
            }
          }
        }
      }
    }
  `
  );
  const filteredData =
    data?.topLevelPages?.data !== undefined
      ? data.topLevelPages.data.filter(
          (queryData) => pageName === queryData.attributes.name
        )
      : fallbackPageMetaData;
  const formattedData: PageMetaData = filteredData[0]?.attributes?.pageMetaData;

  return formattedData;
}

/**
 * Get top level page data
 * @returns top level page name, short description & hero image
 */
export async function getTopLevelPageData() {
  const data = await fetchAPI<FetchJSON["data"]>(
    `
    query TopLevelPages {
      topLevelPages(filters: { name: { notContains: "About" } }, sort: "id:asc") {
        data {
          attributes {
            heroImage {
              data {
                attributes {
                  alternativeText
                  formats
                }
              }
            }
            name
            shortDescription
          }
        }
      }
    }
  `
  );

  const rawData = data?.topLevelPages?.data;
  const formattedData = rawData
    ? rawData.map((queryData) => ({
        heroImage: {
          alternativeText:
            queryData?.attributes.heroImage.data.attributes.alternativeText,
          height:
            queryData?.attributes.heroImage.data.attributes.formats.medium
              .height,
          url: queryData?.attributes.heroImage.data.attributes.formats.medium
            .url,
          width:
            queryData?.attributes.heroImage.data.attributes.formats.medium
              .width,
        },
        name: queryData?.attributes.name,
        shortDescription: queryData?.attributes?.shortDescription,
      }))
    : fallbackTopLevelPageData;

  return formattedData;
}

/**
 * Get Footer Data
 * @returns data object for page footer
 */
export async function getFooterData() {
  const data = await fetchAPI<FetchJSON["data"]>(
    `
    query FooterData {
      footers {
        data {
          attributes {
            daysRemaining
            fiveStrengths
            tagline
          }
        }
      }
    }
  `
  );
  const formattedData: FooterData =
    data?.footers?.data[0]?.attributes !== undefined
      ? data.footers.data[0].attributes
      : fallbackFooterData;

  return formattedData;
}

/**
 * Methods to request posts by top level page, post data & post content, by category
 */

/**
 * Get all category paths
 * @used in getStaticPaths to create dynamic category paths
 * @param
 * @returns
 * @todos (pagination: { pageSize: 15 }) is based on total number of items published in strapi, programatically change this to request all in smaller chunks
 */
export async function getAllCategoryPaths() {
  const data = await fetchAPI<FetchJSON["data"]>(
    `
    query AllCategoryPaths {
      categories(pagination: { pageSize: 15 }) {
				data {
          attributes {
            category
          }
        }
      }
    }
  `
  );

  // console.log(util.inspect(data, false, null, true /* enable colors */));

  // update interface name
  const formattedData: AllCategoryPaths =
    data?.categories?.data[0].attributes.category !== undefined
      ? data.categories.data.map(
          (queryData) =>
            (queryData?.attributes?.category ?? "")
              .replace(/[\W_]+/g, "-")
              .toLowerCase() ?? ""
        )
      : fallbackPostPathsByTLPData;

  return formattedData;
}

/**
 * Get all categories and paths
 * @used in getStaticProps to filter path to return category
 * @param
 * @returns
 * @todos (pagination: { pageSize: 15 }) is based on total number of items published in strapi, programatically change this to request all in smaller chunks
 */
export async function getAllCategoriesAndPaths() {
  const data = await fetchAPI<FetchJSON["data"]>(
    `
    query AllCategoryPaths {
      categories(pagination: { pageSize: 15 }) {
				data {
          attributes {
            category
          }
        }
      }
    }
  `
  );

  // console.log(util.inspect(data, false, null, true /* enable colors */));

  // update interface name
  const formattedData: AllCategoriesAndPaths[] =
    data?.categories?.data[0].attributes.category !== undefined
      ? data.categories.data.map(
          (queryData) =>
            ({
              category: queryData?.attributes?.category,
              path: queryData.attributes.category
                .replace(/[\W_]+/g, "-")
                .toLowerCase(),
            } as AllCategoriesAndPaths)
        )
      : fallbackLatestCategoriesAndPaths;

  return formattedData;
}

/**
 * Get all categories and paths
 * @used in getStaticProps to filter path to return category
 * @param
 * @returns
 * @todos (pagination: { pageSize: 15 }) is based on total number of items published in strapi, programatically change this to request all in smaller chunks
 */
export async function getLatestCategoriesAndPaths() {
  const data = await fetchAPI<FetchJSON["data"]>(
    `
    query LatestCategoryPaths {
      categories(sort: "updatedAt:DESC", pagination: { pageSize: 6 }) {
				data {
          attributes {
            category
          }
        }
      }
    }
  `
  );

  // console.log(util.inspect(data, false, null, true /* enable colors */));

  // update interface name
  const formattedData: AllCategoriesAndPaths[] =
    data?.categories?.data[0].attributes.category !== undefined
      ? data.categories.data.map(
          (queryData) =>
            ({
              category: queryData?.attributes?.category,
              path: queryData.attributes.category
                .replace(/[\W_]+/g, "-")
                .toLowerCase(),
            } as AllCategoriesAndPaths)
        )
      : fallbackLatestCategoriesAndPaths;

  return formattedData;
}

/**
 * Get post paths by top level page name
 * @used in getStaticPaths to create dynamic post paths in relation to a top level page
 * @param topLevelPageName string like 'Trips', 'Builds', 'Work', 'Journal'
 * @returns
 * @todos remove this after dynamic categories is set up
 */
export async function getPostPathsByTLP(topLevelPageName: string) {
  const data = await fetchAPI<FetchJSON["data"]>(
    `
    query PostPathsByTLP {
      posts(filters: { top_level_page: {name : { contains: "${topLevelPageName}" } } } ) {
        data {
          attributes {
            title
            top_level_page {
              data {
                attributes {
                  name
                }
              }
            }
          }
        }
      }
    }
  `
  );

  // console.log(util.inspect(data, false, null, true /* enable colors */));

  const formattedData: PostPathsByTLPData =
    data?.posts?.data[0].attributes.title !== undefined
      ? data.posts.data.map(
          (queryData) =>
            (queryData?.attributes?.title as string)
              .replace(/[\W_]+/g, "-")
              .toLowerCase() ?? ""
        )
      : fallbackPostPathsByTLPData;

  return formattedData;
}

/**
 * Get post paths and top level page names
 * @used in getStaticPaths to create dynamic post paths in relation to a top level page
 * @param
 * @returns
 */
export async function getAllPostPathsAndTLP() {
  const data = await fetchAPI<FetchJSON["data"]>(
    `
    query PostPathsByTLP {
      posts {
        data {
          attributes {
            title
            top_level_page {
              data {
                attributes {
                  name
                }
              }
            }
          }
        }
      }
    }
  `
  );

  // console.log(util.inspect(data, false, null, true /* enable colors */));

  const formattedData: AllPostPathsAndTLP[] =
    data?.posts?.data[0].attributes.title !== undefined
      ? data.posts.data.map(
          (queryData) =>
            ({
              path: (queryData?.attributes?.title as string)
                .replace(/[\W_]+/g, "-")
                .toLowerCase(),
              topLevelPage:
                queryData?.attributes.top_level_page?.data.attributes.name.toLowerCase(),
            } as AllPostPathsAndTLP)
        )
      : fallbackAllPostsPathsAndTLP; // finish this... fallbackAllPostPathsAndTLP

  return formattedData;
}

/**
 * Get latest 6 post paths and top level page names
 * @used in getStaticPaths to create dynamic post paths in relation to a top level page
 * @param
 * @returns
 */
export async function getLatestPostsAndTLP() {
  const data = await fetchAPI<FetchJSON["data"]>(
    `
    query LatestPosts {
      posts(sort: "updatedAt:DESC", pagination: { pageSize: 6 }) {
        data {
          attributes {
            title
            top_level_page {
              data {
                attributes {
                  name
                }
              }
            }
          }
        }
      }
    }
  `
  );

  // console.log(util.inspect(data, false, null, true /* enable colors */));

  // maybe update interface name
  const formattedData: LatestPostsAndTLP[] =
    data?.posts?.data[0].attributes.title !== undefined
      ? data.posts.data.map(
          (queryData) =>
            ({
              path: (queryData?.attributes?.title as string)
                .replace(/[\W_]+/g, "-")
                .toLowerCase(),
              title: queryData?.attributes?.title,
              topLevelPage:
                queryData?.attributes.top_level_page?.data.attributes.name.toLowerCase(),
            } as LatestPostsAndTLP)
        )
      : fallbackLatestPostsAndTLP;

  return formattedData;
}

/**
 * Get post paths and author names
 * @used in getStaticPaths to create dynamic post paths in relation to an author
 * @param
 * @returns
 */
export async function getAllPostPathsAndAuthor() {
  const data = await fetchAPI<FetchJSON["data"]>(
    `
    query PostPathsByTLP {
      posts {
        data {
          attributes {
            title
            author {
              data {
                attributes {
                  name
                }
              }
            }
          }
        }
      }
    }
  `
  );

  // console.log(util.inspect(data, false, null, true /* enable colors */));

  const formattedData: AllPostPathsAndAuthor[] =
    data?.posts?.data[0].attributes.title !== undefined
      ? data.posts.data.map(
          (queryData) =>
            ({
              author: (
                queryData?.attributes.author?.data.attributes.name.toLowerCase() as string
              )
                .replace(/[\W_]+/g, "-")
                .toLowerCase(),
              path: (queryData?.attributes?.title as string)
                .replace(/[\W_]+/g, "-")
                .toLowerCase(),
            } as AllPostPathsAndAuthor)
        )
      : fallbackAllPostPathsAndAuthor;

  return formattedData;
}

/**
 * Get id from post paths by top level page name
 * @used within getStaticProps to get id associated with dynamic page name
 * @param topLevelPageName string like 'Trips', 'Builds', 'Work', 'Journal'
 * @returns array of objects containing post name & post id
 */
export async function getIdFromPostPathsByTLP(topLevelPageName: string) {
  const data = await fetchAPI<FetchJSON["data"]>(
    `
    query IdFromPostPathsByTLP {
      posts(filters: { top_level_page:{name : { contains: "${topLevelPageName}" }}} ) {
        data {
          id
          attributes {
            title
            top_level_page {
              data {
                attributes {
                  name
                }
              }
            }
          }
        }
      }
    }
  `
  );

  const formattedData: IdFromPostPathsByTLP[] =
    data?.posts?.data !== undefined
      ? data.posts.data.map(
          (queryData, index) =>
            ({
              id: queryData.id ?? fallbackIdFromPostPathsByTLP[index].id,
              path: (
                queryData.attributes.title ??
                fallbackIdFromPostPathsByTLP[index].path
              )
                .replace(/[\W_]+/g, "-")
                .toLowerCase(),
              title:
                queryData.attributes.title ??
                fallbackIdFromPostPathsByTLP[index].title,
            } as IdFromPostPathsByTLP)
        )
      : fallbackIdFromPostPathsByTLP;

  return formattedData;
}

/**
 * Get post content by id
 * @param id post id
 * @returns post content
 * @todos improve formattedData typescript support, flatten with Object methods instead of manually flattening
 */
export async function getPostContentById(id: string) {
  const data = await fetchAPI<FetchJSON["data"]>(
    `
    query PostContentById {
      posts(filters: { id: { eq: "${id}" } }) {
        data {
          id
          attributes {
            pageMetaData {
              title
              description
            }
            title
            subtitle
            coverImage {
              data {
                attributes {
                  alternativeText
                  height
                  url
                  width
                }
              }
            }
            bodyCopy
            categories {
              data {
                attributes {
                  category
                }
              }
            }
            author {
              data {
                attributes {
                  bio
                  name
                  profileImage {
                    data {
                      attributes {
                        alternativeText
                        formats
                      }
                    }
                  }
                }
              }
            }
            top_level_page {
              data {
                attributes {
                  name
                }
              }
            }
          }
        }
      }
    }    
  `
  );
  const rawData = data?.posts?.data[0];
  const formattedData: PostContentById = rawData
    ? ({
        author: {
          bio: rawData?.attributes.author?.data.attributes.bio,
          name: rawData?.attributes.author?.data.attributes.name,
          profileImage: {
            alternativeText:
              rawData?.attributes.author?.data.attributes.profileImage.data
                .attributes.alternativeText,
            height:
              rawData?.attributes.author?.data.attributes.profileImage.data
                .attributes.formats.small.height,
            url: rawData?.attributes.author?.data.attributes.profileImage.data
              .attributes.formats.small.url,
            width:
              rawData?.attributes.author?.data.attributes.profileImage.data
                .attributes.formats.small.width,
          },
        },
        bodyCopy: rawData?.attributes.bodyCopy,
        categories: rawData?.attributes.categories?.data.map(
          (queryData) => queryData.attributes.category
        ),
        coverImage: {
          alternativeText:
            rawData?.attributes.coverImage?.data[0].attributes.alternativeText,
          height: rawData?.attributes.coverImage?.data[0].attributes.height,
          url: rawData?.attributes.coverImage?.data[0].attributes.url,
          width: rawData?.attributes.coverImage?.data[0].attributes.width,
        },
        id: rawData?.id,
        pageMetaData: rawData?.attributes.pageMetaData,
        subtitle: rawData?.attributes.subtitle,
        title: rawData?.attributes.title,
        topLevelPage: rawData?.attributes.top_level_page?.data.attributes,
      } as PostContentById)
    : fallbackPostContentById;

  // console.log(
  //   util.inspect(formattedData, false, null, true /* enable colors */)
  // );

  return formattedData;
}

/**
 * Methods to retrieve data for pages rendering all posts
 * @todos replicate in separate method for pages rendering all categories
 */

/**
 * Get all posts by top level page
 * @used on tlp/posts pages like '/trips/posts' to retrieve all posts assigned to that content type
 * @param topLevelPageName
 * @returns
 * @todos finish posts page example & fix up function, interface...
 */
export async function getAllPostsByTLP(topLevelPageName: string) {
  const data = await fetchAPI<FetchJSON["data"]>(
    `
    query AllPostsByTLP {
      posts(filters: { top_level_page:{name : { contains: "${topLevelPageName}" } } }, sort: "updatedAt:DESC" ) {
        meta {
          pagination {
            page
            pageSize
            pageCount
            total
          }
        }
        data {
          id
          attributes {
            author {
              data {
                id
                attributes {
                  name
                  profileImage {
                    data {
                      attributes {
                        alternativeText
                        formats
                      }
                    }
                  }
                }
              }
            }
            categories {
              data {
                attributes {
                  category
                }
              }
            }
            title
            subtitle
            coverImage {
              data {
                attributes {
                  url
                  alternativeText
                  name
                  hash
                  caption
                  formats
                  createdAt
                  updatedAt
                  size
                  width
                  height
                  provider
                }
              }
            }
            publishedAt
            top_level_page {
              data {
                attributes {
                  name
                }
              }
            }
          }
        }
      }
    }
  `
  );
  const rawData = data?.posts?.data;
  // const rawMeta = data?.posts?.meta; // figure out pagination

  const formattedData: AllPostsByTLP = rawData
    ? rawData.map(
        (queryData) =>
          ({
            author: {
              name: queryData?.attributes.author?.data.attributes.name,
              profileImage: {
                alternativeText:
                  queryData?.attributes.author?.data.attributes.profileImage
                    .data.attributes.alternativeText,
                height:
                  queryData?.attributes.author?.data.attributes.profileImage
                    .data.attributes.formats.thumbnail.height,
                url: queryData?.attributes.author?.data.attributes.profileImage
                  .data.attributes.formats.thumbnail.url,
                width:
                  queryData?.attributes.author?.data.attributes.profileImage
                    .data.attributes.formats.thumbnail.width,
              },
            },
            categories: queryData?.attributes.categories?.data.map(
              (categories) => categories.attributes.category
            ),
            coverImage: {
              alternativeText:
                queryData?.attributes.coverImage?.data[0].attributes
                  .alternativeText,
              height:
                queryData?.attributes.coverImage?.data[0].attributes.formats
                  .small.height,
              url: queryData?.attributes.coverImage?.data[0].attributes.formats
                .small.url,
              width:
                queryData?.attributes.coverImage?.data[0].attributes.formats
                  .small.width,
            },
            id: queryData?.id,
            path: queryData?.attributes?.title
              ? queryData.attributes.title.replace(/[\W_]+/g, "-").toLowerCase()
              : "",
            publishedAt: queryData?.attributes.publishedAt,
            publishedAtFormatted: parseDate(
              queryData?.attributes.publishedAt ?? null,
              "my"
            ),
            subtitle: queryData?.attributes.subtitle,
            title: queryData?.attributes.title,
            topLevelPage: queryData?.attributes.top_level_page?.data.attributes,
          } as CardType)
      )
    : fallbackAllPostsByTLP;

  return formattedData;
}

/**
 * Get featured posts by top level page
 * @used on tlp pages like '/trips' to retrieve all posts assigned to that content type with isFeatured: true
 * @param topLevelPageName
 * @returns
 * @todos finish posts page example & fix up function, interface...
 */
export async function getFeaturedPostsByTLP(topLevelPageName: string) {
  const data = await fetchAPI<FetchJSON["data"]>(
    `
    query FeaturedPostsByTLP {
      posts(filters:{
        top_level_page:{name:{contains:"${topLevelPageName}"}},
        isFeatured: { eq: true },
      },
        sort: "publishedAt:DESC"
      ) {
        meta {
          pagination {
            page
            pageSize
            pageCount
            total
          }
        }
        data {
          id
          attributes {
            author {
              data {
                id
                attributes {
                  name
                  profileImage {
                    data {
                      attributes {
                        alternativeText
                        formats
                      }
                    }
                  }
                }
              }
            }
            categories {
              data {
                attributes {
                  category
                }
              }
            }
            isFeatured
            title
            subtitle
            coverImage {
              data {
                attributes {
                  url
                  alternativeText
                  name
                  hash
                  caption
                  formats
                  createdAt
                  updatedAt
                  size
                  width
                  height
                  provider
                }
              }
            }
            publishedAt
            top_level_page {
              data {
                attributes {
                  name
                }
              }
            }
          }
        }
      }
    }
  `
  );
  const rawData = data?.posts?.data;

  const formattedData: FeaturedPostsByTLP = rawData
    ? rawData.map(
        (queryData) =>
          ({
            author: {
              name: queryData?.attributes?.author?.data.attributes.name,
              profileImage: {
                alternativeText:
                  queryData?.attributes.author?.data.attributes.profileImage
                    .data.attributes.alternativeText,
                height:
                  queryData?.attributes.author?.data.attributes.profileImage
                    .data.attributes.formats.thumbnail.height,
                url: queryData?.attributes.author?.data.attributes.profileImage
                  .data.attributes.formats.thumbnail.url,
                width:
                  queryData?.attributes.author?.data.attributes.profileImage
                    .data.attributes.formats.thumbnail.width,
              },
            },
            categories: queryData?.attributes.categories?.data.map(
              (categories) => categories.attributes.category
            ),
            coverImage: {
              alternativeText:
                queryData?.attributes.coverImage?.data[0].attributes
                  .alternativeText,
              height:
                queryData?.attributes.coverImage?.data[0].attributes.formats
                  .small.height,
              url: queryData?.attributes.coverImage?.data[0].attributes.formats
                .small.url,
              width:
                queryData?.attributes.coverImage?.data[0].attributes.formats
                  .small.width,
            },
            id: queryData?.id,
            path: queryData?.attributes?.title
              ? queryData.attributes.title.replace(/[\W_]+/g, "-").toLowerCase()
              : "",
            publishedAt: queryData?.attributes.publishedAt,
            publishedAtFormatted: parseDate(
              queryData?.attributes.publishedAt ?? null,
              "my"
            ),
            subtitle: queryData?.attributes.subtitle,
            title: queryData?.attributes.title,
            topLevelPage: {
              name: queryData?.attributes.top_level_page?.data.attributes.name,
            },
          } as CardType)
      )
    : fallbackFeaturedPostsByTLP;

  return formattedData;
}

/**
 * Get latest posts by top level page that are not selected as featured posts
 * @used on tlp pages like '/trips' to retrieve all posts assigned to that content type with isFeatured: false
 * @param topLevelPageName
 * @returns
 * @todos finish posts page example & fix up function, interface... combine requests to posts graphql api
 */
export async function getLatestPostsByTLP(topLevelPageName: string) {
  const data = await fetchAPI<FetchJSON["data"]>(
    `
    query FeaturedPostsByTLP {
      posts(filters:{
        top_level_page:{name:{contains:"${topLevelPageName}"}},
        isFeatured: { eq: false },
      },
        sort: "publishedAt:DESC"
      ) {
        meta {
          pagination {
            page
            pageSize
            pageCount
            total
          }
        }
        data {
          id
          attributes {
            author {
              data {
                id
                attributes {
                  name
                  profileImage {
                    data {
                      attributes {
                        alternativeText
                        formats
                      }
                    }
                  }
                }
              }
            }
            categories {
              data {
                attributes {
                  category
                }
              }
            }
            isFeatured
            title
            subtitle
            coverImage {
              data {
                attributes {
                  url
                  alternativeText
                  name
                  hash
                  caption
                  formats
                  createdAt
                  updatedAt
                  size
                  width
                  height
                  provider
                }
              }
            }
            publishedAt
            top_level_page {
              data {
                attributes {
                  name
                }
              }
            }
          }
        }
      }
    }
  `
  );
  const rawData = data?.posts?.data;

  const formattedData: LatestPostsByTLP = rawData
    ? rawData.map(
        (queryData) =>
          ({
            author: {
              name: queryData?.attributes.author?.data?.attributes?.name,
              profileImage: {
                alternativeText:
                  queryData?.attributes.author?.data.attributes.profileImage
                    .data.attributes.alternativeText,
                height:
                  queryData?.attributes.author?.data.attributes.profileImage
                    .data.attributes.formats.thumbnail.height,
                url: queryData?.attributes.author?.data.attributes.profileImage
                  .data.attributes.formats.thumbnail.url,
                width:
                  queryData?.attributes.author?.data.attributes.profileImage
                    .data.attributes.formats.thumbnail.width,
              },
            },
            categories: queryData?.attributes.categories?.data.map(
              (categories) => categories.attributes.category
            ),
            coverImage: {
              alternativeText:
                queryData?.attributes.coverImage?.data[0].attributes
                  .alternativeText,
              height:
                queryData?.attributes.coverImage?.data[0].attributes.formats
                  .small.height,
              url: queryData?.attributes.coverImage?.data[0].attributes.formats
                .small.url,
              width:
                queryData?.attributes.coverImage?.data[0].attributes.formats
                  .small.width,
            },
            id: queryData?.id,
            path: queryData?.attributes?.title
              ? queryData.attributes.title.replace(/[\W_]+/g, "-").toLowerCase()
              : "",
            publishedAt: queryData?.attributes.publishedAt,
            publishedAtFormatted: parseDate(
              queryData?.attributes.publishedAt ?? null,
              "my"
            ),
            subtitle: queryData?.attributes.subtitle,
            title: queryData?.attributes.title,
            topLevelPage: queryData?.attributes.top_level_page?.data.attributes,
          } as CardType)
      )
    : fallbackLatestPostsByTLP;

  return formattedData;
}

/**
 * Get all posts by category
 * @used on category/posts pages like '/categories/category' to retrieve all posts assigned to that content type
 * @param category
 * @returns
 * @todos finish category page example & fix up function, interface... reference to top level page name may not be needed
 */
export async function getAllPostsByCategory(category: string) {
  const data = await fetchAPI<FetchJSON["data"]>(
    `
    query AllPostsByCategory {
      posts(filters: { categories:{category : { contains: "${category}" }}} ) {
        meta {
          pagination {
            page
            pageSize
            pageCount
            total
          }
        }
        data {
          id
          attributes {
            author {
              data {
                id
                attributes {
                  name
                  profileImage {
                    data {
                      attributes {
                        alternativeText
                        formats
                      }
                    }
                  }
                }
              }
            }
            categories {
              data {
                attributes {
                  category
                }
              }
            }
            title
            subtitle
            coverImage {
              data {
                attributes {
                  url
                  alternativeText
                  name
                  hash
                  caption
                  formats
                  createdAt
                  updatedAt
                  size
                  width
                  height
                  provider
                }
              }
            }
            publishedAt
            top_level_page {
              data {
                attributes {
                  name
                }
              }
            }
          }
        }
      }
    }
  `
  );
  const rawData = data?.posts?.data;
  // const rawMeta = data?.posts?.meta; // figure out pagination

  const formattedData: AllPostsByCategory = rawData
    ? rawData.map(
        (queryData) =>
          ({
            author: {
              name: queryData?.attributes.author?.data.attributes.name,
              profileImage: {
                alternativeText:
                  queryData?.attributes.author?.data.attributes.profileImage
                    .data.attributes.alternativeText,
                height:
                  queryData?.attributes.author?.data.attributes.profileImage
                    .data.attributes.formats.thumbnail.height,
                url: queryData?.attributes.author?.data.attributes.profileImage
                  .data.attributes.formats.thumbnail.url,
                width:
                  queryData?.attributes.author?.data.attributes.profileImage
                    .data.attributes.formats.thumbnail.width,
              },
            },
            categories: queryData?.attributes.categories?.data.map(
              (categories) => categories.attributes.category
            ),
            coverImage: {
              alternativeText:
                queryData?.attributes.coverImage?.data[0].attributes
                  .alternativeText,
              height:
                queryData?.attributes.coverImage?.data[0].attributes.formats
                  .small.height,
              url: queryData?.attributes.coverImage?.data[0].attributes.formats
                .small.url,
              width:
                queryData?.attributes.coverImage?.data[0].attributes.formats
                  .small.width,
            },
            id: queryData?.id,
            path: queryData?.attributes?.title
              ? queryData.attributes.title.replace(/[\W_]+/g, "-").toLowerCase()
              : "",
            publishedAt: queryData?.attributes.publishedAt,
            publishedAtFormatted: parseDate(
              queryData?.attributes.publishedAt ?? null,
              "my"
            ),
            subtitle: queryData?.attributes.subtitle,
            title: queryData?.attributes.title,
            topLevelPage: queryData?.attributes.top_level_page?.data.attributes,
          } as CardType)
      )
    : fallbackAllPostsByCategory;

  return formattedData;
}

/**
 * Methods to retrieve data for pages rendering all posts
 * @todos replicate in separate method for pages rendering all categories or posts
 */

/**
 * Get all posts by author
 * @used on author pages like '/author/[name]/posts' to retrieve all posts assigned to that content type
 * @param authorName
 * @returns
 * @todos finish posts page example & fix up function, interface...
 */
export async function getAllPostsByAuthor(authorName: string) {
  const data = await fetchAPI<FetchJSON["data"]>(
    `
    query AllPostsByAuthor {
      posts(filters: { author:{name : { contains: "${authorName}" }}} ) {
        meta {
          pagination {
            page
            pageSize
            pageCount
            total
          }
        }
        data {
          id
          attributes {
            author {
              data {
                id
                attributes {
                  name
                  profileImage {
                    data {
                      attributes {
                        alternativeText
                        formats
                      }
                    }
                  }
                }
              }
            }
            categories {
              data {
                attributes {
                  category
                }
              }
            }
            title
            subtitle
            coverImage {
              data {
                attributes {
                  url
                  alternativeText
                  name
                  hash
                  caption
                  formats
                  createdAt
                  updatedAt
                  size
                  width
                  height
                  provider
                }
              }
            }
            publishedAt
            top_level_page {
              data {
                attributes {
                  name
                }
              }
            }
          }
        }
      }
    }
  `
  );
  const rawData = data?.posts?.data;
  const formattedData: AllPostsByAuthor = rawData
    ? rawData.map(
        (queryData) =>
          ({
            author: {
              name: queryData?.attributes.author?.data.attributes.name,
              profileImage: {
                alternativeText:
                  queryData?.attributes.author?.data.attributes.profileImage
                    .data.attributes.alternativeText,
                height:
                  queryData?.attributes.author?.data.attributes.profileImage
                    .data.attributes.formats.thumbnail.height,
                url: queryData?.attributes.author?.data.attributes.profileImage
                  .data.attributes.formats.thumbnail.url,
                width:
                  queryData?.attributes.author?.data.attributes.profileImage
                    .data.attributes.formats.thumbnail.width,
              },
            },
            categories: queryData?.attributes.categories?.data.map(
              (categories) => categories.attributes.category
            ),
            coverImage: {
              alternativeText:
                queryData?.attributes.coverImage?.data[0].attributes
                  .alternativeText,
              height:
                queryData?.attributes.coverImage?.data[0].attributes.formats
                  .small.height,
              url: queryData?.attributes.coverImage?.data[0].attributes.formats
                .small.url,
              width:
                queryData?.attributes.coverImage?.data[0].attributes.formats
                  .small.width,
            },
            id: queryData?.id,
            path: queryData?.attributes?.title
              ? queryData.attributes.title.replace(/[\W_]+/g, "-").toLowerCase()
              : "",
            publishedAt: queryData?.attributes.publishedAt,
            publishedAtFormatted: parseDate(
              queryData?.attributes.publishedAt ?? null,
              "my"
            ),
            subtitle: queryData?.attributes.subtitle,
            title: queryData?.attributes.title,
            topLevelPage: queryData?.attributes.top_level_page?.data.attributes,
          } as CardType)
      )
    : fallbackAllPostsByAuthor;

  return formattedData;
}

// /**
//  * Get all posts
//  * @used on /posts/
//  * @param
//  * @returns
//  * @todos finish formattedData, finish fallback
//  */
// export async function getAllPosts() {
//   const data = await fetchAPI<FetchJSON["data"]>(
//     `
//     query AllPosts {
//       posts {
//         meta {
//           pagination {
//             page
//             pageSize
//             pageCount
//             total
//           }
//         }
//         data {
//           id
//           attributes {
//             author {
//               data {
//                 id
//                 attributes {
//                   name
//                   profileImage {
//                     data {
//                       attributes {
//                         alternativeText
//                         formats
//                       }
//                     }
//                   }
//                 }
//               }
//             }
//             categories {
//               data {
//                 attributes {
//                   category
//                 }
//               }
//             }
//             title
//             subtitle
//             coverImage {
//               data {
//                 attributes {
//                   url
//                   alternativeText
//                   name
//                   hash
//                   caption
//                   formats
//                   createdAt
//                   updatedAt
//                   size
//                   width
//                   height
//                   provider
//                 }
//               }
//             }
//             publishedAt
//             top_level_page {
//               data {
//                 attributes {
//                   name
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   `
//   );
//   const rawData = data?.posts?.data;
//   // const rawMeta = data?.posts?.meta; // figure out pagination

//   const formattedData = rawData
//     ? rawData.map((queryData) => ({
//         coverImage: {
//           alternativeText:
//             queryData?.attributes.coverImage?.data[0].attributes
//               .alternativeText,
//           height:
//             queryData?.attributes.coverImage?.data[0].attributes.formats
//               .thumbnail.height,
//           url: queryData?.attributes.coverImage?.data[0].attributes.formats
//             .thumbnail.url,
//           width:
//             queryData?.attributes.coverImage?.data[0].attributes.formats
//               .thumbnail.width,
//         },
//         id: queryData?.id,
//         path: queryData?.attributes?.title
//           ? queryData.attributes.title.replace(/[\W_]+/g, "-").toLowerCase()
//           : "",
//         subtitle: queryData?.attributes.subtitle,
//         title: queryData?.attributes.title,
//         topLevelPage: queryData?.attributes.top_level_page?.data.attributes,
//       }))
//     : ""; // fallbackAllPostsByCategory

//   return formattedData;
// }

/**
 * Get Home page data
 * @returns Home page single type heroMedia, pageTitle, shortDescription, socialMediaLinks
 */
export async function getHomePageData() {
  const data = await fetchAPI<FetchJSON["data"]>(
    `
    query HomePageData {
      home {
        data {
          attributes {
            pageTitle
            heroMedia {
              data {
                attributes {
                  alternativeText
                  height
                  url
                  width
                }
              }
            }
            shortDescription
            socialMediaLinks {
              Instagram
              Youtube
              TikTok
              LinkedIn
            }
          }
        }
      }
    }
  `
  );

  const rawData = data?.home?.data;
  const formattedData: HomePageData = rawData
    ? {
        heroMedia: {
          alternativeText:
            rawData?.attributes.heroMedia.data[0].attributes.alternativeText,
          height: rawData?.attributes.heroMedia.data[0].attributes.height,
          url: rawData?.attributes.heroMedia.data[0].attributes.url,
          width: rawData?.attributes.heroMedia.data[0].attributes.width,
        },
        pageTitle: rawData?.attributes.pageTitle,
        shortDescription: rawData?.attributes?.shortDescription,
        socialMediaLinks: rawData?.attributes.socialMediaLinks,
      }
    : fallbackHomePageData;

  return formattedData;
}

/**
 * Get page data by TLP
 * @returns single top level page data name, heroImage, shortDescription
 */
export async function getPageDataByTLP(topLevelPageName: string) {
  const data = await fetchAPI<FetchJSON["data"]>(
    ` 
    query TopLevelPages {
      topLevelPages(filters: { name : { contains: "${topLevelPageName}" }}) {
        data {
          attributes {
            heroImage {
              data {
                attributes {
                  alternativeText
                  formats
                  height
                  url
                  width
                }
              }
            }
            name
            shortDescription
          }
        }
      }
    }
  `
  );

  const rawData = data?.topLevelPages?.data[0];
  const formattedData: PageDataByTLP = rawData
    ? {
        heroImage: {
          alternativeText:
            rawData?.attributes.heroImage.data.attributes.alternativeText,
          height: rawData?.attributes.heroImage.data.attributes.height,
          url: rawData?.attributes.heroImage.data.attributes.url,
          width: rawData?.attributes.heroImage.data.attributes.width,
        },
        name: rawData?.attributes.name,
        shortDescription: rawData?.attributes?.shortDescription,
      }
    : fallbackPageDataByTLP;

  return formattedData;
}
