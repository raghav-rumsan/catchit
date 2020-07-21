import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";
import { Layout } from "@ui-kitten/components";
import { Toolbar } from "../../../../components/toolbar.component";
import EmployeeListItem from "./components/EmployeeListItem";

const EmployeeList = (props) => {
  return (
    <>
      {/* <Layout> */}
      <Toolbar
        onBackPress={() => props.navigation.goBack()}
        title="Employees"
      />
      <EmployeeListItem />
      {/* </Layout> */}
    </>
  );
};

export default connect()(EmployeeList);

const styles = StyleSheet.create({});
