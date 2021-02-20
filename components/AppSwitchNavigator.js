import React from 'react'
import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import Welcome from '../screens/Welcome'
import Home from '../screens/Home'
import Sell from '../screens/Sell'

export const AppSwitchNavigator =createSwitchNavigator({
  Welcome:{screen:Welcome},
  Home:{screen:Home},
  Sell:{screen:Sell}
})