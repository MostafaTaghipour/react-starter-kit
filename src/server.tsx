import express from "express";
import { renderApp } from "./helpers/renderApp";
import cookieParser from "cookie-parser";

const server = express()
  .disable("x-powered-by")
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR!))
  .use(cookieParser())
  .get("/*", (req: express.Request, res: express.Response) => {
    const { html = "", redirect = false, lang } = renderApp(req);

    // res.cookie("locale", lang, {
    //   maxAge: new Date().getDate() * 0.001 + 365 * 24 * 3600,
    // });

    if (redirect) {
      res.redirect(redirect);
    } else {
      res.send(html);
    }
  });

export default server;
