import React from "react";
import { StyleSheet } from "react-native";
import {
  Button,
  Card,
  Layout,
  Modal as UIModal,
  Text,
} from "@ui-kitten/components";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectPickedDate } from "../selectors";
import * as mapDispatchToProps from "../actions";
import InfoCalendar from "./InfoCalendar";

const Modal = ({ datePicked, ...props }) => {
  console.log("datePicked", datePicked);
  return (
    <Layout style={styles.container} level="1">
      <InfoCalendar />
      <UIModal visible={datePicked !== ""}>
        <Card disabled={true}>
          <Text>Welcome to UI Kitten 😻</Text>
          <Button onPress={() => setVisible(false)}>DISMISS</Button>
        </Card>
      </UIModal>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: 192,
  },
});

const mapStateToProps = createStructuredSelector({
  datePicked: selectPickedDate,
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
