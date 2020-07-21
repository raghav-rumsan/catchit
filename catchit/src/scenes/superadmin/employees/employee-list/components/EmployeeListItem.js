import React, { useEffect } from "react";

import { ListItem, Card, Divider } from "@ui-kitten/components";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectEmployees, selectQuery } from "../selectors";
import * as mapDispatchToProps from "../actions";

const EmployeeListItem = ({ employees, getEmployeesList, query, ...props }) => {
  console.log("props", props);
  useEffect(() => {
    getEmployeesList();
  }, [query]);

  return (
    <Card>
      {employees.map((emp) => {
        return (
          <>
            <ListItem title={emp.full_name} description={emp.rank} />
            <Divider />
          </>
        );
      })}
    </Card>
  );
};

const mapStateToProps = createStructuredSelector({
  employees: selectEmployees,
  query: selectQuery,
});

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeListItem);
