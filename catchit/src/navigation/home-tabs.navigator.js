import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeTabs } from "../scenes/home";
import { ProfileScreen } from "../scenes/profile";
import { AppRoute } from "./app-routes";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectUser } from "../redux/global/selectors";
import { HomeIcon } from "../assets/icons";
import { Rules } from "../scenes/rules";
import { SuperAdminNavigator } from "./super-admin.navigator";
import { NotificationsScreen } from "../scenes/notifications";

const { Navigator, Screen } = createBottomTabNavigator();

const HomeTabsNavigator = ({ user }) => (
  <Navigator tabBar={(props) => <HomeTabs {...props} />}>
    <Screen name={AppRoute.PROFILE} component={ProfileScreen} />
    <Screen name={AppRoute.RULES} component={Rules} />
    <Screen name={AppRoute.NOTIFICATIONS} component={NotificationsScreen} />
    <Screen
      name={AppRoute.SUPER_ADMIN}
      options={{
        tabBarVisible: user.role === "superadmin",
        tabBarIcon: HomeIcon,
      }}
      component={SuperAdminNavigator}
    />
  </Navigator>
);

const mapStateToProps = createStructuredSelector({
  user: selectUser,
});

export default connect(mapStateToProps)(HomeTabsNavigator);
