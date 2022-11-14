const fallbackAPI = {
  data: {
    allPostPathsAndAuthor: [
      {
        author: "ian-roberts",
        path: "how-to-build-an-insulated-baseboard-for-the-3rd-gen-toyota-tacoma",
      },
      { author: "ian-roberts", path: "propex-heater-install" },
      { author: "ian-roberts", path: "apple-valley-ut-zion-national-park" },
      {
        author: "ian-roberts",
        path: "campervan-truck-camper-meetup-arches-national-park",
      },
      { author: "ian-roberts", path: "snowboarding-colorado-2022" },
      { author: "ian-roberts", path: "tripping-with-you-may-22" },
    ],
    allPostPathsAndTLP: [
      {
        path: "how-to-build-an-insulated-baseboard-for-the-3rd-gen-toyota-tacoma",
        topLevelPage: "builds",
      },
      { path: "propex-heater-install", topLevelPage: "builds" },
      { path: "apple-valley-ut-zion-national-park", topLevelPage: "trips" },
      {
        path: "campervan-truck-camper-meetup-arches-national-park",
        topLevelPage: "trips",
      },
      { path: "snowboarding-colorado-2022", topLevelPage: "trips" },
      { path: "tripping-with-you-may-22", topLevelPage: "trips" },
    ],
    allPostsByAuthor: [
      {
        author: {
          name: "Ian Roberts",
          profileImage: {
            alternativeText: "Ian Roberts @designaroni",
            height: 500,
            url: "/uploads/small_Ian_Roberts_Designaroni_cbcc2f778e.jpg",
            width: 500,
          },
        },
        categories: [
          "Toyota Tacoma",
          "Four Wheel Campers",
          "Project M",
          "Overlanding Build",
        ],
        coverImage: {
          alternativeText:
            "Picture of finished plywood & polyiso baseboard for a 2021 toyota tacoma",
          height: 281,
          url: "/uploads/small_insulated_baseboard_finished_cbce0ca461.jpg",
          width: 500,
        },
        id: "2",
        path: "how-to-build-an-insulated-baseboard-for-the-3rd-gen-toyota-tacoma",
        publishedAt: "2022-05-03T18:40:19.448Z",
        publishedAtFormatted: "May 2022",
        subtitle:
          "DIY steps on building an insluated baseboard for a 2021 Toyota Tacoma",
        title:
          "How to build an insulated baseboard for the 3rd gen Toyota Tacoma",
        topLevelPage: { name: "Builds" },
      },
      {
        author: {
          name: "Ian Roberts",
          profileImage: {
            alternativeText: "Ian Roberts @designaroni",
            height: 500,
            url: "/uploads/small_Ian_Roberts_Designaroni_cbcc2f778e.jpg",
            width: 500,
          },
        },
        categories: [
          "Toyota Tacoma",
          "Propex",
          "Four Wheel Campers",
          "Project M",
        ],
        coverImage: {
          alternativeText:
            "Propex HS2211 installed in a Pelican Case on a Four Wheel Campers & Toyota Tacoma",
          height: 281,
          url: "/uploads/small_propex_heater_hs2211_install_on_21_toyota_tacoma_four_wheel_campers_project_m_7249e05509.jpg",
          width: 500,
        },
        id: "3",
        path: "propex-heater-install",
        publishedAt: "2022-05-03T18:41:30.622Z",
        publishedAtFormatted: "May 2022",
        subtitle: "Propex HS2211 installed on a Four Wheel Campers Project M",
        title: "Propex Heater Install",
        topLevelPage: { name: "Builds" },
      },
      {
        author: {
          name: "Ian Roberts",
          profileImage: {
            alternativeText: "Ian Roberts @designaroni",
            height: 500,
            url: "/uploads/small_Ian_Roberts_Designaroni_cbcc2f778e.jpg",
            width: 500,
          },
        },
        categories: [
          "Hiking",
          "U.S. National Parks",
          "Zion National Park",
          "AirBnB's",
        ],
        coverImage: {
          alternativeText: "Some Hiking Trail at Zion National Park",
          height: 281,
          url: "/uploads/small_zion_national_park_hiking_trail_9dbe7041dd.jpg",
          width: 500,
        },
        id: "4",
        path: "apple-valley-ut-zion-national-park",
        publishedAt: "2022-05-03T21:10:43.247Z",
        publishedAtFormatted: "May 2022",
        subtitle: "February 4th - 6th 2022",
        title: "Apple Valley, UT & Zion National Park",
        topLevelPage: { name: "Trips" },
      },
      {
        author: {
          name: "Ian Roberts",
          profileImage: {
            alternativeText: "Ian Roberts @designaroni",
            height: 500,
            url: "/uploads/small_Ian_Roberts_Designaroni_cbcc2f778e.jpg",
            width: 500,
          },
        },
        categories: [
          "Hiking",
          "U.S. National Parks",
          "Camping",
          "Boondocking",
          "Arches National Park",
        ],
        coverImage: {
          alternativeText: "Some Arch at Arches National Park",
          height: 281,
          url: "/uploads/small_arches_national_park_some_arch_2a3de31751.jpg",
          width: 500,
        },
        id: "5",
        path: "campervan-truck-camper-meetup-arches-national-park",
        publishedAt: "2022-05-03T21:19:11.344Z",
        publishedAtFormatted: "May 2022",
        subtitle: "April 15th - 18th 2022",
        title: "Campervan/Truck Camper Meetup & Arches National Park",
        topLevelPage: { name: "Trips" },
      },
      {
        author: {
          name: "Ian Roberts",
          profileImage: {
            alternativeText: "Ian Roberts @designaroni",
            height: 500,
            url: "/uploads/small_Ian_Roberts_Designaroni_cbcc2f778e.jpg",
            width: 500,
          },
        },
        categories: ["Snowboarding", "Colorado"],
        coverImage: {
          alternativeText: "Snowboarding at Eldora Mountain Resort in Colorado",
          height: 281,
          url: "/uploads/small_snowboarding_colorado_2022_e8334a49e7.jpg",
          width: 500,
        },
        id: "6",
        path: "snowboarding-colorado-2022",
        publishedAt: "2022-05-09T17:02:23.329Z",
        publishedAtFormatted: "May 2022",
        subtitle:
          "5 days, 6 nights snowboarding Winter Park, Eldora & Copper Mountain",
        title: "Snowboarding Colorado 2022",
        topLevelPage: { name: "Trips" },
      },
      {
        author: {
          name: "Ian Roberts",
          profileImage: {
            alternativeText: "Ian Roberts @designaroni",
            height: 500,
            url: "/uploads/small_Ian_Roberts_Designaroni_cbcc2f778e.jpg",
            width: 500,
          },
        },
        categories: [
          "Four Wheel Campers",
          "Toyota Tacoma",
          "Camping",
          "Project M",
        ],
        coverImage: {
          alternativeText:
            "Camping at Smith Falls State Park Valentine Nebraska",
          height: 281,
          url: "/uploads/small_camping_at_smith_falls_state_park_valentine_nebraska_5102e4e4d7.jpg",
          width: 500,
        },
        id: "7",
        path: "tripping-with-you-may-22",
        publishedAt: "2022-09-07T16:00:05.277Z",
        publishedAtFormatted: "September 2022",
        subtitle: "11 states, 21 days, 3514 miles",
        title: "Tripping with you, May 22",
        topLevelPage: { name: "Trips" },
      },
    ],
    allPostsByCategory: [
      {
        author: {
          name: "Ian Roberts",
          profileImage: {
            alternativeText: "Ian Roberts @designaroni",
            height: 500,
            url: "/uploads/small_Ian_Roberts_Designaroni_cbcc2f778e.jpg",
            width: 500,
          },
        },
        categories: [
          "Hiking",
          "U.S. National Parks",
          "Zion National Park",
          "AirBnB's",
        ],
        coverImage: {
          alternativeText: "Some Hiking Trail at Zion National Park",
          height: 281,
          url: "/uploads/small_zion_national_park_hiking_trail_9dbe7041dd.jpg",
          width: 500,
        },
        id: "4",
        path: "apple-valley-ut-zion-national-park",
        publishedAt: "2022-05-03T21:10:43.247Z",
        publishedAtFormatted: "May 2022",
        subtitle: "February 4th - 6th 2022",
        title: "Apple Valley, UT & Zion National Park",
        topLevelPage: { name: "Trips" },
      },
      {
        author: {
          name: "Ian Roberts",
          profileImage: {
            alternativeText: "Ian Roberts @designaroni",
            height: 500,
            url: "/uploads/small_Ian_Roberts_Designaroni_cbcc2f778e.jpg",
            width: 500,
          },
        },
        categories: [
          "Hiking",
          "U.S. National Parks",
          "Camping",
          "Boondocking",
          "Arches National Park",
        ],
        coverImage: {
          alternativeText: "Some Arch at Arches National Park",
          height: 281,
          url: "/uploads/small_arches_national_park_some_arch_2a3de31751.jpg",
          width: 500,
        },
        id: "5",
        path: "campervan-truck-camper-meetup-arches-national-park",
        publishedAt: "2022-05-03T21:19:11.344Z",
        publishedAtFormatted: "May 2022",
        subtitle: "April 15th - 18th 2022",
        title: "Campervan/Truck Camper Meetup & Arches National Park",
        topLevelPage: { name: "Trips" },
      },
    ],
    allPostsByTLP: [
      {
        author: {
          name: "Ian Roberts",
          profileImage: {
            alternativeText: "Ian Roberts @designaroni",
            height: 500,
            url: "/uploads/small_Ian_Roberts_Designaroni_cbcc2f778e.jpg",
            width: 500,
          },
        },
        categories: [
          "Toyota Tacoma",
          "Four Wheel Campers",
          "Project M",
          "Overlanding Build",
        ],
        coverImage: {
          alternativeText:
            "Picture of finished plywood & polyiso baseboard for a 2021 toyota tacoma",
          height: 281,
          url: "/uploads/small_insulated_baseboard_finished_cbce0ca461.jpg",
          width: 500,
        },
        id: "2",
        path: "how-to-build-an-insulated-baseboard-for-the-3rd-gen-toyota-tacoma",
        publishedAt: "2022-05-03T18:40:19.448Z",
        publishedAtFormatted: "May 2022",
        subtitle:
          "DIY steps on building an insluated baseboard for a 2021 Toyota Tacoma",
        title:
          "How to build an insulated baseboard for the 3rd gen Toyota Tacoma",
        topLevelPage: { name: "Builds" },
      },
      {
        author: {
          name: "Ian Roberts",
          profileImage: {
            alternativeText: "Ian Roberts @designaroni",
            height: 500,
            url: "/uploads/small_Ian_Roberts_Designaroni_cbcc2f778e.jpg",
            width: 500,
          },
        },
        categories: [
          "Toyota Tacoma",
          "Propex",
          "Four Wheel Campers",
          "Project M",
        ],
        coverImage: {
          alternativeText:
            "Propex HS2211 installed in a Pelican Case on a Four Wheel Campers & Toyota Tacoma",
          height: 281,
          url: "/uploads/small_propex_heater_hs2211_install_on_21_toyota_tacoma_four_wheel_campers_project_m_7249e05509.jpg",
          width: 500,
        },
        id: "3",
        path: "propex-heater-install",
        publishedAt: "2022-05-03T18:41:30.622Z",
        publishedAtFormatted: "May 2022",
        subtitle: "Propex HS2211 installed on a Four Wheel Campers Project M",
        title: "Propex Heater Install",
        topLevelPage: { name: "Builds" },
      },
    ],
    featuredPostsByTLP: [
      {
        author: {
          name: "Ian Roberts",
          profileImage: {
            alternativeText: "Ian Roberts @designaroni",
            height: 500,
            url: "/uploads/small_Ian_Roberts_Designaroni_cbcc2f778e.jpg",
            width: 500,
          },
        },
        categories: [
          "Four Wheel Campers",
          "Toyota Tacoma",
          "Camping",
          "Project M",
        ],
        coverImage: {
          alternativeText:
            "Camping at Smith Falls State Park Valentine Nebraska",
          height: 281,
          url: "/uploads/small_camping_at_smith_falls_state_park_valentine_nebraska_5102e4e4d7.jpg",
          width: 500,
        },
        id: "7",
        path: "tripping-with-you-may-22",
        publishedAt: "2022-09-07T16:00:05.277Z",
        publishedAtFormatted: "September 2022",
        subtitle: "11 states, 21 days, 3514 miles",
        title: "Tripping with you, May 22",
        topLevelPage: { name: "Trips" },
      },
      {
        author: {
          name: "Ian Roberts",
          profileImage: {
            alternativeText: "Ian Roberts @designaroni",
            height: 500,
            url: "/uploads/small_Ian_Roberts_Designaroni_cbcc2f778e.jpg",
            width: 500,
          },
        },
        categories: [
          "Four Wheel Campers",
          "Toyota Tacoma",
          "Camping",
          "Project M",
        ],
        coverImage: {
          alternativeText:
            "Camping at Smith Falls State Park Valentine Nebraska",
          height: 281,
          url: "/uploads/small_camping_at_smith_falls_state_park_valentine_nebraska_5102e4e4d7.jpg",
          width: 500,
        },
        id: "7",
        path: "tripping-with-you-may-22",
        publishedAt: "2022-09-07T16:00:05.277Z",
        publishedAtFormatted: "September 2022",
        subtitle: "11 states, 21 days, 3514 miles",
        title: "Tripping with you, May 22",
        topLevelPage: { name: "Trips" },
      },
    ],
    footers: {
      data: [
        {
          attributes: {
            daysRemaining: "Days remaining in the year",
            fiveStrengths:
              "5 Strengths – Context, Input, Adaptability, Strategic & Futuristic",
            tagline: "Let's build the future.",
          },
        },
      ],
    },
    homePageData: {
      heroMedia: {
        alternativeText: "geran-de-klerk-qzgN45hseN0-unsplash-2.jpg",
        height: 563,
        url: "/uploads/medium_geran_de_klerk_qzg_N45hse_N0_unsplash_2_8c17dba089.jpg",
        width: 750,
      },
      pageTitle: "A Page Title",
      shortDescription:
        "I'm baby tacos slow-carb art party beard. Echo park sus flannel freegan bicycle rights tumeric est dreamcatcher bruh. Kitsch try-hard typewriter tofu flexitarian. Vape ethical twee, put a bird on it whatever banjo. Tousled 90's mustache. Taxidermy vice chia vinyl edison bulb forage.",
      socialMediaLinks: {
        Github: "https://github.com/designaroni",
        Instagram: "https://www.instagram.com/designaroni/",
        LinkedIn: "https://www.linkedin.com/in/ian-roberts-designaroni/",
        TikTok: "https://www.tiktok.com/@designaroni",
        Youtube: "https://www.youtube.com/channel/UCIH77UTZorw-xSK7h8mZfug",
      },
    },
    idFromPostPathsByTLP: [
      {
        id: "4",
        path: "apple-valley-ut-zion-national-park",
        title: "Apple Valley, UT & Zion National Park",
      },
      {
        id: "5",
        path: "campervan-truck-camper-meetup-arches-national-park",
        title: "Campervan/Truck Camper Meetup & Arches National Park",
      },
      {
        id: "6",
        path: "snowboarding-colorado-2022",
        title: "Snowboarding Colorado 2022",
      },
    ],
    latestCategoriesAndPaths: [
      { category: "Colorado", path: "colorado" },
      { category: "Snowboarding", path: "snowboarding" },
      { category: "Arches National Park", path: "arches-national-park" },
      { category: "Overlanding", path: "overlanding" },
      { category: "Boondocking", path: "boondocking" },
      { category: "Camping", path: "camping" },
    ],
    latestPostsAndTLP: [
      {
        path: "how-to-build-an-insulated-baseboard-for-the-3rd-gen-toyota-tacoma",
        title:
          "How to build an insulated baseboard for the 3rd gen Toyota Tacoma",
        topLevelPage: "builds",
      },
      {
        path: "campervan-truck-camper-meetup-arches-national-park",
        title: "Campervan/Truck Camper Meetup & Arches National Park",
        topLevelPage: "trips",
      },
      {
        path: "apple-valley-ut-zion-national-park",
        title: "Apple Valley, UT & Zion National Park",
        topLevelPage: "trips",
      },
      {
        path: "snowboarding-colorado-2022",
        title: "Snowboarding Colorado 2022",
        topLevelPage: "trips",
      },
      {
        path: "propex-heater-install",
        title: "Propex Heater Install",
        topLevelPage: "builds",
      },
    ],
    latestPostsByTLP: [
      {
        author: {
          name: "Ian Roberts",
          profileImage: {
            alternativeText: "Ian Roberts @designaroni",
            height: 500,
            url: "/uploads/small_Ian_Roberts_Designaroni_cbcc2f778e.jpg",
            width: 500,
          },
        },
        categories: [
          "Four Wheel Campers",
          "Toyota Tacoma",
          "Camping",
          "Project M",
        ],
        coverImage: {
          alternativeText:
            "Camping at Smith Falls State Park Valentine Nebraska",
          height: 281,
          url: "/uploads/small_camping_at_smith_falls_state_park_valentine_nebraska_5102e4e4d7.jpg",
          width: 500,
        },
        id: "7",
        path: "tripping-with-you-may-22",
        publishedAt: "2022-09-07T16:00:05.277Z",
        publishedAtFormatted: "September 2022",
        subtitle: "11 states, 21 days, 3514 miles",
        title: "Tripping with you, May 22",
        topLevelPage: { name: "Trips" },
      },
      {
        author: {
          name: "Ian Roberts",
          profileImage: {
            alternativeText: "Ian Roberts @designaroni",
            height: 500,
            url: "/uploads/small_Ian_Roberts_Designaroni_cbcc2f778e.jpg",
            width: 500,
          },
        },
        categories: [
          "Four Wheel Campers",
          "Toyota Tacoma",
          "Camping",
          "Project M",
        ],
        coverImage: {
          alternativeText:
            "Camping at Smith Falls State Park Valentine Nebraska",
          height: 281,
          url: "/uploads/small_camping_at_smith_falls_state_park_valentine_nebraska_5102e4e4d7.jpg",
          width: 500,
        },
        id: "7",
        path: "tripping-with-you-may-22",
        publishedAt: "2022-09-07T16:00:05.277Z",
        publishedAtFormatted: "September 2022",
        subtitle: "11 states, 21 days, 3514 miles",
        title: "Tripping with you, May 22",
        topLevelPage: { name: "Trips" },
      },
    ],
    pageDataByTLP: {
      heroImage: {
        alternativeText: "isaac-mitchell-HDHEol00Wos-unsplash.jpg",
        height: 750,
        url: "/uploads/medium_isaac_mitchell_HDH_Eol00_Wos_unsplash_008fea1b3b.jpg",
        width: 569,
      },
      name: "Trips",
      shortDescription:
        "Overlanding, Camping, Hiking, Snowboarding Trips Across the US in a Tacoma 4x4 TRD Offroad with a Four Wheel Campers Project M.",
    },
    pageMetaData: [
      {
        attributes: {
          pageMetaData: {
            description:
              "Designaroni.com – Trips, Journal, Builds, About, Work",
            title: "🏕️ Designaroni.com – Trips, Journal, Builds, About",
          },
        },
      },
    ],
    postContentById: {
      author: {
        bio:
          "Hey! 👋 I'm Ian Roberts – a Senior Front End Developer, hobby mechanic, travel & adventure nerd. Making the foothills of the Wasatch Mountains my home I live & work out of a Four Wheel Campers Project M. Find more about me, the technology of this site & where to find me on the internet on the [About](/About) page.\n" +
          "\n" +
          '<span className="socialTaglines">\n' +
          "💭 Forever Curious\n" +
          "\n" +
          "♾️Practicing engaged buddhism, deep ecology\n" +
          "\n" +
          "🌎 Cache Valley, UT\n" +
          "\n" +
          "🛻🏕️🥾👨‍🔧🏂⛷️\n" +
          "</span>",
        name: "Ian Roberts",
        profileImage: {
          alternativeText: "Ian Roberts @designaroni",
          height: 500,
          url: "/uploads/small_Ian_Roberts_Designaroni_cbcc2f778e.jpg",
          width: 500,
        },
      },
      bodyCopy:
        "### Oops, looks like the site went off grid...\n" +
        "\n" +
        "Nothing to see here, we'll fix this when we're back on the grid. \n" +
        "\n",
      categories: [
        "Hiking",
        "U.S. National Parks",
        "Zion National Park",
        "AirBnB's",
      ],
      coverImage: {
        alternativeText: "Some Hiking Trail at Zion National Park",
        height: 864,
        url: "/uploads/zion_national_park_hiking_trail_9dbe7041dd.jpg",
        width: 1536,
      },
      id: "4",
      pageMetaData: {
        description:
          "Our stay at an Apple Valley AirBnB tiny home park & hiking Zion National Park",
        title: "Apple Valley, UT & Zion National Park",
      },
      subtitle: "February 4th - 6th 2022",
      title: "Apple Valley, UT & Zion National Park",
      topLevelPage: { name: "Trips" },
    },
    postPathsByTLP: [
      "apple-valley-ut-zion-national-park",
      "campervan-truck-camper-meetup-arches-national-park",
      "snowboarding-colorado-2022",
    ],
    topLevelPageData: [
      {
        heroImage: {
          alternativeText: "isaac-mitchell-HDHEol00Wos-unsplash.jpg",
          height: 750,
          url: "/uploads/medium_isaac_mitchell_HDH_Eol00_Wos_unsplash_008fea1b3b.jpg",
          width: 569,
        },
        name: "Trips",
        shortDescription:
          "Overlanding, Camping, Hiking, Snowboarding Trips Across the US in a Tacoma 4x4 TRD Offroad with a Four Wheel Campers Project M.",
      },
      {
        heroImage: {
          alternativeText: "alexander-andrews-X62F1WQhuLI-unsplash.jpg",
          height: 513,
          url: "/uploads/medium_alexander_andrews_X62_F1_W_Qhu_LI_unsplash_6eb951ee84.jpg",
          width: 750,
        },
        name: "Journal",
        shortDescription:
          "A travel, hiking, running, truck life, overlanding, everyday adventure journal by Ian Roberts",
      },
      {
        heroImage: {
          alternativeText: "isaac-mitchell-BP3qDezFinc-unsplash.jpg",
          height: 750,
          url: "/uploads/medium_isaac_mitchell_BP_3q_Dez_Finc_unsplash_a67f50865b.jpg",
          width: 500,
        },
        name: "Builds",
        shortDescription:
          "Vehicle Builds by Ian Roberts – Current builds – a 2021 Toyota Tacoma 4x4 TRD Offroad with a Four Wheel Campers Project M & 1990 Jeep YJ Sahara Edition",
      },
      {
        heroImage: {
          alternativeText: "rick-gebhardt-_c7hWYN28m8-unsplash-2.jpg",
          height: 750,
          url: "/uploads/medium_rick_gebhardt_c7h_WYN_28m8_unsplash_2_20476c4e50.jpg",
          width: 500,
        },
        name: "About",
        shortDescription:
          "About this site? Ian Roberts, Digital Nomad, Popup Truck Camper Life & Senior Front End Developer | Designaroni",
      },
      {
        heroImage: {
          alternativeText: "bernin-uben-tioYUDleMjg-unsplash.jpg",
          height: 750,
          url: "/uploads/medium_bernin_uben_tio_YU_Dle_Mjg_unsplash_aff156209a.jpg",
          width: 600,
        },
        name: "Work",
        shortDescription:
          "Digital Front End Development Portfolio & Resume by – Currently working in React, React Native, Typescript, Front End Development",
      },
    ],
    topLevelPageNames: ["Trips", "Journal", "Builds", "About", "Work"],
  },
};

export default fallbackAPI;
