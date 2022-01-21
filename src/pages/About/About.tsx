import Link from "@app/components/Link";
import React from "react";
import useAppLocale from "@app/hooks/useAppLocale";
import styles from "./About.module.scss";
import { BrowserView, MobileView } from "react-device-detect";
import { Button, Container } from "react-bootstrap";
import useAppTheme from "@app/hooks/useAppTheme";

const About = () => {
  const { t } = useAppLocale();
  const { themeName, switchTheme } = useAppTheme();

  return (
    <Container>
      <h2 className={styles.test}>{t("about.title")}</h2>
      <Link to="/">Back</Link>
      <BrowserView>
        <h1> This is rendered only in browser </h1>
      </BrowserView>
      <MobileView>
        <h1> This is rendered only on mobile </h1>
      </MobileView>

      <Button
        variant="primary"
        onClick={() => {
          switchTheme(themeName == "dark" ? "light" : "dark");
        }}
      >{`switch to ${themeName == "dark" ? "light" : "dark"}`}</Button>
    </Container>
  );
};

export default About;
