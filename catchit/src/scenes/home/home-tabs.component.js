import React from "react";
import { BottomNavigation, BottomNavigationTab } from "@ui-kitten/components";

export const HomeTabs = ({ navigation, state }) => {
  return (
    <BottomNavigation
      selectedIndex={state.index}
      onSelect={(index) => navigation.navigate(state.routeNames[index])}
    >
      <BottomNavigationTab title="Profile" />
      <BottomNavigationTab title="Details" />
    </BottomNavigation>
  );
};
