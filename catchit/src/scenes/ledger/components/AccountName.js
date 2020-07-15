import React, { useEffect, useState } from "react";
import { Autocomplete } from "@ui-kitten/components";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectAccountNames,
  selectPrimaryValue,
  selectAccountInput,
} from "../selectors";
import * as mapDispatchToProps from "../actions";

const AccountName = (props) => {
  const { getAccountNames, error } = props;
  // const [isLoading, setIsLoading] = useState(false);

  const [fieldErrors, setFieldErrors] = useState([]);
  useEffect(() => {
    getAccountNames("");
  }, [getAccountNames]);
  useEffect(() => {
    if (error) {
      setFieldErrors(error);
    } else {
      setFieldErrors([]);
    }
  }, [error]);

  const handleSearchChange = (query) => {
    // setIsLoading(true);
    props.setAccountInput(query);

    props
      .getAccountNames(query)
      .then(() => {
        // setIsLoading(false);
      })
      .catch(console.error);
  };

  const handleResultSelect = (result) => {
    props.setPrimaryValue({
      key: "secondary_id",
      value: result.secondary_id,
    });
    if (result.account_id) {
      props.setPrimaryValue({
        key: "account_id",
        value: [result.account_id],
      });
    } else {
      props.setPrimaryValue({
        key: "account_id",
        value: [],
      });
    }

    props.setPrimaryValue({
      key: "type",
      value: result.type || "",
    });
    props.setAccountInput(result.title);
  };
  const results = props.account_names.map((account_name) => ({
    ...account_name,
    title: account_name.label,
  }));
  return (
    <Autocomplete
      placeholder="Search Account"
      value={props.accountInput}
      data={results}
      onChangeText={handleSearchChange}
      onSelect={handleResultSelect}
      label="Account Name"
      status={fieldErrors.length > 0 ? "danger" : "basic"}
      caption={fieldErrors.length > 0 ? fieldErrors.join("\r\n") : ""}
    />
  );
};

const mapStateToProps = createStructuredSelector({
  account_names: selectAccountNames,
  currentAccountNames: selectPrimaryValue("account_id"),
  accountInput: selectAccountInput,
});

export default connect(mapStateToProps, mapDispatchToProps)(AccountName);
