import {MainScreen, SplashScreen, TripDetailScreen} from './screens'

import {NavigationContainer} from '@react-navigation/native'
import {Provider} from 'react-redux'
import React from 'react'
import {Trip} from './models'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {store} from './redux'

export type RootStackParamList = {
  MainScreen: undefined
  SplashScreen: undefined
  HomeScreen: undefined
  TripsScreen: undefined
  TripDetailScreen: {trip: Trip}
}

const Stack = createNativeStackNavigator<RootStackParamList>()

export const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
          <Stack.Screen name="MainScreen" component={MainScreen} />
          <Stack.Screen name="TripDetailScreen" component={TripDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}
