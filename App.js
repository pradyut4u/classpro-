import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import {AppSwitchNavigator} from './components/AppSwitchNavigator'
import Welcome from './screens/Welcome'

export default function App() {
  return (
    <AppContainer/>
  );
}

const AppContainer = createAppContainer(AppSwitchNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
