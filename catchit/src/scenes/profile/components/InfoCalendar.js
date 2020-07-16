import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Calendar } from "react-native-calendars";

const InfoCalendar = () => {
  return (
    <Calendar
      onDayPress={(date) => console.log("date", date)}
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
  );
};

export default InfoCalendar;

const styles = StyleSheet.create({});
