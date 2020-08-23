import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Calendar } from "react-native-calendars";
import { Card } from "@ui-kitten/components";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectPickedDate } from "../selectors";
import * as mapDispatchToProps from "../actions";

const InfoCalendar = ({ setValue, ...props }) => {
  return (
    <Card>
      <Calendar
        onDayPress={({ dateString }) =>
          setValue({ key: "datePicked", value: dateString })
        }
        markedDates={{
          "2020-07-14": {
            periods: [
              { startingDay: false, endingDay: true, color: "#5f9ea0" },
              { startingDay: false, endingDay: true, color: "#ffa500" },
              { startingDay: true, endingDay: false, color: "#f0e68c" },
            ],
          },
          "2020-07-17": {
            periods: [
              { startingDay: true, endingDay: false, color: "#ffa500" },
              { color: "transparent" },
              { startingDay: false, endingDay: false, color: "#f0e68c" },
            ],
          },
        }}
        // Date marking style [simple/period/multi-dot/custom]. Default = 'simple'
        markingType="multi-period"
      />
    </Card>
  );
};

const mapStateToProps = createStructuredSelector({
  datePicked: selectPickedDate,
});

export default connect(mapStateToProps, mapDispatchToProps)(InfoCalendar);

const styles = StyleSheet.create({});
