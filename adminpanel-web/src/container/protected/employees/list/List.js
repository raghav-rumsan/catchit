import React, { useEffect } from "react";
import { connect } from "react-redux";
import { PageTitle } from "../../../components";
import * as mapDispatchToProps from "./actions";
import { createStructuredSelector } from "reselect";
import { selectLoading, reduxKey, selectQuery } from "./selectors";
import reducer from "./reducer";
import { useInjectReducer } from "../../../../utils/injectReducer";
import EmployeeTable from "./components/EmployeeTable";
import { LinkedButton } from "../../../components";

const List = ({ getEmployeesList, loading, query, ...props }) => {
  useInjectReducer({ key: reduxKey, reducer });

  useEffect(() => {
    getEmployeesList();
  }, []);

  return (
    <div>
      <LinkedButton to="../create" type="primary" position="right">
        {" "}
        Register a New Employee
      </LinkedButton>
      <PageTitle>Employees List</PageTitle>
      <div>
        <EmployeeTable />
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  loading: selectLoading,
  query: selectQuery,
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
