import * as React from 'react'

import {HomeScreen, TripsScreen} from '.'

import {BottomTabBar} from '../components'
import {Strings} from '../utils'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

const Tab = createBottomTabNavigator()

export const MainScreen = () => {
  return (
    <Tab.Navigator
      tabBar={props => <BottomTabBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        options={{title: Strings.HOME_SCREEN_TITLE}}
        name="HomeScreen"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          title: Strings.TRIPS_SCREEN_TITLE,
        }}
        name="TripsScreen"
        component={TripsScreen}
      />
    </Tab.Navigator>
  )
}
