import React, { useEffect } from "react";
import { connect } from "react-redux";
import { PageTitle } from "../../../components";
import * as mapDispatchToProps from "./actions";
import { createStructuredSelector } from "reselect";
import { selectLoading, reduxKey } from "./selectors";
import reducer from "./reducer";
import { useInjectReducer } from "../../../../utils/injectReducer";
import EmployeeTable from "./components/EmployeeTable";

const List = ({ getEmployeesList, ...props }) => {
  useInjectReducer({ key: reduxKey, reducer });

  useEffect(() => {
    getEmployeesList();
  }, []);

  return (
    <div>
      <PageTitle>Employees</PageTitle>
      <div>
        <EmployeeTable />
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  loading: selectLoading,
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
