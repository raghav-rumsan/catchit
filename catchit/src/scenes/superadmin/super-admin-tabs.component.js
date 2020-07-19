import React from "react";
import { TabBar, Tab } from "@ui-kitten/components";

const SuperAdminTabs = ({ navigation, state }) => (
  <TabBar
    selectedIndex={state.index}
    onSelect={(index) => navigation.navigate(state.routeNames[index])}
  >
    <Tab title="View" />
    <Tab title="Create" />
  </TabBar>
);

export default SuperAdminTabs;
