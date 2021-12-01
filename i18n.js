const NextI18Next = require("next-i18next").default;
const { localeSubpaths } = require('next/config').default().publicRuntimeConfig;

const path = require('path');
path.resolve('/public/static/locales/');

module.exports = new NextI18Next({
  defaultLanguage: "en",
  otherLanguages: ["zh"],
  strictMode: false,
  // workaround until next-i18next support public path
  // https://github.com/isaachinman/next-i18next/issues/523
  // localePath: typeof window === "undefined" ? "/public/static/locales" : "/public/static/locales"
});