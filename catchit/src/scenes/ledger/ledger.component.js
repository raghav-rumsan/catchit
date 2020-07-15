import React, { useEffect } from "react";
import { connect } from "react-redux";
import { StyleSheet } from "react-native";
import { Divider, Layout } from "@ui-kitten/components";
import { Toolbar } from "../../components/toolbar.component";
import {
  SafeAreaLayout,
  SaveAreaInset,
} from "../../components/safe-area-layout.component";
import { MenuIcon } from "../../assets/icons";
import Form from "./components/Form";
import * as mapDispatchToProps from "./actions";

const LedgerScreen = (props) => {
  const { loadFiscalYears } = props;
  useEffect(() => {
    // initial load api calls
    try {
      loadFiscalYears();
    } catch (err) {
      console.error(err);
    }
  }, [loadFiscalYears]);

  return (
    <SafeAreaLayout style={styles.safeArea} insets={SaveAreaInset.TOP}>
      <Toolbar
        title="Ledger"
        backIcon={MenuIcon}
        onBackPress={props.navigation.toggleDrawer}
      />
      <Divider />
      <Layout style={styles.container}>
        <Form />
      </Layout>
    </SafeAreaLayout>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
});

export default connect(null, mapDispatchToProps)(LedgerScreen);
