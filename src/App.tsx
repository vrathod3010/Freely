// In App.js in a new project

import * as React from 'react'

import {HomeScreen, SplashScreen} from './screens'

import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

export type RootStackParamList = {
  HomeScreen: undefined
  SplashScreen: undefined
}

const Stack = createNativeStackNavigator<RootStackParamList>()

export const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="SplashScreen"
          component={SplashScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="HomeScreen"
          component={HomeScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
