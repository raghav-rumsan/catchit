import React from "react";
import { Router } from "@reach/router";
import Create from "./create/Create";

const Quotes = () => {
  return (
    <Router>
      <Create path="create" />
    </Router>
  );
};

export default Quotes;
