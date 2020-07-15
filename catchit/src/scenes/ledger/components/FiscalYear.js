import React from "react";
import { connect } from "react-redux";
import RNPickerSelect from "react-native-picker-select";
import { createStructuredSelector } from "reselect";
import { Text } from "@ui-kitten/components";
import * as mapDispatchToProps from "../actions";
import {
  selectFiscalYears,
  selectPrimaryValue,
  selectNormalizedFiscalYears,
} from "../selectors";

const FiscalYear = (props) => {
  const options = props.fiscalYears.map((fiscalYear) => ({
    label: fiscalYear.fiscal_year,
    value: `${fiscalYear.id}`,
  }));

  const handleYearChange = (data) => {
    if (!data) {
      return;
    }
    console.log(data, "handleYearChange");

    props.setPrimaryValue({ key: "fiscal_year_id", value: data });
    props.setPrimaryValue({
      key: "start_date",
      value: props.normalizedFiscalYears[data].start_date,
    });
    props.setPrimaryValue({
      key: "end_date",
      value: props.normalizedFiscalYears[data].end_date,
    });
  };
  return (
    <>
      <Text>Fiscal Year: </Text>
      <RNPickerSelect
        value={`${props.currentFiscalYear}`}
        onValueChange={handleYearChange}
        items={options}
      />
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  fiscalYears: selectFiscalYears,
  currentFiscalYear: selectPrimaryValue("fiscal_year_id"),
  normalizedFiscalYears: selectNormalizedFiscalYears,
});

export default connect(mapStateToProps, mapDispatchToProps)(FiscalYear);
