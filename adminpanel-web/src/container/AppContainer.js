import React, { useEffect, useState } from "react";
import { api } from "../api";
import { Router } from "@reach/router";
import { createStructuredSelector } from "reselect";
import { getUser } from "./actions";
import { connect } from "react-redux";
import {
  PublicRoute,
  PageNotFound,
  GuestRoute,
  ProtectedRoute,
} from "./components";
import LayoutContainer from "../components/layout/LayoutContainer";
import { selectToken } from "./selectors";
import "antd/dist/antd.dark.css";

import { Dashboard, Quotes, Employees } from "./protected";
import { Login } from "./guest";
import NotSuperAdmin from "./guest/not-superadmin/NotSuperAdmin";
const AppContainer = ({ token, getUser }) => {
  useEffect(() => {
    api.defaults.headers.common.Authorization = token;
    if (token) {
      getUser();
    }
  }, [token, getUser]);

  return (
    <>
      <LayoutContainer>
        <Router>
          <ProtectedRoute container={Dashboard} path="/" />
          <ProtectedRoute container={Quotes} path="quotes/*" />
          <ProtectedRoute container={Employees} path="employees/*" />
          <PublicRoute container={NotSuperAdmin} path="unauthorized" />
          <GuestRoute container={Login} path="login" />
          <PublicRoute container={PageNotFound} path="*" />
        </Router>
      </LayoutContainer>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  token: selectToken,
});

const mapDispatchToProps = {
  getUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
