import * as React from 'react'

import {Text, View} from 'react-native'

import Ionicons from 'react-native-vector-icons/Ionicons'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

function HomeTab() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home!</Text>
    </View>
  )
}

function ListTab() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
    </View>
  )
}

const Tab = createBottomTabNavigator()

export const HomeScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName

          if (route.name === 'Home') {
            iconName = focused
              ? 'ios-information-circle'
              : 'ios-information-circle-outline'
          } else if (route.name === 'Settings') {
            iconName = focused ? 'ios-list-box' : 'ios-list'
          }

          // You can return any component that you like here!
          return <Ionicons name={'home'} size={12} color={'red'} />
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen name="Home" component={HomeTab} />
      <Tab.Screen name="Settings" component={ListTab} />
    </Tab.Navigator>
  )
}
