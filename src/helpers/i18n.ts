import messages_fa from "@app/Assets/locales/fa.json";
import messages_en from "@app/Assets/locales/en.json";
import "@formatjs/intl-numberformat/polyfill-force";
import "@formatjs/intl-numberformat/locale-data/fa";
import "@formatjs/intl-numberformat/locale-data/en";
import "@formatjs/intl-datetimeformat/polyfill-force";
import "@formatjs/intl-datetimeformat/locale-data/fa";
import "@formatjs/intl-datetimeformat/locale-data/en";


const messages = {
  fa: messages_fa,
  en: messages_en,
};

export const defaultLang = "fa";

export const supportedLangs = {
  en: "English",
  fa: "Persian",
};

export function determineUserLang(acceptedLangs, path = null) {
  // check url for /en/foo where en is a supported language code
  if (path !== null) {
    const urlLang = path.trim().split("/")[1];

    const matchingUrlLang = findFirstSupported([stripCountry(urlLang)]);

    if (matchingUrlLang) {
      return matchingUrlLang;
    }
  }

  // check browser-set accepted langs
  const matchingAcceptedLang = undefined; // findFirstSupported(acceptedLangs.map(stripCountry));

  return matchingAcceptedLang || defaultLang;
}

export function dir(lang) {
  return lang === "fa" ? "rtl" : "ltr";
}

function findFirstSupported(langs) {
  const supported = Object.keys(supportedLangs);

  return langs.find((code) => supported.includes(code));
}

function stripCountry(lang) {
  return lang.trim().replace("_", "-").split("-")[0];
}

export function getMessages(lang: string) {
  return messages[lang];
}
