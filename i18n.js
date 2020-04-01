const NextI18Next = require("next-i18next").default;

module.exports = new NextI18Next({
  defaultLanguage: "en",
  otherLanguages: ["zh"],
  strictMode: false,
  // workaround until next-i18next support public path
  // https://github.com/isaachinman/next-i18next/issues/523
  // localePath: typeof window === "undefined" ? "/public/static/locales" : "/public/static/locales"
});