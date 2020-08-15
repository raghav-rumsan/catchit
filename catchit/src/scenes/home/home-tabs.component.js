import React from "react";
import { BottomNavigation, BottomNavigationTab } from "@ui-kitten/components";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectUser } from "../../redux/global/selectors";
import {
  PersonIcon,
  RulesIcon,
  SuperAdminIcon,
  NotificationsIcon,
} from "../../assets/icons";

const HomeTabs = ({ navigation, state }) => {
  return (
    <BottomNavigation
      selectedIndex={state.index}
      onSelect={(index) => navigation.navigate(state.routeNames[index])}
    >
      <BottomNavigationTab icon={PersonIcon} />
      <BottomNavigationTab icon={RulesIcon} />
      <BottomNavigationTab icon={NotificationsIcon} />
    </BottomNavigation>
  );
};

const mapStateToProps = createStructuredSelector({
  user: selectUser,
});

export default connect(mapStateToProps)(HomeTabs);
