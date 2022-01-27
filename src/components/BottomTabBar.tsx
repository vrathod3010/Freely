import {Colors, Strings} from '../utils'
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'

import {BottomTabBarProps} from '@react-navigation/bottom-tabs'
import {FText} from '.'
import {Icon} from 'react-native-elements'
import React from 'react'

export const BottomTabBar = ({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) => {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key]
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name

        const isFocused = state.index === index

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          })

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({name: route.name, merge: true})
          }
        }

        const getColor = () =>
          isFocused ? Colors.PRIMARY_TEXT : Colors.SECONDARY_TEXT

        const getIcon = () => {
          return options.title === Strings.HOME_SCREEN_TITLE
            ? isFocused
              ? Strings.HOME_TAB_ICON_FOCUSED
              : Strings.HOME_TAB_ICON_UNFOCUSED
            : isFocused
            ? Strings.TRIPS_TAB_ICON_FOCUSED
            : Strings.TRIPS_TAB_ICON_UNFOCUSED
        }
        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            style={styles.navItem}>
            <Icon
              type="ionicon"
              name={getIcon()}
              color={getColor()}
              tvParallaxProperties={undefined}
            />

            <FText style={[styles.navItemText, {color: getColor()}]}>
              {label}
            </FText>
          </TouchableOpacity>
        )
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 0.2,
    maxHeight: 100,
    backgroundColor: Colors.SCREEN_BACKGROUND_DARK,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  navItem: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  navItemText: {
    marginTop: 4,
  },
})
