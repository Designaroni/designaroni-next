/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.HOSTNAME || "https://designaroni.com",
  generateRobotsTxt: true,
};
