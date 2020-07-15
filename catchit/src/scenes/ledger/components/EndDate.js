import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Datepicker } from "@ui-kitten/components";
import { format } from "date-fns";
import { selectPrimaryValue, selectNormalizedFiscalYears } from "../selectors";
import * as mapDispatchToProps from "../actions";

const EndDate = (props) => {
  const [fieldErrors, setFieldErrors] = useState([]);
  useEffect(() => {
    if (props.error) {
      setFieldErrors(props.error);
    } else {
      setFieldErrors([]);
    }
  }, [props.error]);
  const maxDate =
    (props.allFiscalYears[props.currentFiscalYear] &&
      props.allFiscalYears[props.currentFiscalYear].end_date) ||
    "";
  return (
    <>
      <Datepicker
        date={props.endDate ? new Date(props.endDate) : null}
        onSelect={(newDate) =>
          props.setPrimaryValue({
            key: "end_date",
            value: format(newDate, "yyyy-MM-dd"),
          })
        }
        min={props.startDate ? new Date(props.startDate) : null}
        max={new Date(maxDate)}
        placeholder="end date"
        label="End Date"
        status={fieldErrors.length > 0 ? "danger" : "basic"}
        caption={fieldErrors.length > 0 ? fieldErrors.join("\r\n") : ""}
      />
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  startDate: selectPrimaryValue("start_date"),
  endDate: selectPrimaryValue("end_date"),
  currentFiscalYear: selectPrimaryValue("fiscal_year_id"),
  allFiscalYears: selectNormalizedFiscalYears,
});

export default connect(mapStateToProps, mapDispatchToProps)(EndDate);
