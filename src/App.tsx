import React from "react";
import { Helmet } from "react-helmet";
import useAppLocale from "./hooks/useAppLocale";
import Routes from "./Routes";
import Layout from "./components/Custom/Layout/Layout";
import ApplyTheme from "./components/ApplyTheme";

import "./App.scss";
import useAppTheme from "./hooks/useAppTheme";

const App = () => {
  const { locale, isRTL, t } = useAppLocale();
  const {
    theme: { primaryColor, bgColor, textColor, roundness },
    themeName,
  } = useAppTheme();

  return (
    <>
      <ApplyTheme
        colors={{
          primaryColor,
          bgColor,
          textColor,
        }}
      />
      <Helmet>
        <html
          lang={locale}
          dir={isRTL ? "rtl" : "ltr"}
          data-theme={themeName}
        />
        <title>{t("site_title")}</title>
        <meta name="description" content="Sample application" />

        <style>
          {`

            :root{
              --roundness : ${roundness}px;
            }

          `}
        </style>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "http://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                item: {
                  "@id": "https://example.com/books",
                  name: "Books",
                  image: "http://example.com/images/icon-book.png",
                },
              },
            ],
          })}
        </script>
      </Helmet>
      <Layout>
        <Routes />
      </Layout>
    </>
  );
};

export default App;

/**
 * TODO:
 * dynamicrendering
 * prerendering
 * staticrendering
 * pwa
 * deployment
 * minify
 * code splitting
 * redux + thunk + persist
 * web api
 * auth
 * error handeling
 * router auth guard
 * style in ssr
 * page structure
 * css typescript
 * test
 * storybook
 * Documentation
 */
