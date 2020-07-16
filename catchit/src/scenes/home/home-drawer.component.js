import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import { Drawer, DrawerItem, Text } from "@ui-kitten/components";

const DrawerHeader = () => (
  <View>
    <Text appearance="h1">Catch it</Text>
  </View>
);

export const HomeDrawer = (props) => {
  console.log("props", props);
  const onMenuItemSelect = (index) => {
    const selectedTabRoute = props.state.routeNames[index.row];
    props.navigation.navigate(selectedTabRoute);
    props.navigation.closeDrawer();
  };

  const createNavigationItemForRoute = (route) => {
    const { options } = props.descriptors[route.key];
    return {
      routeName: route.name,
      // @ts-ignore: all Drawer Screens strictly have string title
      title: options.title,
      // @ts-ignore: all Drawer Screens strictly have UI Kitten Icon
      icon: options.drawerIcon,
    };
  };

  return (
    <Drawer
      selectedIndex={props.state.index}
      header={DrawerHeader}
      onSelect={onMenuItemSelect}
    >
      {props.state.routes.map(createNavigationItemForRoute).map((each) => (
        <DrawerItem key={each.routeName} title={each.title} />
      ))}
    </Drawer>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 160,
  },
});
