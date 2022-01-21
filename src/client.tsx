import React from "react";
import { hydrate, render } from "react-dom";
import Cookie from "js-cookie";
import AppContainer from "./AppContainer";
import { determineUserLang } from "./helpers/i18n";

// const locale = Cookie.get("locale") || "fa";

const lang = determineUserLang(
  navigator.languages || [],
  window.location.pathname
);
if (process.env.BUILD_TYPE == "iso")
  hydrate(<AppContainer locale={lang} />, document.getElementById("root"));
else render(<AppContainer locale={lang} />, document.getElementById("root"));

if (module.hot) {
  module.hot.accept();
}
