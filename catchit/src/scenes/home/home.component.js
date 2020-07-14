import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Button, Text, ListItem } from "@ui-kitten/components";
import MainLayout from "../../components/main-layout.component";
import { RefreshIcon } from "../../assets/icons";

const HomeScreen = (props) => {
  const renderRefresh = (props) => (
    <Button size="tiny" appearance="ghost" accessoryLeft={RefreshIcon} />
  );
  return <MainLayout navigation={props.navigation}>Home Components</MainLayout>;
};

const mapDispatchToProps = {};

const mapStateToProps = createStructuredSelector({});

export default connect(mapStateToProps)(HomeScreen);
