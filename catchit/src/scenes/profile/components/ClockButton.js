import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, Spinner, Card } from "@ui-kitten/components";

const ClockButton = () => {
  const LoadingIndicator = (props) => (
    <View style={[props.style, styles.indicator]}>
      <Spinner size="small" />
    </View>
  );
  return (
    <Card style={styles.clockButtonCard}>
      <Button
        size="large"
        // appearance="outline"
        disabled={false}
        onPress={() => console.log("clockbutton")}
        // accessoryLeft={LoadingIndicator}
      >
        Clock In
      </Button>
    </Card>
  );
};

export default ClockButton;

const styles = StyleSheet.create({
  clockButtonCard: {
    padding: 10,
  },
});
