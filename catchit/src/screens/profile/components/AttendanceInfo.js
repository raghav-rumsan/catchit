import React from "react";
import { StyleSheet, Text, View } from "react-native";

const AttendanceInfo = () => {
  return (
    <View style={styles.attendanceInfoMainView}>
      <View style={styles.attendanceInfoInnerView}>
        <Text
          style={{ ...styles.attendanceInfoText, backgroundColor: "#457d32" }}
        >
          1
        </Text>
      </View>
      <View style={styles.attendanceInfoInnerView}>
        <Text
          style={{ ...styles.attendanceInfoText, backgroundColor: "#c92d2a" }}
        >
          3
        </Text>
      </View>
      <View style={styles.attendanceInfoInnerView}>
        <Text
          style={{ ...styles.attendanceInfoText, backgroundColor: "#2d40a1" }}
        >
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
    marginTop: 10,
    marginLeft: 40,
    marginRight: 40,
    marginBottom: 20,
    padding: 10,
    fontSize: 18,
    fontWeight: "bold",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
});
