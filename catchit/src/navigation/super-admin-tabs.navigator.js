import React from "react";
import { Layout, Text } from "@ui-kitten/components";
import SuperAdminTabs from "../scenes/superadmin";
import { createBottomTabNavigator } from "@ui-kitten/components";

const { Navigator, Screen } = createBottomTabNavigator();

const UsersScreen = () => (
  <Layout style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text category="h1">USERS</Text>
  </Layout>
);

const OrdersScreen = () => (
  <Layout style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text category="h1">ORDERS</Text>
  </Layout>
);

const SuperAdminTabsNavigator = () => (
  <Navigator tabBar={(props) => <SuperAdminTabs {...props} />}>
    <Screen name="Users" component={UsersScreen} />
    <Screen name="Orders" component={OrdersScreen} />
  </Navigator>
);

export default SuperAdminTabsNavigator;
