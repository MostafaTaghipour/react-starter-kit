import Link from "@app/components/Link";
import React from "react";
import { Container } from "react-bootstrap";

const NotFound = () => {
  return (
    <Container className="d-flex justify-content-center align-items-center flex-column">
      <h1 className="display-1">404</h1>
      <Link to="/">Go Home</Link>
    </Container>
  );
};

export default NotFound;
