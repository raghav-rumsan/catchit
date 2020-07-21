import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { AppRoute } from "./app-routes";
import { EmployeeList, SuperAdminView } from "../scenes/superadmin";

const Stack = createStackNavigator();

export const SuperAdminNavigator = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name={AppRoute.SUPER_ADMIN_VIEW} component={SuperAdminView} />
    <Stack.Screen
      name={AppRoute.SUPER_ADMIN_EMPLOYEE_LIST}
      component={EmployeeList}
    />
  </Stack.Navigator>
);
