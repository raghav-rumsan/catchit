import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Card, Text } from "@ui-kitten/components";
import * as mapDispatchToProps from "../actions";
import { selectDailyQuotes } from "../selectors";

const DailyQuotes = ({ getDailyQuotes, quotes, ...props }) => {
  console.log("props", quotes);
  useEffect(() => {
    getDailyQuotes();
  }, []);

  return (
    <Card style={styles.quoteCard}>
      <Text category="h6" style={styles.quoteText}>
        "{quotes}"
      </Text>
    </Card>
  );
};

const mapStateToProps = createStructuredSelector({
  quotes: selectDailyQuotes,
});

export default connect(mapStateToProps, mapDispatchToProps)(DailyQuotes);

const styles = StyleSheet.create({
  quoteCard: {},
  quoteText: {
    fontStyle: "italic",
    textAlign: "center",
    color: "grey",
  },
});
