import React from "react";
import { StyleSheet, View } from "react-native";
import {
  ListItem,
  Button,
  Card,
  Text,
  ButtonGroup,
  Divider,
} from "@ui-kitten/components";
import { AppRoute } from "../../navigation/app-routes";
import MainLayout from "../../components/main-layout.component";

const SuperAdminView = (props) => {
  const handleViewButton = (route) => {
    props.navigation.navigate(route);
  };

  const accessoryButtons = (createRoute, viewRoute) => (
    <ButtonGroup appearance="primary">
      <Button onPress={() => handleViewButton(createRoute)}>Create</Button>
      <Button onPress={() => handleViewButton(viewRoute)}>List</Button>
    </ButtonGroup>
  );

  const lowerComponents = (description, createRoute, viewRoute) => (
    <View>
      <Text adjustsFontSizeToFit style={{ fontSize: 15, color: "grey" }}>
        {description}
      </Text>
      {accessoryButtons(createRoute, viewRoute)}
    </View>
  );

  return (
    <MainLayout title="Super Admin" navigation={props.navigation}>
      <Card>
        <ListItem
          title={() => <Text category="h5">Employees</Text>}
          description={() =>
            lowerComponents(
              "Handle the data of the employees",
              null,
              AppRoute.SUPER_ADMIN_EMPLOYEE_LIST
            )
          }
        />
        <Divider />
        <ListItem
          title={() => <Text category="h5">Quotes</Text>}
          description={() =>
            lowerComponents(
              "Handle the quotes",
              null,
              AppRoute.SUPER_ADMIN_EMPLOYEE_LIST
            )
          }
        />
      </Card>
    </MainLayout>
  );
};

export default SuperAdminView;

const styles = StyleSheet.create({});
