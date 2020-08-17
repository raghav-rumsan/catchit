import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Card, Text } from "@ui-kitten/components";
import { getDailyQuotes } from "../actions";
import { selectDailyQuotes, selectLoading } from "../selectors";

const DailyQuotes = ({ getDailyQuotes, ...props }) => {
  console.log("props", props);
  useEffect(() => {
    getDailyQuotes();
  }, [getDailyQuotes]);

  return (
    <Card style={styles.quoteCard}>
      <Text category="h6" style={styles.quoteText}>
        "{props.quotes}"
      </Text>
    </Card>
  );
};

const mapStateToProps = createStructuredSelector({
  quotes: selectDailyQuotes,
  loading: selectLoading,
});

const mapDispatchToProps = {
  getDailyQuotes,
};

export default connect(mapStateToProps, mapDispatchToProps)(DailyQuotes);

const styles = StyleSheet.create({
  quoteCard: {},
  quoteText: {
    fontStyle: "italic",
    textAlign: "center",
    color: "grey",
  },
});
