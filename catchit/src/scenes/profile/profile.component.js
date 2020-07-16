import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Button, Text, ListItem } from "@ui-kitten/components";
import MainLayout from "../../components/main-layout.component";
import { RefreshIcon } from "../../assets/icons";
import DailyQuotes from "./components/DailyQuotes";
import BasicUserInfo from "./components/BasicUserInfo";
import InfoCalendar from "./components/InfoCalendar";
import AttendanceInfo from "./components/AttendanceInfo";
import ClockButton from "./components/ClockButton";

const ProfileScreen = (props) => {
  const renderRefresh = (props) => (
    <Button size="tiny" appearance="ghost" accessoryLeft={RefreshIcon} />
  );
  return (
    <MainLayout navigation={props.navigation}>
      <DailyQuotes />
      <BasicUserInfo />

      <InfoCalendar />

      <ClockButton />
      <AttendanceInfo />
    </MainLayout>
  );
};

const mapDispatchToProps = {};

const mapStateToProps = createStructuredSelector({});

export default connect(mapStateToProps)(ProfileScreen);
