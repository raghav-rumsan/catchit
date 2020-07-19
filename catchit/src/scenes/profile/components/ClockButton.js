import React from "react";
import { StyleSheet, View } from "react-native";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { Spinner, Card } from "@ui-kitten/components";
import { Button } from "react-native-paper";
import { ClockIcon } from "../../../assets/icons";
import { selectClocked } from "../selectors";

const ClockButton = ({ clocked }) => {
  const LoadingIndicator = (props) => (
    <View style={[props.style, styles.indicator]}>
      <Spinner size="small" />
    </View>
  );
  return (
    <Card style={styles.clockButtonCard}>
      <Button
        size="large"
        mode="contained"
        icon={ClockIcon}
        style={{
          ...styles.clockButton,
          backgroundColor: clocked ? "#1856ba" : "#9e331b",
        }}
        disabled={false}
        loading={false}
        onPress={() => console.log("clockbutton")}
        // accessoryLeft={LoadingIndicator}
      >
        {clocked ? "Clock In" : "Clock Out"}
      </Button>
    </Card>
  );
};

const mapStateToProps = createStructuredSelector({
  clocked: selectClocked,
});

export default connect(mapStateToProps)(ClockButton);

const styles = StyleSheet.create({
  clockButtonCard: {
    padding: 5,
    margin: 5,
  },
  clockButton: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
});
