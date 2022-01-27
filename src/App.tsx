import {MainScreen, SplashScreen, TripDetailScreen} from './screens'
import {TransitionPresets, createStackNavigator} from '@react-navigation/stack'

import {Colors} from './utils'
import {NavigationContainer} from '@react-navigation/native'
import {Provider} from 'react-redux'
import React from 'react'
import {StatusBar} from 'react-native'
import {Trip} from './models'
import {store} from './redux'

export type RootStackParamList = {
  MainScreen: undefined
  SplashScreen: undefined
  HomeScreen: undefined
  TripsScreen: undefined
  TripDetailScreen: {trip: Trip}
}

const Stack = createStackNavigator<RootStackParamList>()

export const App = () => {
  return (
    <Provider store={store}>
      <StatusBar barStyle={'light-content'} />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShadowVisible: false,
            headerTintColor: Colors.PRIMARY_TEXT,
            headerStyle: {
              backgroundColor: Colors.SCREEN_BACKGROUND_DARK,
            },
          }}>
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="SplashScreen"
            component={SplashScreen}
          />
          <Stack.Screen
            options={{
              headerShown: false,
              ...TransitionPresets.ModalFadeTransition,
            }}
            name="MainScreen"
            component={MainScreen}
          />
          <Stack.Screen
            name="TripDetailScreen"
            options={({route}) => ({
              headerShown: true,
              headerTitle: route.params.trip.name,
              headerBackTitle: 'Back',
            })}
            component={TripDetailScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}
