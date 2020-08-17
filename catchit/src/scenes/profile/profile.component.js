import React from "react";
import { connect } from "react-redux";
import MainLayout from "../../components/main-layout.component";
import { RefreshIcon, HomeIcon } from "../../assets/icons";
import DailyQuotes from "./components/DailyQuotes";
import BasicUserInfo from "./components/BasicUserInfo";
import AttendanceInfo from "./components/AttendanceInfo";
import ClockButton from "./components/ClockButton";
import { ScrollView } from "react-native";
import Modal from "./components/Modal";

const ProfileScreen = (props) => {
  const renderRefresh = (props) => (
    <Button size="tiny" appearance="ghost" accessoryLeft={RefreshIcon} />
  );
  return (
    <MainLayout title="Profile" navigation={props.navigation} type="drawer">
      <DailyQuotes />
      <BasicUserInfo />
      <ScrollView>
        <Modal />
        <ClockButton />
        <AttendanceInfo />
      </ScrollView>
    </MainLayout>
  );
};

export default connect(null, null)(ProfileScreen);
