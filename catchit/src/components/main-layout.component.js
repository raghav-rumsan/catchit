import React from "react";
import { StyleSheet } from "react-native";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  Divider,
  Layout,
  MenuItem,
  Text,
  useTheme,
} from "@ui-kitten/components";
import { Toolbar } from "./toolbar.component";
import {
  MenuIcon,
  InfoIcon,
  LogoutIcon,
  HomeIcon,
  MoneyIcon,
} from "../assets/icons";
import { AppRoute } from "../navigation/app-routes";
import { SafeAreaLayout, SaveAreaInset } from "./safe-area-layout.component";
import { logoutUser } from "../redux/global/actions";

const MainLayout = (props) => {
  const theme = useTheme();

  const handleUserLogout = async () => {
    try {
      await props.logoutUser();
      props.navigation.navigate(AppRoute.AUTH);
    } catch (error) {
      console.log("error", error);
    }
  };

  const menu = (callback = () => null) => (
    <>
      <MenuItem
        accessoryLeft={MoneyIcon}
        title="Bounties"
        onPress={() => {
          callback();
          // props.navigation.navigate(AppRoute.ABOUT);
        }}
      />
      {/* <MenuItem
        accessoryLeft={InfoIcon}
        title="About"
        onPress={() => {
          callback();
          // props.navigation.navigate(AppRoute.ABOUT);
        }}
      /> */}
      <MenuItem
        accessoryLeft={LogoutIcon}
        title="Log Out"
        onPress={handleUserLogout}
      />
    </>
  );
  // const onMenuItemSelect = index => {
  //   const {[index]: selectedItem} = menu;

  //   switch (selectedItem.title) {
  //     case 'Log Out':
  //       props.logoutUser();
  //       props.navigation.navigate(AppRoute.AUTH);
  //       break;
  //     default:
  //       props.navigation.navigate(selectedItem.route);
  //       break;
  //   }
  // };
  return (
    <SafeAreaLayout style={styles.safeArea} insets={SaveAreaInset.TOP}>
      <Toolbar
        title={
          <Text
            category="h6"
            status="control"
            style={{ color: theme["color-primary-white"] }}
          >
            <HomeIcon /> Home
          </Text>
        }
        // title={props.title || props.client.name}
        backIcon={MenuIcon}
        onBackPress={props.navigation.toggleDrawer}
        menu={menu}
      />
      <Divider />
      <Layout style={styles.container}>{props.children}</Layout>
    </SafeAreaLayout>
  );
};

const mapDispatchToProps = {
  logoutUser,
};

const mapStateToProps = createStructuredSelector({});

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 5,
    // justifyContent: "center",
    // alignItems: "center",
  },
});
