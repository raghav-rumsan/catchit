import React from "react";
import { StyleSheet } from "react-native";
import { connect } from "react-redux";
import { Card, Text } from "@ui-kitten/components";

const DailyQuotes = ({}) => {
  return (
    <Card style={styles.quoteCard}>
      <Text category="h6" style={styles.quoteText}>
        "{`Life is just beautiful`}"
      </Text>
    </Card>
  );
};

export default connect(null, null)(DailyQuotes);

const styles = StyleSheet.create({
  quoteCard: {},
  quoteText: {
    fontStyle: "italic",
    textAlign: "center",
  },
});
