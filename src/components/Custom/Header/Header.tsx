import Link from "@app/components/Link";
import { defaultLang, supportedLangs } from "@app/helpers/i18n";
import useAppLocale from "@app/hooks/useAppLocale";
import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Container,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
// import DarkModeToggle from "react-dark-mode-toggle";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import styles from "./Header.module.scss";
import useAppTheme from "@app/hooks/useAppTheme";

const Header = () => {
  const { t, locale: lang } = useAppLocale();
  const { isDark, switchTheme } = useAppTheme();
  return (
    <header className="sticky-top">
      <Navbar bg="primary" variant="dark" expand="lg" className={styles.navbar} >
        <Container className="py-2">
          <Link to="/">
            <Navbar.Brand className="ms-0 me-5">{t("site_title")}</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto  mb-2 mb-lg-0">
              <NavLink
                to="/"
                className="nav-link"
                hrefLang={lang}
                exact={true}
                activeClassName="active"
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                hrefLang={lang}
                className="nav-link"
                activeClassName="active"
              >
                About
              </NavLink>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form inline className="d-flex justify-content-between">
              <FormControl
                type="text"
                placeholder="Search"
                className={`me-2 ${styles.searchInput}`}
              />
              <Button variant="outline-light">Search</Button>
            </Form>
            <Nav className={`ms-3 mb-2 mb-md-0 ${styles.langs}`}>
              {Object.keys(supportedLangs).map((code) => (
                <a
                  key={code}
                  hrefLang={code}
                  href={`/${code == defaultLang ? "" : code}`}
                  className={`nav-link ${code === lang ? "active" : ""}`}
                >
                  {code.toUpperCase()}
                </a>
              ))}
            </Nav>

            <DarkModeSwitch
              size={30}
              className={`ms-3 ${styles.themeToggle}`}
              sunColor="#fff"
              checked={isDark}
              onChange={(isChecked) =>
                switchTheme(isChecked ? "dark" : "light")
              }
            />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
