import React from "react";
import { StyleSheet, Text, View } from "react-native";

const AttendanceInfo = () => {
  return (
    <View style={styles.attendanceInfoMainView}>
      <View style={styles.attendanceInfoInnerView}>
        <Text
          style={{ ...styles.attendanceInfoText, backgroundColor: "green" }}
        >
          1
        </Text>
      </View>
      <View style={styles.attendanceInfoInnerView}>
        <Text style={{ ...styles.attendanceInfoText, backgroundColor: "red" }}>
          3
        </Text>
      </View>
      <View style={styles.attendanceInfoInnerView}>
        <Text style={{ ...styles.attendanceInfoText, backgroundColor: "blue" }}>
          3
        </Text>
      </View>
    </View>
  );
};

export default AttendanceInfo;

const styles = StyleSheet.create({
  attendanceInfoMainView: {
    display: "flex",
    flexDirection: "row",
  },
  attendanceInfoInnerView: {
    flex: 8,
  },
  attendanceInfoText: {
    textAlign: "center",
    color: "white",
    borderRadius: 50,
    margin: 20,
    padding: 15,
    fontSize: 18,
  },
});
