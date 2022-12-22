[![SonarCloud](https://sonarcloud.io/images/project_badges/sonarcloud-orange.svg)](https://sonarcloud.io/summary/new_code?id=Designaroni_designaroni-next)

[![GraphQL](https://badgen.net/badge/icon/graphql?icon=graphql&label)](https://graphql.org/)

[![Jira](https://badgen.net/badge/icon/jira?icon=jira&label)](https://designaroni.atlassian.net/jira/software/projects/DN/boards/1)

[![Designaroni Next Github](https://badgen.net/badge/icon/github?icon=github&label)](https://github.com/designaroni/designaroni-next)

[![Dependabot](https://badgen.net/badge/icon/dependabot?icon=dependabot&label)](https://github.com/Designaroni/designaroni-next/security/dependabot)

[![TypeScript](https://badgen.net/badge/icon/typescript?icon=typescript&label)](https://www.typescriptlang.org/)

[![Vercel Designaroni-next](https://badgen.net/badge/icon/vercel?icon=vercel&label)](https://vercel.com/designaroni/designaroni-next)

[![Git SCM](https://badgen.net/badge/icon/git?icon=git&label)](https://git-scm.com/)

![Terminal](https://badgen.net/badge/icon/terminal?icon=terminal&label)

![MIT License](https://badgen.net/badge/license/MIT/blue)

<!-- https://badgen.net/badge/icon/npm?icon=npm&label -->

# Environment Variables

- Copy `env.example` to `.env.local`
- For local development update vars to match localhost Strapi backend configuration
  `HOSTNAME=localhost`
  `NEXT_PUBLIC_STRAPI_API_URL=http://$HOSTNAME:1337`
  `NEXT_PUBLIC_IMAGES_DOMAIN=$HOSTNAME`
  `NEXT_PUBLIC_G_TAG_MEASUREMENT_ID=LOCALHOST`

## `Test` & `Production` environment specifics

- For both `test` and `production` environments on Vercel you will need to setup `Production`, `Preview` (and optionally if you are using a custom preview domain for your test branch `Preview on test`), environment variables hosted on Vercel.
  - As an example I am only currently using the following:
    - ```
      NEXT_PUBLIC_STRAPI_API_URL
      NEXT_PUBLIC_IMAGES_DOMAIN
      NEXT_PUBLIC_G_TAG_MEASUREMENT_ID
      ```
  - This project uses a Strapi headless cms backend hosted on Digital Ocean & AWS that serves a Graphql API to the frontend. As currently deployed the values for `NEXT_PUBLIC_STRAPI_API_URL` & `NEXT_PUBLIC_IMAGES_DOMAIN` relate specifically to the Strap `test` & `production` app URLs

---

# Custom `yarn` commands for this project

### `local`

Same command as `dev` used for local development to start and run the Next application. Used in parity with the local development command used to start [designaroni-strapi](https://github.com/Designaroni/designaroni-strapi)

### `lint`

Internally runs `$ yarn lint:ts; yarn lint:js; yarn lint:scss`

### `lint:js`

Internally runs `$ next lint` to lint the project using Next linting configuration.

### `lint:scss`

Internally runs `$ yarn stylelint '**/*.scss'` for linting based on the projects stylelint configuration

### `lint:ts`

Internally runs `tsc --noEmit` to invoke the TypeScript compiler, linting based on the `tsconfig.json` configuration.

---

# Getting Started

- Follow the steps over on the [designaroni-strapi](https://github.com/Designaroni/designaroni-strapi) **README** to configure the local apps content & API
  - Start the local development version of Strapi with `yarn local`.
- Within this Next app, run `yarn local` to start the frontend application.

---

# Coding style guide (WIP)

## SCSS & CSS Modules

### Overriding component utility classes in specialized components

- At times it is useful to override classes used in utility/layout components the following method can be used:
  - `[class^="section"].aboutSection { /* ... */ }`

---

# 🚀 Getting started with NextJs

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
