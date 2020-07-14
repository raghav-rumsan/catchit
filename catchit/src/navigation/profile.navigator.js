import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {AppRoute} from './app-routes';
import {ProfileScreen, ChangePasswordScreen} from '../scenes/profile';

const Stack = createStackNavigator();

export const ProfileNavigator = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name={AppRoute.PROFILE} component={ProfileScreen} />
    <Stack.Screen
      name={AppRoute.CHANGE_PASSWORD}
      component={ChangePasswordScreen}
    />
  </Stack.Navigator>
);
