import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {Datepicker} from '@ui-kitten/components';
import {format} from 'date-fns';
import {selectPrimaryValue, selectNormalizedFiscalYears} from '../selectors';
import * as mapDispatchToProps from '../actions';

const StartDate = props => {
  const [fieldErrors, setFieldErrors] = useState([]);
  useEffect(() => {
    if (props.error) {
      setFieldErrors(props.error);
    } else {
      setFieldErrors([]);
    }
  }, [props.error]);
  const minDate =
    (props.allFiscalYears[props.currentFiscalYear] &&
      props.allFiscalYears[props.currentFiscalYear].start_date) ||
    '';
  return (
    <>
      <Datepicker
        label="Start Date"
        date={props.startDate ? new Date(props.startDate) : null}
        placeholder="start date"
        onSelect={newDate =>
          props.setPrimaryValue({
            key: 'start_date',
            value: format(newDate, 'yyyy-MM-dd'),
          })
        }
        min={new Date(minDate)}
        max={props.endDate ? new Date(props.endDate) : null}
        status={fieldErrors.length > 0 ? 'danger' : 'basic'}
        caption={fieldErrors.length > 0 ? fieldErrors.join('\r\n') : ''}
      />
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  startDate: selectPrimaryValue('start_date'),
  endDate: selectPrimaryValue('end_date'),
  currentFiscalYear: selectPrimaryValue('fiscal_year_id'),
  allFiscalYears: selectNormalizedFiscalYears,
});

export default connect(mapStateToProps, mapDispatchToProps)(StartDate);
