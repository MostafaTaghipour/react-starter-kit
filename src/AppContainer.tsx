import express from "express";
import React from "react";
import { BrowserRouter, StaticRouter } from "react-router-dom";
import { StaticRouterContext } from "react-router";
import App from "./App";
import { defaultLang, getMessages } from "./helpers/i18n";
import { IntlProvider } from "react-intl";
import { Context as ResponsiveContext } from "react-responsive";
import { ThemeProvider } from "./Providers/ThemeProvider";
import moment from "jalali-moment";

const AppContainer = (props: {
  req?: express.Request;
  context?: StaticRouterContext;
  locale: string;
}) => {
  const { context, req, locale } = props;
  const isServer = req && context;
  const localeBaseUrl = locale == defaultLang ? "/" : `/${locale}`;
  //set  momentjs locale
  moment.locale(locale);

  const renderContent = () => {
    return (
      <IntlProvider
        locale={locale}
        messages={getMessages(locale)}
        defaultLocale={defaultLang}
      >
        <ThemeProvider>
          <ResponsiveContext.Provider value={{}}>
            <App />
          </ResponsiveContext.Provider>
        </ThemeProvider>
      </IntlProvider>
    );
  };

  return isServer ? (
    <StaticRouter context={context} location={req.url} basename={localeBaseUrl}>
      {renderContent()}
    </StaticRouter>
  ) : (
    <BrowserRouter basename={localeBaseUrl}>{renderContent()}</BrowserRouter>
  );
};

export default AppContainer;
