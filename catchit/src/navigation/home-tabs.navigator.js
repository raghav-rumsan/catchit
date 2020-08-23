import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeTabs } from "../screens/home";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { AppRoute } from "./app-routes";
import { selectUser } from "../redux/global/selectors";
import { HomeIcon } from "../assets/icons";
import { Rules } from "../screens/rules";
import { NotificationsScreen } from "../screens/notifications";
import { ProfileScreen } from "../screens/profile";

const { Navigator, Screen } = createBottomTabNavigator();

const HomeTabsNavigator = ({ user }) => (
  <Navigator tabBar={(props) => <HomeTabs {...props} />}>
    <Screen name={AppRoute.PROFILE} component={ProfileScreen} />
    <Screen name={AppRoute.RULES} component={Rules} />
    <Screen name={AppRoute.NOTIFICATIONS} component={NotificationsScreen} />
  </Navigator>
);

const mapStateToProps = createStructuredSelector({
  user: selectUser,
});

export default connect(mapStateToProps)(HomeTabsNavigator);
