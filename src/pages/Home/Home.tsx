import Link from "@app/components/Link";
import useAppLocale from "@app/hooks/useAppLocale";
import moment from "jalali-moment";
import React from "react";
import { Button, Container } from "react-bootstrap";


const Home = () => {
  const { t } = useAppLocale();
  let todayJalali = moment().format("YYYY/M/D");

  return (
    <Container>
      <h1>{t("home.title", { name: "Mostafa" })}</h1>
      <h5 className="text-secondary mt-3">{todayJalali}</h5>
      <Link to="/detail/23" className="mt-3">Go to detail</Link>
    </Container>
  );
};

export default Home;
