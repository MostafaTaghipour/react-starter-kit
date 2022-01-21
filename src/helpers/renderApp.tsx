import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import Helmet from "react-helmet";
import fs from "fs";
import path from "path";
import acceptLanguage from "accept-language";
import AppContainer from "@app/AppContainer";
import serialize from "serialize-javascript";
import { determineUserLang } from "./i18n";

// acceptLanguage.languages(["fa", "en"]);

// We'll be in the /build dir when this runs, so we find the template
// file relative to /build.
const htmlTemplateFilename = path.resolve(
  __dirname,
  "..",
  "temp",
  "index.html"
);

let assets: any;

const syncLoadAssets = () => {
  assets = require(process.env.RAZZLE_ASSETS_MANIFEST!);
};
syncLoadAssets();

const cssLinksFromAssets = (assets, entrypoint) => {
  return assets[entrypoint]
    ? assets[entrypoint].css
      ? assets[entrypoint].css
          .map((asset) => `<link rel="stylesheet" href="${asset}">`)
          .join("")
      : ""
    : "";
};

const jsScriptTagsFromAssets = (assets, entrypoint, extra = "") => {
  return assets[entrypoint]
    ? assets[entrypoint].js
      ? assets[entrypoint].js
          .map((asset) => `<script src="${asset}"${extra}></script>`)
          .join("")
      : ""
    : "";
};

// const detectLocale = (req: express.Request) => {
//   const cookieLocale = req.cookies.locale;

//   return (
//     acceptLanguage.get(cookieLocale || req.headers["accept-language"]) || "fa"
//   );
// };

export const renderApp = (req: express.Request) => {
  const context: any = {};

  // const locale = detectLocale(req);
  const lang = determineUserLang(req.acceptsLanguages(), req.path);

  const markup = renderToString(
    <AppContainer req={req} context={context} locale={lang} />
  );

  if (context.url) {
    return { redirect: context.url, lang };
  } else {
    let html = fs.readFileSync(htmlTemplateFilename, "utf8");
    const css = cssLinksFromAssets(assets, "client");

    const js = `
    ${jsScriptTagsFromAssets(assets, "client", " defer crossorigin")}`;

    const helmet = Helmet.renderStatic();

    html = html.replace(
      "helmetHtmlAttributes",
      helmet.htmlAttributes.toString()
    );
    html = html.replace(
      "helmetBodyAttributes",
      helmet.bodyAttributes.toString()
    );
    html = html.replace(
      `<link rel="icon" href="<%= process.env.PUBLIC_PATH %>favicon.ico" />`,
      ""
    );
    html = html.replace("<!-- HelmetTitle -->", helmet.title.toString());
    html = html.replace("<!-- HelmetMeta -->", helmet.meta.toString());
    html = html.replace("<!-- HelmetLink -->", helmet.link.toString());
    html = html.replace("<%= htmlWebpackPlugin.tags.headTags %>", css);
    html = html.replace("<%= htmlWebpackPlugin.tags.bodyTags %>", js);
    html = html.replace("<!-- AppContent -->", markup);

    return { html, lang };
  }
};
