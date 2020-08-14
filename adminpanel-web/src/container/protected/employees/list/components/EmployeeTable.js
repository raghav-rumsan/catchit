import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectLoading, selectEmpList } from "../selectors";

const EmployeeTable = ({ loading, empList }) => {
  console.log("empList", empList);
  return <div>EmployeeTable</div>;
};

const mapStateToProps = createStructuredSelector({
  loading: selectLoading,
  empList: selectEmpList,
});

export default connect(mapStateToProps)(EmployeeTable);
