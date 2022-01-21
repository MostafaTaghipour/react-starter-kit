import useAppLocale from "@app/hooks/useAppLocale";
import moment from "jalali-moment";
import React from "react";
import { Button, Container } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";

const Detail = () => {
  const { t } = useAppLocale();
  const history = useHistory();
  const { id } = useParams<{ id: string }>();

  return (
    <Container>
      <h1>{`Your Id is ${id}`}</h1>
      <Button variant="outline-primary mt-3" onClick={history.goBack}>
        Back
      </Button>
    </Container>
  );
};

export default Detail;
