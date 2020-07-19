import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Button, Text, ListItem } from "@ui-kitten/components";
import MainLayout from "../../components/main-layout.component";
import { RefreshIcon, HomeIcon } from "../../assets/icons";
import DailyQuotes from "./components/DailyQuotes";
import BasicUserInfo from "./components/BasicUserInfo";
import InfoCalendar from "./components/InfoCalendar";
import AttendanceInfo from "./components/AttendanceInfo";
import ClockButton from "./components/ClockButton";
import { ScrollView } from "react-native";

const ProfileScreen = (props) => {
  const renderRefresh = (props) => (
    <Button size="tiny" appearance="ghost" accessoryLeft={RefreshIcon} />
  );
  return (
    <MainLayout navigation={props.navigation}>
      <DailyQuotes />
      <BasicUserInfo />
      <ScrollView>
        <InfoCalendar />

        <ClockButton />
        <AttendanceInfo />
      </ScrollView>
    </MainLayout>
  );
};

const mapDispatchToProps = {};

const mapStateToProps = createStructuredSelector({});

export default connect(mapStateToProps)(ProfileScreen);
