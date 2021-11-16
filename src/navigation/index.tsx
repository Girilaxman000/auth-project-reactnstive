import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { navigationRef } from './RootNavigation'
import AppNavigator from "./AppNavigator"

const Navigator = () => {
  return (
    <NavigationContainer
      ref={navigationRef}>
      <AppNavigator initialRoute="Home" />
    </NavigationContainer>
  );
}

export default Navigator
