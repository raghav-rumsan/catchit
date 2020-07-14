import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { AppRoute } from "./app-routes";
import { HomeDrawer, HomeScreen } from "../scenes/home";
import { HomeIcon } from "../assets/icons";

const Drawer = createDrawerNavigator();

// FIXME(REACT-NAVIGATION-5): Not able to disable a pan gesture.
//
// In v4, it was possible with `navigationOptions: { gesturesEnabled: false }`
// Basically, I want to do this to disable `back` navigation from home screen to auth
// For Android, it can be covered with custom BackHandler.
//
// I'm not sure if it is a "true way", but I find it better
// rather than hard-coding business logic in navigators
// like it is described in https://reactnavigation.org/docs/en/next/auth-flow.html

export const HomeNavigator = () => (
  // @ts-ignore: `drawerContent` also contains a DrawerNavigationProp
  <Drawer.Navigator drawerContent={HomeDrawer}>
    <Drawer.Screen
      name={AppRoute.HOME}
      component={HomeScreen}
      options={{ title: "Home", drawerIcon: HomeIcon }}
    />
  </Drawer.Navigator>
);
