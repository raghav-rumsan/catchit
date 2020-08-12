import React from "react";
import { ErrorBoundary } from "../index";
import { Row, Col } from "antd";
import "./loader.css";

const Loader = () => (
  <ErrorBoundary>
    <Row>
      <Col>
        <h1>Loading...</h1>
      </Col>
    </Row>
  </ErrorBoundary>
);

export default Loader;
