import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Layout, Text } from "@ui-kitten/components";
import { SuperAdminTabs } from "../scenes/superadmin";

const { Navigator, Screen } = createMaterialTopTabNavigator();

const UsersScreen = () => (
  <Layout style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text category="h1">View</Text>
  </Layout>
);

const OrdersScreen = () => (
  <Layout style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text category="h1">Create</Text>
  </Layout>
);

const SuperAdminTabsNavigator = () => (
  <Navigator tabBar={(props) => <SuperAdminTabs {...props} />}>
    <Screen name="Users" component={UsersScreen} />
    <Screen name="Orders" component={OrdersScreen} />
  </Navigator>
);

export default SuperAdminTabsNavigator;
