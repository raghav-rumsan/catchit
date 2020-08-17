import React from "react";
import { StyleSheet } from "react-native";
import {
  Layout,
  Modal as UIModal,
  Card,
  Button,
  Text,
} from "@ui-kitten/components";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectPickedDate } from "../selectors";
import * as mapDispatchToProps from "../actions";
import InfoCalendar from "./InfoCalendar";

const Modal = ({ datePicked, setValue, children, ...props }) => {
  console.log("datePicked", datePicked);
  const handleBackDropPress = () => {
    setValue({ key: "datePicked", value: "" });
  };
  return (
    <Layout style={styles.container} level="3">
      <InfoCalendar />
      <UIModal
        visible={datePicked}
        onBackdropPress={handleBackDropPress}
        backdropStyle={styles.modalBackDrop}
      >
        <Card>
          <Text category="h1">{datePicked}</Text>
          <Button>Take a Leave</Button>
          <Button>Ask For a Meeting</Button>
          <Button>Ask For a Team</Button>
          <Button onPress={handleBackDropPress}>Cancel</Button>
        </Card>
      </UIModal>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: 192,
  },
  modalBackDrop: {
    padding: 20,
    backgroundColor: 20,
    fontSize: 12,
    opacity: 1,
  },
});

const mapStateToProps = createStructuredSelector({
  datePicked: selectPickedDate,
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
