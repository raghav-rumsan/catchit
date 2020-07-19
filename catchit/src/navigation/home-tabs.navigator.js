import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Layout, Text } from "@ui-kitten/components";
import { HomeTabs } from "../scenes/home";
import { ProfileScreen } from "../scenes/profile";
import { AppRoute } from "./app-routes";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectUser } from "../redux/global/selectors";
import { HomeIcon } from "../assets/icons";
import SuperAdminTabsNavigator from "./super-admin-tabs.navigator";

const { Navigator, Screen } = createBottomTabNavigator();

const OrdersScreen = () => (
  <Layout style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text category="h1">ORDERS</Text>
  </Layout>
);

const HomeTabsNavigator = ({ user }) => (
  <Navigator tabBar={(props) => <HomeTabs {...props} />}>
    <Screen name={AppRoute.PROFILE} component={ProfileScreen} />
    <Screen name={AppRoute.DETAILS} component={OrdersScreen} />
    <Screen
      name={AppRoute.SUPER_ADMIN}
      options={{
        tabBarVisible: user.role === "superadmin",
        tabBarIcon: HomeIcon,
      }}
      component={SuperAdminTabsNavigator}
    />
  </Navigator>
);

const mapStateToProps = createStructuredSelector({
  user: selectUser,
});

export default connect(mapStateToProps)(HomeTabsNavigator);
