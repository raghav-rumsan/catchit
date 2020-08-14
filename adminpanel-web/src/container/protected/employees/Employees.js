import React from "react";
import { Router } from "@reach/router";
import List from "./list/List";

const Employees = () => {
  return (
    <Router>
      <List path="/list" />
    </Router>
  );
};

export default Employees;
