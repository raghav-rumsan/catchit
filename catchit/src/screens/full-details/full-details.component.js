import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "galio-framework";
import MainLayout from "../../components/main-layout.component";

const FullDetailsComponent = (props) => {
  return (
    <MainLayout drawer navigation={props.navigation} title="Full Details">
      <Text h1>This is the component for full Details</Text>
    </MainLayout>
  );
};

export default FullDetailsComponent;

const styles = StyleSheet.create({});
