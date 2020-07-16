import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Layout, Text } from "@ui-kitten/components";
import { HomeTabs } from "../scenes/home";
import { ProfileScreen } from "../scenes/profile";
import { AppRoute } from "./app-routes";

const { Navigator, Screen } = createBottomTabNavigator();

const UsersScreen = (props) => (
  //   <MainLayout navigation={props.navigation}>
  <Text category="h1">USERS</Text>
  //   </MainLayout>
);

const OrdersScreen = () => (
  <Layout style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text category="h1">ORDERS</Text>
  </Layout>
);

const HomeTabsNavigator = () => (
  <Navigator tabBar={(props) => <HomeTabs {...props} />}>
    <Screen name={AppRoute.PROFILE} component={ProfileScreen} />
    <Screen name={AppRoute.DETAILS} component={OrdersScreen} />
  </Navigator>
);

export default HomeTabsNavigator;
