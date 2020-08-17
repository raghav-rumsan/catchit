import React from "react";
import { StyleSheet } from "react-native";
import { Layout, Modal as UIModal } from "@ui-kitten/components";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectPickedDate } from "../selectors";
import * as mapDispatchToProps from "../actions";
import InfoCalendar from "./InfoCalendar";

const Modal = ({ datePicked, children, ...props }) => {
  console.log("datePicked", datePicked);
  return (
    <Layout style={styles.container} level="1">
      <InfoCalendar />
      <UIModal backdropStyle={styles.modalBackDrop} visible={false}>
        {children}
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
