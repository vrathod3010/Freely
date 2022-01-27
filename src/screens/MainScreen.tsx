import * as React from 'react'

import {Colors, Strings} from '../utils'
import {HomeScreen, TripsScreen} from '.'

import {BottomTabBar} from '../components'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

const Tab = createBottomTabNavigator()

export const MainScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerTintColor: Colors.PRIMARY_TEXT,
        headerStyle: {
          backgroundColor: Colors.SCREEN_BACKGROUND_DARK,
        },
      }}
      tabBar={props => <BottomTabBar {...props} />}>
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
