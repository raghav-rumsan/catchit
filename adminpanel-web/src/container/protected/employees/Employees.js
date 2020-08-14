import React from "react";
import { Router } from "@reach/router";
import List from "./list/List";
import Create from "./create/Create";
import View from "./view/View";

const Employees = () => {
  return (
    <Router>
      <List path="list" />
      <Create path="create" />
      <View path="view/:id" />
    </Router>
  );
};

export default Employees;
