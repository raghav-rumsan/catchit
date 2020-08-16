import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Button, Text, ListItem } from "@ui-kitten/components";
import MainLayout from "../../components/main-layout.component";
import { RefreshIcon, HomeIcon } from "../../assets/icons";
import DailyQuotes from "./components/DailyQuotes";
import BasicUserInfo from "./components/BasicUserInfo";
import { Card } from "galio-framework";
import AttendanceInfo from "./components/AttendanceInfo";
import ClockButton from "./components/ClockButton";
import { ScrollView } from "react-native";
import Modal from "./components/modal.component";
import { selectDailyQuotes } from "./selectors";

const ProfileScreen = (props) => {
  const renderRefresh = (props) => (
    <Button size="tiny" appearance="ghost" accessoryLeft={RefreshIcon} />
  );
  return (
    <MainLayout title="Profile" navigation={props.navigation}>
      <DailyQuotes />
      <BasicUserInfo />
      <ScrollView>
        <Modal>
          <Card disabled={true}>
            <Text>Welcome to UI Kitten 😻</Text>
            <Button onPress={() => setVisible(false)}>DISMISS</Button>
          </Card>
        </Modal>
        <ClockButton />
        <AttendanceInfo />
      </ScrollView>
    </MainLayout>
  );
};

const mapDispatchToProps = {};

const mapStateToProps = createStructuredSelector({
  quotes: selectDailyQuotes,
});

export default connect(mapStateToProps)(ProfileScreen);
